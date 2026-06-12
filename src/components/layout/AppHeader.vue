<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <header class="app-header">
    <div class="header-top">
      <div class="header-inner">
      
        <div class="logo">
          <RouterLink to="/">
            <span class="logo-icon">📚</span>
            <span class="logo-text">iBooks</span>
          </RouterLink>
        </div>

       
        <div class="search-bar">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Pesquise livros, autores..."
          />
          <button class="search-btn">🔍</button>
        </div>

       
        <nav class="nav-right">
          <RouterLink to="/">Temas</RouterLink>
          <RouterLink to="/">Ajuda</RouterLink>
          <RouterLink to="/">Anúncio</RouterLink>
          <RouterLink to="/">Favoritos</RouterLink>
          <RouterLink to="/carrinho" class="cart-icon" title="Carrinho">🛒</RouterLink>
          <RouterLink to="/" class="wish-icon" title="Favoritos">🔖</RouterLink>
          <RouterLink to="/" class="user-icon" title="Conta">👤</RouterLink>
        </nav>
      </div>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.

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
.app-header {
  background: #fff;
  border-bottom: 2px solid #00b300;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.logo-icon {
  font-size: 22px;
}

.logo-text {
  font-size: 20px;
  font-weight: 800;
  color: #00b300;
  letter-spacing: -0.5px;
}

.search-bar {
  flex: 1;
  display: flex;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  max-width: 500px;
}

.search-bar input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: #00b300;
  border: none;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 14px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-right a {
  color: #333;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-right a:hover {
  color: #00b300;
}

.cart-icon, .wish-icon, .user-icon {
  font-size: 18px;
}
</style>

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
