<script setup>
import ProductList from '@/components/products/ProductList.vue'
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
