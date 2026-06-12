<script setup>
import { inject } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const props = defineProps({
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
