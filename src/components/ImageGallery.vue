<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import ImageCard from './ImageCard.vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['image-click'])

const handleImageClick = (image) => {
  emit('image-click', image)
}

const columns = ref([[], [], [], []])
const columnCount = ref(4)

const updateColumnCount = () => {
  const width = window.innerWidth
  if (width < 640) {
    columnCount.value = 2
  } else if (width < 1024) {
    columnCount.value = 3
  } else {
    columnCount.value = 4
  }
  distributeImages()
}

const distributeImages = () => {
  const newColumns = Array.from({ length: columnCount.value }, () => [])
  
  props.images.forEach((image, index) => {
    const columnIndex = index % columnCount.value
    newColumns[columnIndex].push(image)
  })
  
  columns.value = newColumns
}

// Watch for images changes
watch(() => props.images, () => {
  distributeImages()
}, { immediate: true, deep: true })

onMounted(() => {
  updateColumnCount()
  window.addEventListener('resize', updateColumnCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateColumnCount)
})
</script>

<template>
  <div class="gallery">
    <div v-if="images.length === 0 && !loading" class="empty-state">
      <div class="empty-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
      <h2>Nenhuma imagem encontrada</h2>
      <p>Tente ajustar sua busca ou explore nossa galeria</p>
    </div>

    <div v-else class="masonry-grid">
      <div 
        v-for="(column, columnIndex) in columns" 
        :key="columnIndex" 
        class="masonry-column"
      >
        <ImageCard
          v-for="image in column"
          :key="image.id"
          :image="image"
          @click="handleImageClick(image)"
        />
      </div>
    </div>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Carregando mais inspirações...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.gallery {
  width: 100%;
}

.masonry-grid {
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: $breakpoint-mobile) {
    gap: 12px;
  }
}

.masonry-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: $breakpoint-mobile) {
    gap: 12px;
  }
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: $text-secondary;

  .empty-icon {
    display: inline-flex;
    padding: 24px;
    background: $surface-color;
    border-radius: 50%;
    margin-bottom: 24px;

    svg {
      color: $text-tertiary;
    }
  }

  h2 {
    font-size: 24px;
    color: $text-primary;
    margin: 0 0 8px 0;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
}

.loading {
  text-align: center;
  padding: 40px 20px;
  color: $text-secondary;

  .spinner {
    width: 40px;
    height: 40px;
    margin: 0 auto 16px;
    border: 3px solid $border-color;
    border-top-color: $primary-color;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
