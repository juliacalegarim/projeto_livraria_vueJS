<script setup>
const membros = [
  {
    nome: 'Ana Beatriz Fontes',
    cargo: 'CEO & Fundadora',
    bio: 'Apaixonada por literatura desde criança, fundou a LivrariaDev para unir o amor pelos livros com a tecnologia. Formada em Letras pela USP e MBA em Gestão de Negócios Digitais.',
    emoji: '👩‍💼',
    cor: '#2ecc71',
    especialidades: ['Estratégia', 'Curadoria editorial', 'Parcerias'],
  },
  {
    nome: 'Carlos Eduardo Matos',
    cargo: 'CTO & Co-fundador',
    bio: 'Engenheiro de software com 12 anos de experiência em e-commerce. Responsável pela arquitetura técnica da plataforma e apaixonado por código limpo e boas práticas.',
    emoji: '👨‍💻',
    cor: '#3498db',
    especialidades: ['Vue.js', 'Node.js', 'Cloud'],
  },
  {
    nome: 'Fernanda Lima',
    cargo: 'Head de Curadoria',
    bio: 'Bibliotecária e crítica literária. Responsável por selecionar cada título que entra no catálogo. Já leu mais de 2.000 livros e garante que só os melhores chegam até você.',
    emoji: '📚',
    cor: '#9b59b6',
    especialidades: ['Literatura Brasileira', 'Ficção Científica', 'Não-ficção'],
  },
  {
    nome: 'Ricardo Salave\'a',
    cargo: 'Head de Logística',
    bio: 'Especialista em supply chain com passagem por grandes varejistas online. Garantiu que nosso prazo médio de entrega caísse de 10 para 3 dias úteis em 18 meses.',
    emoji: '🚚',
    cor: '#e67e22',
    especialidades: ['Operações', 'Parceiros Logísticos', 'Qualidade'],
  },
  {
    nome: 'Juliana Nakamura',
    cargo: 'UX & Design',
    bio: 'Designer apaixonada por interfaces que fazem as pessoas sentirem algo. Responsável pela identidade visual e pela experiência de compra do nosso site.',
    emoji: '🎨',
    cor: '#e74c3c',
    especialidades: ['UI/UX', 'Branding', 'Acessibilidade'],
  },
  {
    nome: 'Marcos Oliveira',
    cargo: 'Atendimento ao Cliente',
    bio: 'Leitor voraz e o rosto humano da LivrariaDev. Lidera nossa equipe de suporte e acredita que cada cliente merece uma resposta digna de um best-seller.',
    emoji: '🤝',
    cor: '#1abc9c',
    especialidades: ['Suporte', 'LGPD', 'Satisfação do cliente'],
  },
]

const numeros = [
  { valor: '45 mil+', label: 'Títulos no catálogo' },
  { valor: '120 mil+', label: 'Clientes ativos' },
  { valor: '4,9★', label: 'Avaliação média' },
  { valor: '2019', label: 'Ano de fundação' },
]
</script>

<template>
  <div class="page-team">

    <!-- Hero -->
    <header class="page-team__hero">
      <div class="page-team__hero-inner">
        <span class="page-team__eyebrow">Quem somos</span>
        <h1 class="page-team__title">Nossa Equipe</h1>
        <p class="page-team__subtitle">
          Pessoas que amam livros tanto quanto você. Cada membro foi escolhido não só pela competência, mas pela paixão genuína pela leitura.
        </p>
      </div>
    </header>

    <!-- Números -->
    <section class="page-team__numbers">
      <div class="page-team__numbers-inner">
        <div
          v-for="n in numeros"
          :key="n.label"
          class="page-team__number-item"
        >
          <span class="page-team__number-val">{{ n.valor }}</span>
          <span class="page-team__number-label">{{ n.label }}</span>
        </div>
      </div>
    </section>

    <!-- Missão -->
    <section class="page-team__mission">
      <div class="page-team__mission-inner">
        <div class="page-team__mission-text">
          <h2 class="page-team__mission-title">Nossa missão</h2>
          <p>
            Acreditamos que um bom livro pode mudar uma vida. Fundada em 2019, a <strong>LivrariaDev</strong> nasceu da frustração de não encontrar um lugar onde tecnologia e curadoria literária andassem juntas. Queremos que encontrar e receber o livro certo seja tão prazeroso quanto a leitura.
          </p>
          <p>
            Somos uma equipe pequena, diversa e altamente especializada. Não temos algoritmos decidindo o que você deve ler — temos seres humanos apaixonados por livros, trabalhando todos os dias para que o catálogo certo chegue ao leitor certo.
          </p>
        </div>
        <div class="page-team__mission-values">
          <div class="page-team__value">
            <span>📖</span>
            <span>Curadoria humana</span>
          </div>
          <div class="page-team__value">
            <span>🌱</span>
            <span>Sustentabilidade</span>
          </div>
          <div class="page-team__value">
            <span>🤍</span>
            <span>Diversidade literária</span>
          </div>
          <div class="page-team__value">
            <span>⚡</span>
            <span>Tecnologia com propósito</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid de membros -->
    <section class="page-team__grid-section">
      <div class="page-team__grid-inner">
        <h2 class="page-team__section-title">Conheça o time</h2>
        <div class="page-team__grid">
          <article
            v-for="membro in membros"
            :key="membro.nome"
            class="page-team__card"
          >
            <div class="page-team__card-avatar" :style="{ background: membro.cor + '20', borderColor: membro.cor }">
              <span class="page-team__card-emoji">{{ membro.emoji }}</span>
            </div>
            <div class="page-team__card-body">
              <h3 class="page-team__card-name">{{ membro.nome }}</h3>
              <p class="page-team__card-cargo" :style="{ color: membro.cor }">{{ membro.cargo }}</p>
              <p class="page-team__card-bio">{{ membro.bio }}</p>
              <div class="page-team__card-tags">
                <span
                  v-for="esp in membro.especialidades"
                  :key="esp"
                  class="page-team__card-tag"
                  :style="{ background: membro.cor + '18', color: membro.cor }"
                >{{ esp }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Trabalhe conosco -->
    <section class="page-team__join">
      <div class="page-team__join-inner">
        <span class="page-team__join-icon">💼</span>
        <div>
          <h3 class="page-team__join-title">Quer fazer parte do time?</h3>
          <p class="page-team__join-desc">Estamos sempre em busca de pessoas que amam livros e tecnologia. Mande seu currículo.</p>
        </div>
        <a href="mailto:carreiras@livrariadev.com.br" class="page-team__join-btn">
          Enviar currículo
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.page-team {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
}

/* Hero */
.page-team__hero {
  background: linear-gradient(135deg, #1a3a2a 0%, #0f2419 100%);
  padding: 5rem 1.5rem 4rem;
  text-align: center;
}
.page-team__hero-inner { max-width: 620px; margin: 0 auto; }
.page-team__eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2ecc71;
  margin-bottom: 0.75rem;
}
.page-team__title {
  font-family: 'Georgia', serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: #fff;
  margin: 0 0 0.75rem;
}
.page-team__subtitle {
  font-size: 1rem;
  color: #a8d8be;
  margin: 0;
  line-height: 1.7;
}

/* Numbers */
.page-team__numbers {
  background: #2ecc71;
  padding: 1.5rem;
}
.page-team__numbers-inner {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.page-team__number-item {
  text-align: center;
}
.page-team__number-val {
  display: block;
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a3a2a;
}
.page-team__number-label {
  font-size: 0.75rem;
  color: #1a5c33;
  font-weight: 600;
}

/* Mission */
.page-team__mission {
  padding: 3rem 1.5rem;
  background: #fff;
  border-bottom: 1px solid #e0ede5;
}
.page-team__mission-inner {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 3rem;
  align-items: center;
}
.page-team__mission-title {
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  color: #1a3a2a;
  margin: 0 0 1rem;
}
.page-team__mission-text p {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.8;
  margin: 0 0 0.9rem;
}
.page-team__mission-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
.page-team__value {
  background: #f0faf4;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #1a3a2a;
  text-align: center;
}
.page-team__value span:first-child { font-size: 1.4rem; }

/* Grid membros */
.page-team__grid-section {
  padding: 3rem 1.5rem;
}
.page-team__grid-inner { max-width: 1000px; margin: 0 auto; }
.page-team__section-title {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #1a3a2a;
  margin: 0 0 1.75rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #e0ede5;
}
.page-team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.page-team__card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.page-team__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.page-team__card-avatar {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid;
}
.page-team__card-emoji { font-size: 3rem; }
.page-team__card-body { padding: 1.25rem; }
.page-team__card-name {
  font-family: 'Georgia', serif;
  font-size: 1.05rem;
  color: #1a3a2a;
  margin: 0 0 0.2rem;
}
.page-team__card-cargo {
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}
.page-team__card-bio {
  font-size: 0.82rem;
  color: #666;
  line-height: 1.65;
  margin: 0 0 0.85rem;
}
.page-team__card-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.page-team__card-tag {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
}

/* Join */
.page-team__join {
  background: #1a3a2a;
  padding: 2rem 1.5rem;
}
.page-team__join-inner {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.page-team__join-icon { font-size: 2.5rem; }
.page-team__join-title {
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  color: #fff;
  margin: 0 0 0.25rem;
}
.page-team__join-desc {
  font-size: 0.85rem;
  color: #a8d8be;
  margin: 0;
}
.page-team__join-btn {
  margin-left: auto;
  background: #2ecc71;
  color: #1a3a2a;
  text-decoration: none;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background 0.2s;
}
.page-team__join-btn:hover { background: #27ae60; color: #fff; }

@media (max-width: 640px) {
  .page-team__numbers-inner { grid-template-columns: repeat(2, 1fr); }
  .page-team__mission-inner { grid-template-columns: 1fr; }
  .page-team__join-btn { margin-left: 0; }
}
</style>