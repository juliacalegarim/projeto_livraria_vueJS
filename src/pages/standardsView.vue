<script setup>
const sections = [
  {
    icon: '📋',
    title: '1. Aceitação dos Termos',
    body: `Ao acessar e utilizar o site da LivrariaDev, você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui presente, recomendamos que não utilize nossos serviços. O uso contínuo da plataforma após eventuais alterações dos termos constitui aceitação das mudanças realizadas.`,
  },
  {
    icon: '🔐',
    title: '2. Cadastro e Conta',
    body: `Para realizar compras em nossa plataforma, pode ser necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Notifique-nos imediatamente em caso de uso não autorizado.`,
  },
  {
    icon: '🛍️',
    title: '3. Compras e Pagamentos',
    body: `Todos os preços exibidos estão em Reais (BRL) e incluem impostos aplicáveis. A LivrariaDev reserva-se o direito de cancelar pedidos em caso de erros de precificação, indisponibilidade de estoque ou suspeita de fraude. O pagamento é processado por parceiros certificados pelo Banco Central do Brasil.`,
  },
  {
    icon: '©️',
    title: '4. Propriedade Intelectual',
    body: `Todo o conteúdo do site — incluindo textos, imagens, logotipos, layout e código-fonte — é propriedade da LivrariaDev ou de seus fornecedores de conteúdo e é protegido por lei. É proibida a reprodução, distribuição ou criação de obras derivadas sem autorização expressa por escrito.`,
  },
  {
    icon: '🔒',
    title: '5. Privacidade e Dados',
    body: `Coletamos e tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Seus dados são utilizados exclusivamente para processar pedidos, melhorar nossos serviços e enviar comunicações que você autorizar. Jamais vendemos seus dados a terceiros.`,
  },
  {
    icon: '⚖️',
    title: '6. Limitação de Responsabilidade',
    body: `A LivrariaDev não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso dos serviços. Nossa responsabilidade máxima fica limitada ao valor pago pelo produto ou serviço que deu origem à reclamação.`,
  },
  {
    icon: '📍',
    title: '7. Foro e Legislação',
    body: `Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo/SP como competente para dirimir quaisquer litígios, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
]
</script>

<template>
  <div class="page-terms">
    <header class="page-terms__hero">
      <div class="page-terms__hero-inner">
        <span class="page-terms__eyebrow">Transparência & Confiança</span>
        <h1 class="page-terms__title">Termos de Uso</h1>
        <p class="page-terms__subtitle">
          Leia com atenção. Estes termos regem a relação entre você e a LivrariaDev.
        </p>
        <p class="page-terms__updated">Última atualização: 1 de junho de 2025</p>
      </div>
      <div class="page-terms__hero-deco" aria-hidden="true">§</div>
    </header>

    <main class="page-terms__body">
      <div class="page-terms__intro">
        <p>
          Bem-vindo à <strong>LivrariaDev</strong>. Ao utilizar nosso site, você está contratando conosco e concordando com as condições descritas abaixo. Se tiver dúvidas, entre em contato pelo e-mail <a href="mailto:juridico@livrariadev.com.br" class="page-terms__link">juridico@livrariadev.com.br</a>.
        </p>
      </div>

      <div class="page-terms__sections">
        <section
          v-for="(sec, i) in sections"
          :key="i"
          class="page-terms__section"
        >
          <div class="page-terms__section-icon">{{ sec.icon }}</div>
          <div class="page-terms__section-content">
            <h2 class="page-terms__section-title">{{ sec.title }}</h2>
            <p class="page-terms__section-body">{{ sec.body }}</p>
          </div>
        </section>
      </div>

      <div class="page-terms__footer-note">
        <p>Ao usar nossos serviços você confirma ter lido, compreendido e aceitado todos os termos acima.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-terms {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
}

/* Hero */
.page-terms__hero {
  background: #1a3a2a;
  padding: 4rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}

.page-terms__hero-inner {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.page-terms__hero-deco {
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18rem;
  color: rgba(46, 204, 113, 0.06);
  font-family: 'Georgia', serif;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.page-terms__eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2ecc71;
  margin-bottom: 0.75rem;
}

.page-terms__title {
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #fff;
  margin: 0 0 0.75rem;
  line-height: 1.1;
}

.page-terms__subtitle {
  font-size: 1rem;
  color: #a8d8be;
  margin: 0 0 1rem;
  max-width: 500px;
  line-height: 1.6;
}

.page-terms__updated {
  font-size: 0.78rem;
  color: #567a64;
  margin: 0;
}

/* Body */
.page-terms__body {
  max-width: 780px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.page-terms__intro {
  background: #fff;
  border-left: 4px solid #2ecc71;
  border-radius: 0 8px 8px 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.7;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.page-terms__link {
  color: #2ecc71;
  font-weight: 600;
  text-decoration: none;
}
.page-terms__link:hover { text-decoration: underline; }

/* Sections */
.page-terms__sections {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.page-terms__section {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;
  align-items: start;
  transition: box-shadow 0.2s;
}

.page-terms__section:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.page-terms__section-icon {
  font-size: 1.75rem;
  line-height: 1;
  padding-top: 0.15rem;
}

.page-terms__section-title {
  font-family: 'Georgia', serif;
  font-size: 1.05rem;
  color: #1a3a2a;
  margin: 0 0 0.6rem;
}

.page-terms__section-body {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.75;
  margin: 0;
}

/* Footer note */
.page-terms__footer-note {
  margin-top: 2.5rem;
  text-align: center;
  font-size: 0.82rem;
  color: #aaa;
  border-top: 1px solid #e0ede5;
  padding-top: 1.5rem;
}
</style>