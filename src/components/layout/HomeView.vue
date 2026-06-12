<script setup>
import ProductList from '@/components/products/ProductList.vue'
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

    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-badge">Livi Destaque</span>
          <h1 class="hero-title">Cem anos de solidão</h1>
          <p class="hero-desc">
            Neste clássico de Gabriel García Márquez, conhece-se
            a família Buendía que, com seus integrantes, heranças e
            dramas que representam batalhas do mundo antigo, floresce
            fundamentalmente na história da literatura. Cem anos de solidão
            apresenta uma dos mais fascinantes eventos literários do século XX.
          </p>
          <button class="hero-btn">Acessar página do livro</button>
        </div>
        <div class="hero-book">
          <img
            src="https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg"
            alt="Cem anos de solidão"
            class="hero-img"
          />
        </div>
      </div>
    </section>

    <section class="info-bar">
      <div class="info-bar-inner">
        <div class="info-item">
          <span class="info-icon">🚚</span>
          <span>Frete grátis para SC</span>
        </div>
        <div class="info-divider"></div>
        <div class="info-item">
          <span class="info-icon">⭐</span>
          <span>Livros recomendados</span>
        </div>
        <div class="info-divider"></div>
        <div class="info-item">
          <span class="info-icon">📖</span>
          <span>Mais vendidos</span>
        </div>
      </div>
    </section>
    
    <ProductList/>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-logo">iBooks</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="Instagram">in</a>
          </div>
        </div>
        <div class="footer-contact">
          <p class="footer-contact-title">Contato</p>
          <p>📞 +55 47 4004-5351</p>
          <p>⏰ Seg á Sex - 09h á 18h</p>
          <p>✉️ contato@ibooks.com</p>
        </div>
        <div class="footer-payment">
          <span class="payment-badge visa">VISA</span>
          <span class="payment-badge master">MC</span>
          <span class="payment-badge paypal">PP</span>
        </div>
      </div>
      <div class="footer-bottom">
        © Alguns direitos reservados. iBooks 2025.
      </div>
    </footer>
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
  background: #f7f7f7;
  min-height: 100vh;
}

.hero {
  background: #fff;
  border-bottom: 1px solid #eee;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.hero-content {
  flex: 1;
  max-width: 520px;
}

.hero-badge {
  display: inline-block;
  background: #00b300;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}

.hero-title {
  font-size: 32px;
  font-weight: 900;
  color: #111;
  margin: 0 0 14px;
  line-height: 1.1;
}

.hero-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 24px;
}

.hero-btn {
  background: #00b300;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 11px 22px;
  font-size: 14px;
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

.hero-btn:hover {
  background: #009900;
}

.hero-book {
  flex-shrink: 0;
}

.hero-img {
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.18);
}

.info-bar {
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.info-bar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  padding: 0 40px;
}

.info-icon {
  font-size: 20px;
}

.info-divider {
  width: 1px;
  height: 30px;
  background: #ddd;
}

.footer {
  background: #1a6e1a;
  color: #fff;
  margin-top: 40px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 20px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.footer-logo {
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 12px;
}

.footer-social {
  display: flex;
  gap: 10px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  transition: background 0.2s;
}

.footer-social a:hover {
  background: rgba(255,255,255,0.35);
}

.footer-contact {
  flex: 1;
}

.footer-contact-title {
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px;
}

.footer-contact p {
  font-size: 13px;
  margin: 4px 0;
  opacity: 0.85;
}

.footer-payment {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding-top: 4px;
}

.payment-badge {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.visa { background: #1a1f71; color: #fff; }
.master { background: #eb001b; color: #fff; }
.paypal { background: #003087; color: #fff; }

.footer-bottom {
  text-align: center;
  padding: 12px 20px;
  font-size: 12px;
  border-top: 1px solid rgba(255,255,255,0.15);
  opacity: 0.7;
}
</style>
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
