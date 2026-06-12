<script setup>
import { ref } from 'vue'

const etapas = [
  { icon: '📧', step: '01', title: 'Solicite a devolução', desc: 'Entre em contato pelo e-mail ou formulário abaixo em até 7 dias corridos após o recebimento.' },
  { icon: '✅', step: '02', title: 'Aprovação', desc: 'Nossa equipe analisa a solicitação em até 1 dia útil e envia as instruções de retorno.' },
  { icon: '📦', step: '03', title: 'Embale e envie', desc: 'Embale o produto na embalagem original e poste nos Correios. O frete de devolução é por nossa conta.' },
  { icon: '🔍', step: '04', title: 'Análise do produto', desc: 'Ao receber, nossa equipe verifica o estado do livro. O processo leva até 3 dias úteis.' },
  { icon: '💰', step: '05', title: 'Reembolso', desc: 'Aprovado: reembolso no método de pagamento original em até 10 dias úteis.' },
]

const motivos = [
  { icon: '📦', titulo: 'Produto danificado', elegivel: true, obs: 'Registre o dano com fotos antes de abrir e reportar em até 48h.' },
  { icon: '❌', titulo: 'Produto errado enviado', elegivel: true, obs: 'Enviamos o produto correto sem custo adicional.' },
  { icon: '🔖', titulo: 'Edição diferente da anunciada', elegivel: true, obs: 'Valide com a descrição na página do produto.' },
  { icon: '💭', titulo: 'Mudou de ideia', elegivel: true, obs: 'Produto deve estar lacrado/sem uso. Prazo: 7 dias.' },
  { icon: '📖', titulo: 'Livro já lido', elegivel: false, obs: 'Não aceitamos devoluções de produtos usados por arrependimento.' },
  { icon: '🗓️', titulo: 'Fora do prazo (8+ dias)', elegivel: false, obs: 'O prazo de 7 dias corridos é previsto pelo Código de Defesa do Consumidor.' },
]

const form = ref({ nome: '', email: '', pedido: '', motivo: '', descricao: '' })
const enviado = ref(false)

function enviarFormulario() {
  // Simulação — em produção, substituir por chamada à API
  enviado.value = true
}
</script>

<template>
  <div class="page-returns">

    <!-- Hero -->
    <header class="page-returns__hero">
      <div class="page-returns__hero-inner">
        <span class="page-returns__eyebrow">Satisfação Garantida</span>
        <h1 class="page-returns__title">Política de Devoluções</h1>
        <p class="page-returns__subtitle">
          Seu livro não chegou como esperado? Resolvemos sem burocracia.
        </p>
      </div>
      <div class="page-returns__hero-deco" aria-hidden="true">↩</div>
    </header>

    <main class="page-returns__body">

      <!-- Banner garantia -->
      <div class="page-returns__guarantee">
        <div class="page-returns__guarantee-item">
          <span>🛡️</span>
          <div>
            <strong>7 dias</strong>
            <p>prazo para arrependimento (CDC)</p>
          </div>
        </div>
        <div class="page-returns__guarantee-item">
          <span>🚚</span>
          <div>
            <strong>Frete grátis</strong>
            <p>na devolução por defeito ou erro nosso</p>
          </div>
        </div>
        <div class="page-returns__guarantee-item">
          <span>⚡</span>
          <div>
            <strong>10 dias úteis</strong>
            <p>para reembolso após aprovação</p>
          </div>
        </div>
      </div>

      <!-- Quando é elegível -->
      <section class="page-returns__section">
        <h2 class="page-returns__section-title">Quando posso devolver?</h2>
        <div class="page-returns__motivos">
          <div
            v-for="m in motivos"
            :key="m.titulo"
            class="page-returns__motivo"
            :class="m.elegivel ? 'page-returns__motivo--ok' : 'page-returns__motivo--nok'"
          >
            <div class="page-returns__motivo-top">
              <span class="page-returns__motivo-icon">{{ m.icon }}</span>
              <span class="page-returns__motivo-titulo">{{ m.titulo }}</span>
              <span class="page-returns__motivo-badge">
                {{ m.elegivel ? '✓ Elegível' : '✗ Não elegível' }}
              </span>
            </div>
            <p class="page-returns__motivo-obs">{{ m.obs }}</p>
          </div>
        </div>
      </section>

      <!-- Etapas do processo -->
      <section class="page-returns__section">
        <h2 class="page-returns__section-title">Como funciona o processo</h2>
        <div class="page-returns__etapas">
          <div
            v-for="(etapa, i) in etapas"
            :key="i"
            class="page-returns__etapa"
          >
            <div class="page-returns__etapa-num">{{ etapa.step }}</div>
            <div class="page-returns__etapa-icon">{{ etapa.icon }}</div>
            <h3 class="page-returns__etapa-title">{{ etapa.title }}</h3>
            <p class="page-returns__etapa-desc">{{ etapa.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Formulário de solicitação -->
      <section class="page-returns__section">
        <h2 class="page-returns__section-title">Solicitar devolução</h2>

        <div v-if="enviado" class="page-returns__success">
          <span class="page-returns__success-icon">🎉</span>
          <h3>Solicitação recebida!</h3>
          <p>Entraremos em contato no e-mail informado em até 1 dia útil.</p>
          <button class="page-returns__success-btn" @click="enviado = false">Nova solicitação</button>
        </div>

        <div v-else class="page-returns__form-card">
          <div class="page-returns__form-row">
            <div class="page-returns__form-group">
              <label class="page-returns__label">Nome completo *</label>
              <input v-model="form.nome" class="page-returns__input" type="text" placeholder="João da Silva" />
            </div>
            <div class="page-returns__form-group">
              <label class="page-returns__label">E-mail *</label>
              <input v-model="form.email" class="page-returns__input" type="email" placeholder="joao@email.com" />
            </div>
          </div>

          <div class="page-returns__form-row">
            <div class="page-returns__form-group">
              <label class="page-returns__label">Número do pedido *</label>
              <input v-model="form.pedido" class="page-returns__input" type="text" placeholder="LV-2025-00000" />
            </div>
            <div class="page-returns__form-group">
              <label class="page-returns__label">Motivo da devolução *</label>
              <select v-model="form.motivo" class="page-returns__input">
                <option value="" disabled>Selecione...</option>
                <option>Produto danificado</option>
                <option>Produto errado enviado</option>
                <option>Edição diferente da anunciada</option>
                <option>Mudei de ideia (arrependimento)</option>
                <option>Outro</option>
              </select>
            </div>
          </div>

          <div class="page-returns__form-group">
            <label class="page-returns__label">Descrição detalhada</label>
            <textarea
              v-model="form.descricao"
              class="page-returns__input page-returns__textarea"
              placeholder="Descreva o problema com o máximo de detalhes possível. Se houver dano, informe se tirou fotos."
            ></textarea>
          </div>

          <div class="page-returns__form-footer">
            <p class="page-returns__form-hint">
              * Campos obrigatórios. Responderemos em até <strong>1 dia útil</strong>.
            </p>
            <button
              class="page-returns__submit"
              :disabled="!form.nome || !form.email || !form.pedido || !form.motivo"
              @click="enviarFormulario"
            >
              Enviar solicitação →
            </button>
          </div>
        </div>
      </section>

      <!-- Base legal -->
      <div class="page-returns__legal">
        <span>⚖️</span>
        <p>
          Esta política é fundamentada no <strong>Código de Defesa do Consumidor (Lei 8.078/90)</strong>, especialmente no Art. 49, que garante o direito de arrependimento em compras realizadas fora de estabelecimento comercial.
        </p>
      </div>

    </main>
  </div>
</template>

<style scoped>
.page-returns {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
}

/* Hero */
.page-returns__hero {
  background: #1a3a2a;
  padding: 4rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}
.page-returns__hero-inner {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.page-returns__hero-deco {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18rem;
  color: rgba(46,204,113,0.07);
  font-family: 'Georgia', serif;
  pointer-events: none;
  user-select: none;
}
.page-returns__eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2ecc71;
  margin-bottom: 0.75rem;
}
.page-returns__title {
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #fff;
  margin: 0 0 0.75rem;
}
.page-returns__subtitle {
  font-size: 1rem;
  color: #a8d8be;
  margin: 0;
  line-height: 1.6;
}

/* Body */
.page-returns__body {
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Guarantee strip */
.page-returns__guarantee {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.page-returns__guarantee-item {
  background: #fff;
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  border-top: 3px solid #2ecc71;
}
.page-returns__guarantee-item > span { font-size: 1.75rem; }
.page-returns__guarantee-item strong {
  display: block;
  font-size: 1.05rem;
  color: #1a3a2a;
}
.page-returns__guarantee-item p {
  font-size: 0.75rem;
  color: #888;
  margin: 0;
}

/* Section */
.page-returns__section { display: flex; flex-direction: column; gap: 1rem; }
.page-returns__section-title {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #1a3a2a;
  margin: 0;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #e0ede5;
}

/* Motivos */
.page-returns__motivos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.85rem;
}
.page-returns__motivo {
  border-radius: 8px;
  padding: 1rem 1.25rem;
  border-left: 4px solid;
}
.page-returns__motivo--ok {
  background: #f0faf4;
  border-color: #2ecc71;
}
.page-returns__motivo--nok {
  background: #fff5f5;
  border-color: #e74c3c;
}
.page-returns__motivo-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.page-returns__motivo-icon { font-size: 1.1rem; }
.page-returns__motivo-titulo {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a3a2a;
  flex: 1;
}
.page-returns__motivo-badge {
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
}
.page-returns__motivo--ok .page-returns__motivo-badge { color: #27ae60; }
.page-returns__motivo--nok .page-returns__motivo-badge { color: #e74c3c; }
.page-returns__motivo-obs {
  font-size: 0.78rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

/* Etapas */
.page-returns__etapas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
.page-returns__etapa {
  background: #fff;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  text-align: center;
  transition: transform 0.2s;
}
.page-returns__etapa:hover { transform: translateY(-3px); }
.page-returns__etapa-num {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #d4f5e2;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.page-returns__etapa-icon { font-size: 1.75rem; margin-bottom: 0.5rem; }
.page-returns__etapa-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a3a2a;
  margin: 0 0 0.4rem;
}
.page-returns__etapa-desc {
  font-size: 0.78rem;
  color: #777;
  margin: 0;
  line-height: 1.5;
}

/* Form */
.page-returns__form-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.page-returns__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.page-returns__form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.page-returns__label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.page-returns__input {
  padding: 0.65rem 0.9rem;
  border: 1.5px solid #d8ead0;
  border-radius: 7px;
  font-size: 0.9rem;
  outline: none;
  font-family: inherit;
  background: #fafffe;
  transition: border-color 0.2s;
}
.page-returns__input:focus { border-color: #2ecc71; }
.page-returns__textarea {
  min-height: 110px;
  resize: vertical;
}
.page-returns__form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.page-returns__form-hint { font-size: 0.78rem; color: #aaa; margin: 0; }
.page-returns__submit {
  background: #2ecc71;
  color: #1a3a2a;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.page-returns__submit:hover:not(:disabled) { background: #27ae60; color: #fff; }
.page-returns__submit:disabled { opacity: 0.45; cursor: not-allowed; }

/* Success */
.page-returns__success {
  background: #f0faf4;
  border: 2px solid #2ecc71;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
}
.page-returns__success-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
.page-returns__success h3 {
  font-family: 'Georgia', serif;
  font-size: 1.3rem;
  color: #1a3a2a;
  margin: 0 0 0.5rem;
}
.page-returns__success p { font-size: 0.9rem; color: #555; margin: 0 0 1.5rem; }
.page-returns__success-btn {
  background: #2ecc71;
  color: #1a3a2a;
  border: none;
  border-radius: 8px;
  padding: 0.65rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
}

/* Base legal */
.page-returns__legal {
  background: #fff;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: #555;
  line-height: 1.6;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
}
.page-returns__legal span { font-size: 1.3rem; flex-shrink: 0; }
.page-returns__legal p { margin: 0; }

@media (max-width: 640px) {
  .page-returns__guarantee { grid-template-columns: 1fr; }
  .page-returns__form-row { grid-template-columns: 1fr; }
  .page-returns__etapas { grid-template-columns: repeat(2, 1fr); }
}
</style>