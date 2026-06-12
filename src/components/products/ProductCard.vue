<script setup>
import { ref } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const props = defineProps({
  produto: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['addToCart'])

const favorito = ref(false)
const detalhesVisiveis = ref(false)

function toggleFavorito() {
  favorito.value = !favorito.value
}

function toggleDetalhes() {
  detalhesVisiveis.value = !detalhesVisiveis.value
}

function adicionarAoCarrinho() {
  emit('addToCart', props.produto)
}
</script>

<template>
  <div class="product-card">
    <div class="card-img-wrapper" @click="toggleDetalhes">
      <img :src="produto.capa" :alt="produto.titulo" class="card-img" />
      <div v-if="detalhesVisiveis" class="card-overlay">
        <p class="overlay-resenha">{{ produto.resenha }}</p>
        <span class="overlay-autor">{{ produto.autor }}</span>
      </div>
    </div>

    <div class="card-body">
      <h3 class="card-titulo">{{ produto.titulo }}</h3>
      <p class="card-autor">{{ produto.autor }}</p>
      <p class="card-preco">{{ formataPreco(produto.preco) }}</p>

      <div class="card-actions">
        <button class="btn-comprar" @click="adicionarAoCarrinho">
          🛒 Comprar
        </button>
        <button
          class="btn-favorito"
          :class="{ ativo: favorito }"
          @click="toggleFavorito"
          :title="favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
        >
          {{ favorito ? '♥' : '♡' }}
import { inject } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const { produto } = defineProps({
  produto: {
    type: Object,
    required: true,
  },
})

const onAddCarrinho = inject('onAddCarrinho')
</script>
<template>
  <div class="product-card">
    <div class="product-card__cover-wrap">
      <img
        :src="produto.capa"
        :alt="produto.titulo"
        class="product-card__cover"
        loading="lazy"
      />
    </div>
    <div class="product-card__body">
      <h3 class="product-card__title">{{ produto.titulo }}</h3>
      <p class="product-card__author">{{ produto.autor }}</p>
      <p class="product-card__desc">{{ produto.resenha }}</p>
      <div class="product-card__footer">
        <span class="product-card__price">{{ formataPreco(produto.preco) }}</span>
        <button class="product-card__btn" @click="onAddCarrinho(produto.id)">
          🛒 Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  transform: translateY(-2px);
}

.card-img-wrapper {
  position: relative;
  cursor: pointer;
  background: #f5f5f5;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.card-img-wrapper:hover .card-img {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  text-align: center;
  gap: 8px;
}

.overlay-resenha {
  font-size: 12px;
  line-height: 1.5;
}

.overlay-autor {
  font-size: 11px;
  color: #adf;
  font-style: italic;
}

.card-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.card-titulo {
  font-size: 13px;
  font-weight: 700;
  color: #222;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-autor {
  font-size: 11px;
  color: #777;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-preco {
  font-size: 15px;
  font-weight: 800;
  color: #333;
  margin: 4px 0 0;
}

.card-actions {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  align-items: center;
}

.btn-comprar {
  flex: 1;
  background: #00b300;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-comprar:hover {
  background: #009900;
}

.btn-favorito {
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
  color: #ccc;
  transition: all 0.2s;
  line-height: 1;
}

.btn-favorito.ativo {
  color: #e00;
  border-color: #e00;
}

.btn-favorito:hover {
  border-color: #e00;
  color: #e00;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.14);
}

.product-card__cover-wrap {
  background: #f5f5f0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
}

.product-card__cover {
  max-height: 180px;
  object-fit: contain;
}

.product-card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.35rem;
}

.product-card__title {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  color: #1a3a2a;
  margin: 0;
  line-height: 1.3;
}

.product-card__author {
  font-size: 0.78rem;
  color: #777;
  margin: 0;
}

.product-card__desc {
  font-size: 0.8rem;
  color: #555;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  gap: 0.5rem;
}

.product-card__price {
  font-weight: 700;
  font-size: 1.05rem;
  color: #1a3a2a;
}

.product-card__btn {
  background: #2ecc71;
  color: #1a3a2a;
  border: none;
  border-radius: 6px;
  padding: 0.45rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.product-card__btn:hover {
  background: #27ae60;
  color: #fff;
}
</style>
