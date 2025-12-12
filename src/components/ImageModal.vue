<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

const handleDownload = () => {
  window.open(props.image.download_url, '_blank')
}

const handleOriginalLink = () => {
  window.open(`https://unsplash.com/@${props.image.author}`, '_blank')
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <button class="close-btn" @click="$emit('close')" aria-label="Fechar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="modal-content">
        <div class="image-container">
          <img
            :src="image.download_url"
            :alt="`Foto por ${image.author}`"
            class="modal-image"
          />
        </div>

        <div class="modal-info">
          <div class="info-header">
            <div class="author-info">
              <div class="author-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h3>{{ image.author }}</h3>
                <p class="author-link" @click="handleOriginalLink">Ver perfil original</p>
              </div>
            </div>
          </div>

          <div class="info-details">
            <div class="detail-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
                <line x1="15" y1="3" x2="15" y2="21"/>
              </svg>
              <span>Dimensões:</span>
              <strong>{{ image.width }} × {{ image.height }}</strong>
            </div>

            <div class="detail-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>ID:</span>
              <strong>#{{ image.id }}</strong>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn btn-primary" @click="handleDownload">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Baixar Imagem
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
  overflow-y: auto;

  @media (max-width: $breakpoint-mobile) {
    padding: 0;
    align-items: flex-start;
  }
}

.modal {
  position: relative;
  background: white;
  border-radius: $border-radius-xl;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  animation: slideUp 0.3s ease;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);

  @media (max-width: $breakpoint-tablet) {
    max-height: 100vh;
    border-radius: 0;
  }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.9);
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: $breakpoint-tablet) {
    max-height: 100vh;
  }
}

.image-container {
  position: relative;
  width: 100%;
  background: $surface-color;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  max-height: 60vh;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.modal-info {
  padding: 24px;
  background: white;

  @media (max-width: $breakpoint-mobile) {
    padding: 20px;
  }
}

.info-header {
  margin-bottom: 24px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 16px;

  .author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
  }

  .author-link {
    margin: 4px 0 0;
    font-size: 14px;
    color: $primary-color;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  }
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: $surface-color;
  border-radius: $border-radius-lg;
  margin-bottom: 24px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: $text-secondary;

  svg {
    color: $primary-color;
    flex-shrink: 0;
  }

  span {
    color: $text-secondary;
  }

  strong {
    color: $text-primary;
    font-weight: 500;
    margin-left: auto;
  }
}

.action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  min-width: 140px;
  padding: 14px 24px;
  border: none;
  border-radius: $border-radius-lg;
  font-size: 15px;
  font-weight: 600;
  font-family: $font-family;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:active {
    transform: scale(0.98);
  }

  &-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    &:hover {
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
      transform: translateY(-2px);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
