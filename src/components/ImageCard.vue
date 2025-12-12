<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

const isLoaded = ref(false)
const hasError = ref(false)

const aspectRatio = computed(() => {
  // Usar proporção 2:3 (400/600) para as imagens otimizadas
  return 66.67
})

const handleImageLoad = () => {
  isLoaded.value = true
}

const handleImageError = () => {
  hasError.value = true
  isLoaded.value = true
}

onMounted(() => {
  // Força o carregamento da imagem
  const img = new Image()
  img.onload = handleImageLoad
  img.onerror = handleImageError
  img.src = props.image.download_url
})
</script>

<template>
  <div class="image-card" @click="$emit('click')">
    <div class="image-wrapper" :style="{ paddingBottom: `${aspectRatio}%` }">
      <div v-if="!isLoaded && !hasError" class="skeleton"></div>
      
      <img
        v-if="isLoaded && !hasError"
        :src="image.download_url"
        :alt="`Foto por ${image.author}`"
        class="image"
      />

      <div v-if="hasError" class="error-placeholder">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>

      <div class="overlay">
        <div class="overlay-content">
          <div class="author">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>{{ image.author }}</span>
          </div>
          
          <div class="dimensions">
            {{ image.width }} × {{ image.height }}
          </div>
        </div>

        <button class="view-btn" aria-label="Ver imagem">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;
@use 'sass:color';

.image-card {
  position: relative;
  cursor: pointer;
  border-radius: $border-radius-lg;
  overflow: hidden;
  background: $surface-color;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

    .overlay {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: $surface-color;
}

.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    $surface-color 0%,
    color.adjust($surface-color, $lightness: 3%) 50%,
    $surface-color 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

.image {
  position: absolute;
  top: 0;
.error-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: $surface-color;
  color: $text-tertiary;

  svg {
    flex-shrink: 0;
  }
}
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.1) 70%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  color: white;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.author {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;

  svg {
    flex-shrink: 0;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.dimensions {
  font-size: 12px;
  opacity: 0.9;
  font-weight: 400;
}

.view-btn {
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: $border-radius;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
