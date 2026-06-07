<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.


import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import { produtos } from '@/data/product'
import ProductCard from '@/components/products/ProductCard.vue'

const onAddCarrinho = inject('onAddCarrinho')
const destaques = produtos.slice(0, 4)
</script>

<template>
  <div class="home">

    <!-- Hero banner -->
    <section class="home__hero">
      <div class="home__hero-inner">
        <div class="home__hero-text">
          <p class="home__hero-tag">Novidade</p>
          <h1 class="home__hero-title">{{ produtos[0].titulo }}</h1>
          <p class="home__hero-author">{{ produtos[0].autor }}</p>
          <p class="home__hero-desc">{{ produtos[0].resenha }}</p>
          <button class="home__hero-btn" @click="onAddCarrinho(produtos[0].id)">
            🛒 Adicionar ao Carrinho
          </button>
        </div>
        <img :src="produtos[0].capa" :alt="produtos[0].titulo" class="home__hero-cover" />
      </div>
    </section>

    <!-- Destaques -->
    <section class="home__section">
      <div class="home__section-inner">
        <div class="home__section-header">
          <h2 class="home__section-title">Lançamentos</h2>
          <RouterLink to="/produtos" class="home__section-link">Ver todos →</RouterLink>
        </div>
        <div class="home__grid">
          <ProductCard
            v-for="produto in destaques"
            :key="produto.id"
            :produto="produto"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
}

/* Hero */
.home__hero {
  background: linear-gradient(135deg, #1a3a2a 60%, #2ecc71 100%);
  padding: 3rem 1.5rem;
}

.home__hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.home__hero-text {
  flex: 1;
  color: #fff;
}

.home__hero-tag {
  display: inline-block;
  background: #2ecc71;
  color: #1a3a2a;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
}

.home__hero-title {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.home__hero-author {
  font-size: 0.9rem;
  color: #a8d8be;
  margin: 0 0 0.75rem;
}

.home__hero-desc {
  font-size: 0.9rem;
  color: #c8e6d4;
  margin: 0 0 1.5rem;
  max-width: 480px;
  line-height: 1.6;
}

.home__hero-btn {
  background: #2ecc71;
  color: #1a3a2a;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.home__hero-btn:hover {
  background: #27ae60;
  color: #fff;
}

.home__hero-cover {
  width: 180px;
  height: 240px;
  object-fit: contain;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3));
  flex-shrink: 0;
}

/* Section */
.home__section {
  padding: 2.5rem 1.5rem;
}

.home__section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.home__section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.home__section-title {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #1a3a2a;
  margin: 0;
}

.home__section-link {
  font-size: 0.88rem;
  color: #2ecc71;
  text-decoration: none;
  font-weight: 600;
}

.home__section-link:hover {
  color: #1a3a2a;
}

.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .home__hero-cover { display: none; }
  .home__hero-title { font-size: 1.5rem; }
}
</style>

