<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
  <footer class="footer">
    <div class="footer__inner">

      <div class="footer__brand">
        <span class="footer__brand-icon">📚</span>
        <span class="footer__brand-name">Livraria<strong>Dev</strong></span>
        <p class="footer__brand-tagline">Tecnologia a serviço da boa leitura.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" title="Instagram">📷</a>
          <a href="#" class="footer__social-link" title="Twitter/X">🐦</a>
          <a href="#" class="footer__social-link" title="Facebook">👤</a>
        </div>
      </div>

      <nav class="footer__nav">
        <h4 class="footer__nav-title">Institucional</h4>
        <RouterLink to="/equipe" class="footer__nav-link">Nossa Equipe</RouterLink>
        <RouterLink to="/termos" class="footer__nav-link">Termos de Uso</RouterLink>
        <RouterLink to="/envios" class="footer__nav-link">Política de Envios</RouterLink>
        <RouterLink to="/devolucoes" class="footer__nav-link">Devoluções</RouterLink>
      </nav>

      <nav class="footer__nav">
        <h4 class="footer__nav-title">Catálogo</h4>
        <RouterLink to="/produtos" class="footer__nav-link">Todos os livros</RouterLink>
        <RouterLink to="/" class="footer__nav-link">Lançamentos</RouterLink>
      </nav>

      <div class="footer__contact">
        <h4 class="footer__nav-title">Contato</h4>
        <p>📧 <a href="mailto:contato@livrariadev.com.br" class="footer__contact-link">contato@livrariadev.com.br</a></p>
        <p>📞 (11) 3000-0000</p>
        <p>⏰ Seg–Sex, 9h–18h</p>
        <div class="footer__payment">
          <span title="Visa">💳 Visa</span>
          <span title="Mastercard">💳 Master</span>
          <span title="Pix">⚡ Pix</span>
          <span title="Boleto">🧾 Boleto</span>
        </div>
      </div>

    </div>
    <div class="footer__bottom">
      <span>© 2025 LivrariaDev. Todos os direitos reservados.</span>
      <span>CNPJ 00.000.000/0001-00</span>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background: #0f2419;
  border-top: 3px solid #2ecc71;
  color: #a8d8be;
}
.footer__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
}
.footer__brand-icon { font-size: 1.75rem; margin-right: 0.4rem; }
.footer__brand-name {
  font-family: 'Georgia', serif;
  font-size: 1.15rem;
  color: #fff;
}
.footer__brand-name strong { color: #2ecc71; }
.footer__brand-tagline {
  font-size: 0.8rem;
  color: #567a64;
  margin: 0.6rem 0 1rem;
}
.footer__social { display: flex; gap: 0.5rem; }
.footer__social-link {
  font-size: 1.2rem;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.footer__social-link:hover { opacity: 1; }

.footer__nav { display: flex; flex-direction: column; gap: 0.5rem; }
.footer__nav-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2ecc71;
  margin: 0 0 0.5rem;
}
.footer__nav-link {
  font-size: 0.85rem;
  color: #a8d8be;
  text-decoration: none;
  transition: color 0.15s;
}
.footer__nav-link:hover { color: #fff; }

.footer__contact p {
  font-size: 0.83rem;
  margin: 0 0 0.35rem;
  color: #a8d8be;
}
.footer__contact-link { color: #2ecc71; text-decoration: none; }
.footer__contact-link:hover { text-decoration: underline; }
.footer__payment {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.85rem;
  font-size: 0.74rem;
  color: #567a64;
}

.footer__bottom {
  border-top: 1px solid #1a3a2a;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #3d6b4f;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .footer__inner { grid-template-columns: 1fr; }
}
</style>