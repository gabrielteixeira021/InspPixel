import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL = 'https://picsum.photos/v2'
const IMAGES_PER_PAGE = 30

export const useImageStore = defineStore('images', {
  state: () => ({
    images: [],
    loading: false,
    error: null,
    currentPage: 1,
    searchQuery: '',
    cache: new Map()
  }),

  actions: {
    async fetchImages() {
      console.log('🔍 fetchImages called - loading:', this.loading, 'currentPage:', this.currentPage)
      
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const cacheKey = `page_${this.currentPage}`
        
        if (this.cache.has(cacheKey)) {
          console.log('📦 Using cached data for', cacheKey)
          const cachedData = this.cache.get(cacheKey)
          this.images = [...this.images, ...cachedData]
          this.loading = false
          return
        }

        console.log('🌐 Fetching from API:', `${API_BASE_URL}/list?page=${this.currentPage}&limit=${IMAGES_PER_PAGE}`)
        
        const response = await axios.get(`${API_BASE_URL}/list`, {
          params: {
            page: this.currentPage,
            limit: IMAGES_PER_PAGE
          }
        })

        console.log('✅ API Response received:', response.data.length, 'images')

        // Otimizar URLs das imagens para carregar mais rápido
        const newImages = response.data.map(img => ({
          ...img,
          download_url: `https://picsum.photos/id/${img.id}/600/400`
        }))
        
        this.cache.set(cacheKey, newImages)
        this.images = [...this.images, ...newImages]
        
        console.log('📊 Total images now:', this.images.length)
        
      } catch (error) {
        console.error('❌ Error fetching images:', error)
        this.error = 'Erro ao carregar imagens. Tente novamente.'
      } finally {
        this.loading = false
      }
    },

    async loadMoreImages() {
      this.currentPage++
      await this.fetchImages()
    },

    async searchImages(query) {
      this.searchQuery = query.toLowerCase()
      
      if (!query.trim()) {
        this.resetSearch()
        return
      }

      this.loading = true
      
      // Simulate search by filtering by author name
      // Since Lorem Picsum doesn't have a search API, we'll filter locally
      setTimeout(() => {
        const allCachedImages = []
        this.cache.forEach(images => {
          allCachedImages.push(...images)
        })

        const filtered = allCachedImages.filter(image => 
          image.author.toLowerCase().includes(this.searchQuery)
        )

        this.images = filtered

        // If no results in cache, fetch new images
        if (filtered.length === 0) {
          this.images = []
          this.currentPage = 1
          this.fetchImages()
        }

        this.loading = false
      }, 300)
    },

    resetSearch() {
      this.searchQuery = ''
      this.images = []
      this.currentPage = 1
      this.fetchImages()
    },

    clearCache() {
      this.cache.clear()
    }
  },

  getters: {
    hasImages: (state) => state.images.length > 0,
    totalImages: (state) => state.images.length
  }
})
