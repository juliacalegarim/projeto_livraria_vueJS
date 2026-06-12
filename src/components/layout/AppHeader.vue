<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  quantidadeTotal: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__brand">
        <span class="header__brand-icon">📚</span>
        <span class="header__brand-name">Livraria<strong>Dev</strong></span>
      </RouterLink>

      <nav class="header__nav">
        <RouterLink to="/" class="header__nav-link">Home</RouterLink>
        <RouterLink to="/produtos" class="header__nav-link">Produtos</RouterLink>
        <RouterLink to="/carrinho" class="header__nav-link header__cart-link">
          <span class="header__cart-icon">🛒</span>
          <span class="header__nav-label">Carrinho</span>
          <span v-if="quantidadeTotal > 0" class="header__badge">{{ quantidadeTotal }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #1a3a2a;
  border-bottom: 3px solid #2ecc71;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  font-family: 'Georgia', serif;
  font-size: 1.25rem;
}

.header__brand strong {
  color: #2ecc71;
}

.header__brand-icon {
  font-size: 1.5rem;
}

.header__nav {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.header__nav-link {
  color: #c8e6d4;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: 'Verdana', sans-serif;
  transition: background 0.2s, color 0.2s;
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  background: #2ecc71;
  color: #1a3a2a;
  font-weight: 600;
}

.header__cart-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.header__badge {
  background: #e74c3c;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
}
</style>