<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import ImageGallery from './components/ImageGallery.vue'
import ImageModal from './components/ImageModal.vue'
import { useImageStore } from './stores/imageStore'

const imageStore = useImageStore()
const selectedImage = ref(null)
const searchQuery = ref('')

const handleSearch = (query) => {
  searchQuery.value = query
  imageStore.searchImages(query)
}

const handleImageClick = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.documentElement.scrollHeight - 500

  if (scrollPosition >= threshold && !imageStore.loading) {
    imageStore.loadMoreImages()
  }
}

onMounted(() => {
  imageStore.fetchImages()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app">
    <HeaderComponent @search="handleSearch" />
    
    <main class="main-content">
      <ImageGallery 
        :images="imageStore.images" 
        :loading="imageStore.loading"
        @image-click="handleImageClick"
      />
    </main>

    <ImageModal 
      v-if="selectedImage" 
      :image="selectedImage" 
      @close="closeModal"
    />
  </div>
</template>

<style lang="scss">
@use './assets/styles/variables' as *;
@use './assets/styles/global';

#app {
  min-height: 100vh;
  background: $background-color;
}

.main-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 20px 40px;

  @media (max-width: $breakpoint-tablet) {
    padding: 80px 16px 32px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 70px 12px 24px;
  }
}
</style>
