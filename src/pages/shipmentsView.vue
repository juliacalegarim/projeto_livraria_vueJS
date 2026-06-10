<script setup>
const etapas = [
  { icon: '📦', label: 'Pedido confirmado', desc: 'Recebemos seu pedido e processamos o pagamento.' },
  { icon: '🔍', label: 'Em separação', desc: 'Nossa equipe localiza e verifica cada título escolhido.' },
  { icon: '📬', label: 'Enviado', desc: 'Pacote entregue à transportadora com código de rastreio.' },
  { icon: '🚚', label: 'Em trânsito', desc: 'O pacote está a caminho do seu endereço.' },
  { icon: '🎉', label: 'Entregue', desc: 'Aproveite sua leitura!' },
]

const opcoes = [
  {
    nome: 'PAC',
    prazo: '7 a 12 dias úteis',
    preco: 'A partir de R$ 9,90',
    descricao: 'Econômico e confiável. Ideal para quem não tem pressa.',
    destaque: false,
  },
  {
    nome: 'SEDEX',
    prazo: '1 a 4 dias úteis',
    preco: 'A partir de R$ 22,90',
    descricao: 'Rápido para todo o Brasil. Rastreamento em tempo real.',
    destaque: true,
  },
  {
    nome: 'SEDEX 10',
    prazo: 'Próximo dia útil até 10h',
    preco: 'A partir de R$ 45,00',
    descricao: 'Urgente. Entrega garantida de manhã no próximo dia útil.',
    destaque: false,
  },
]

const faqs = [
  { q: 'Quando meu pedido é enviado?', a: 'Pedidos com pagamento confirmado até as 14h são enviados no mesmo dia útil. Após esse horário, o envio ocorre no próximo dia útil.' },
  { q: 'Como rastrear meu pedido?', a: 'Assim que o pedido for despachado, você receberá um e-mail com o código de rastreamento dos Correios. Você pode acompanhar no site oficial dos Correios.' },
  { q: 'Entregam em todo o Brasil?', a: 'Sim! Entregamos em todos os municípios atendidos pelos Correios. Para localidades remotas, o prazo pode ser acrescido de 3 a 5 dias úteis.' },
  { q: 'Frete grátis?', a: 'Pedidos acima de R$ 200,00 têm frete grátis via PAC para todo o Brasil. A opção é aplicada automaticamente no carrinho.' },
  { q: 'O que fazer se o pacote chegar danificado?', a: 'Recuse a entrega ou fotografe o dano antes de abrir. Acione nosso suporte em até 48h com fotos e número do pedido para resolvermos imediatamente.' },
]

const activeIndex = ref(null)
function toggle(i) {
  activeIndex.value = activeIndex.value === i ? null : i
}

import { ref } from 'vue'
</script>

<template>
  <div class="page-shipping">

    <!-- Hero -->
    <header class="page-shipping__hero">
      <div class="page-shipping__hero-inner">
        <span class="page-shipping__eyebrow">Logística & Entrega</span>
        <h1 class="page-shipping__title">Política de Envios</h1>
        <p class="page-shipping__subtitle">
          Do nosso estoque para a sua estante com agilidade e cuidado.
        </p>
      </div>
      <div class="page-shipping__hero-deco" aria-hidden="true">🚚</div>
    </header>

    <main class="page-shipping__body">

      <!-- Frete grátis banner -->
      <div class="page-shipping__banner">
        <span class="page-shipping__banner-icon">🎁</span>
        <span><strong>Frete grátis</strong> em compras acima de <strong>R$ 200,00</strong> via PAC para todo o Brasil!</span>
      </div>

      <!-- Etapas -->
      <section class="page-shipping__section">
        <h2 class="page-shipping__section-title">Jornada do seu pedido</h2>
        <div class="page-shipping__timeline">
          <div
            v-for="(etapa, i) in etapas"
            :key="i"
            class="page-shipping__step"
          >
            <div class="page-shipping__step-icon">{{ etapa.icon }}</div>
            <div v-if="i < etapas.length - 1" class="page-shipping__step-line"></div>
            <div class="page-shipping__step-text">
              <strong>{{ etapa.label }}</strong>
              <p>{{ etapa.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Opções de envio -->
      <section class="page-shipping__section">
        <h2 class="page-shipping__section-title">Modalidades de envio</h2>
        <div class="page-shipping__options">
          <div
            v-for="op in opcoes"
            :key="op.nome"
            class="page-shipping__option"
            :class="{ 'page-shipping__option--destaque': op.destaque }"
          >
            <span v-if="op.destaque" class="page-shipping__badge">Mais popular</span>
            <h3 class="page-shipping__option-name">{{ op.nome }}</h3>
            <p class="page-shipping__option-prazo">⏱ {{ op.prazo }}</p>
            <p class="page-shipping__option-preco">{{ op.preco }}</p>
            <p class="page-shipping__option-desc">{{ op.descricao }}</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="page-shipping__section">
        <h2 class="page-shipping__section-title">Perguntas frequentes</h2>
        <div class="page-shipping__faqs">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="page-shipping__faq"
            :class="{ 'page-shipping__faq--open': activeIndex === i }"
          >
            <button class="page-shipping__faq-q" @click="toggle(i)">
              <span>{{ faq.q }}</span>
              <span class="page-shipping__faq-arrow">{{ activeIndex === i ? '▲' : '▼' }}</span>
            </button>
            <div v-if="activeIndex === i" class="page-shipping__faq-a">{{ faq.a }}</div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.page-shipping {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
}

/* Hero */
.page-shipping__hero {
  background: #1a3a2a;
  padding: 4rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}
.page-shipping__hero-inner {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.page-shipping__hero-deco {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10rem;
  opacity: 0.08;
  pointer-events: none;
  user-select: none;
}
.page-shipping__eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2ecc71;
  margin-bottom: 0.75rem;
}
.page-shipping__title {
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #fff;
  margin: 0 0 0.75rem;
}
.page-shipping__subtitle {
  font-size: 1rem;
  color: #a8d8be;
  margin: 0;
  line-height: 1.6;
}

/* Body */
.page-shipping__body {
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Banner frete grátis */
.page-shipping__banner {
  background: #d4f5e2;
  border: 1.5px solid #2ecc71;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #1a3a2a;
}
.page-shipping__banner-icon { font-size: 1.4rem; }

/* Section title */
.page-shipping__section-title {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #1a3a2a;
  margin: 0 0 1.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #e0ede5;
}

/* Timeline */
.page-shipping__timeline {
  display: flex;
  gap: 0;
  flex-wrap: wrap;
}
.page-shipping__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 120px;
  text-align: center;
  position: relative;
}
.page-shipping__step-icon {
  width: 54px;
  height: 54px;
  background: #fff;
  border: 2.5px solid #2ecc71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 8px rgba(46,204,113,0.15);
  position: relative;
  z-index: 1;
}
.page-shipping__step-line {
  position: absolute;
  top: 27px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #2ecc71, #c8e6d4);
  z-index: 0;
}
.page-shipping__step-text {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: #555;
}
.page-shipping__step-text strong {
  display: block;
  color: #1a3a2a;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}
.page-shipping__step-text p { margin: 0; }

/* Opções */
.page-shipping__options {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}
.page-shipping__option {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.07);
  position: relative;
  border: 1.5px solid transparent;
  transition: box-shadow 0.2s;
}
.page-shipping__option:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.12); }
.page-shipping__option--destaque {
  border-color: #2ecc71;
  box-shadow: 0 4px 20px rgba(46,204,113,0.2);
}
.page-shipping__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #2ecc71;
  color: #1a3a2a;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.75rem;
  border-radius: 20px;
  white-space: nowrap;
}
.page-shipping__option-name {
  font-family: 'Georgia', serif;
  font-size: 1.3rem;
  color: #1a3a2a;
  margin: 0 0 0.4rem;
}
.page-shipping__option-prazo {
  font-size: 0.82rem;
  color: #666;
  margin: 0 0 0.25rem;
}
.page-shipping__option-preco {
  font-size: 0.95rem;
  font-weight: 700;
  color: #2ecc71;
  margin: 0 0 0.6rem;
}
.page-shipping__option-desc {
  font-size: 0.82rem;
  color: #888;
  margin: 0;
  line-height: 1.5;
}

/* FAQ */
.page-shipping__faqs {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.page-shipping__faq {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.06);
  overflow: hidden;
  border: 1.5px solid transparent;
  transition: border-color 0.2s;
}
.page-shipping__faq--open { border-color: #2ecc71; }
.page-shipping__faq-q {
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #1a3a2a;
  cursor: pointer;
  text-align: left;
}
.page-shipping__faq-q:hover { background: #f0faf4; }
.page-shipping__faq-arrow { font-size: 0.7rem; color: #2ecc71; flex-shrink: 0; }
.page-shipping__faq-a {
  padding: 0 1.25rem 1rem;
  font-size: 0.87rem;
  color: #555;
  line-height: 1.7;
  border-top: 1px solid #e8f5ed;
  padding-top: 0.75rem;
}
</style>