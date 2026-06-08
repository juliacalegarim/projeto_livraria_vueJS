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

