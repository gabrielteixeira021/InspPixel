<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const searchInput = ref('')
const isSearchExpanded = ref(false)

const handleSearch = () => {
  if (searchInput.value.trim()) {
    emit('search', searchInput.value)
  }
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleSearch()
  }
}

const clearSearch = () => {
  searchInput.value = ''
  emit('search', '')
}

const toggleSearch = () => {
  isSearchExpanded.value = !isSearchExpanded.value
  if (!isSearchExpanded.value) {
    clearSearch()
  }
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
            <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="white"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stop-color="#667eea"/>
                <stop offset="100%" stop-color="#764ba2"/>
              </linearGradient>
            </defs>
          </svg>
          <h1>InspirePixel</h1>
        </div>
      </div>

      <div class="header-center" :class="{ 'expanded': isSearchExpanded }">
        <div class="search-bar">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input
            v-model="searchInput"
            type="text"
            placeholder="Buscar inspirações..."
            class="search-input"
            @keypress="handleKeyPress"
          />
          <button 
            v-if="searchInput" 
            class="clear-btn"
            @click="clearSearch"
            aria-label="Limpar busca"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="header-right">
        <button 
          class="mobile-search-btn"
          @click="toggleSearch"
          aria-label="Buscar"
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $border-color;
  z-index: 1000;
  transition: all 0.3s ease;

  &-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: $breakpoint-tablet) {
      padding: 12px 16px;
      gap: 16px;
    }
  }

  &-left {
    flex-shrink: 0;
  }

  &-center {
    flex: 1;
    max-width: 600px;

    @media (max-width: $breakpoint-tablet) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      max-width: 100%;
      padding: 0 16px 16px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid $border-color;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;

      &.expanded {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }

  &-right {
    flex-shrink: 0;

    @media (min-width: $breakpoint-tablet + 1) {
      display: none;
    }
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: $text-primary;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: $breakpoint-mobile) {
      font-size: 20px;
    }
  }

  svg {
    flex-shrink: 0;
  }
}

.search-bar {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 16px;
  color: $text-secondary;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 12px 48px 12px 48px;
  border: 2px solid $border-color;
  border-radius: $border-radius-lg;
  font-size: 15px;
  font-family: $font-family;
  background: $surface-color;
  color: $text-primary;
  transition: all 0.3s ease;

  &::placeholder {
    color: $text-secondary;
  }

  &:focus {
    outline: none;
    border-color: $primary-color;
    background: white;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }

  @media (max-width: $breakpoint-mobile) {
    font-size: 14px;
    padding: 10px 44px 10px 44px;
  }
}

.clear-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: $text-secondary;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: $border-radius;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $hover-color;
    color: $text-primary;
  }
}

.mobile-search-btn {
  background: none;
  border: none;
  color: $text-primary;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius;
  transition: all 0.2s ease;

  &:hover {
    background: $hover-color;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
