<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.


import { inject } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const onIncrementar = inject('onIncrementar')
const onDecrementar = inject('onDecrementar')
const onRemoveCarrinho = inject('onRemoveCarrinho')
</script>

<template>
  <div class="cart-item">
    <img :src="item.capa" :alt="item.titulo" class="cart-item__cover" />

    <div class="cart-item__info">
      <h3 class="cart-item__title">{{ item.titulo }}</h3>
      <p class="cart-item__author">{{ item.autor }}</p>
      <span class="cart-item__unit-price">{{ formataPreco(item.preco) }} / un.</span>
    </div>

    <div class="cart-item__controls">
      <button class="cart-item__qty-btn" @click="onDecrementar(item.id)" title="Diminuir">−</button>
      <span class="cart-item__qty">{{ item.quantidade }}</span>
      <button class="cart-item__qty-btn" @click="onIncrementar(item.id)" title="Aumentar">+</button>
    </div>

    <div class="cart-item__subtotal">
      {{ formataPreco(item.precoTotal) }}
    </div>

    <button class="cart-item__remove" @click="onRemoveCarrinho(item.id)" title="Remover item">
      ✕
    </button>
  </div>
</template>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 72px 1fr auto auto auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.07);
  transition: box-shadow 0.2s;
}

.cart-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.cart-item__cover {
  width: 72px;
  height: 96px;
  object-fit: contain;
  border-radius: 4px;
  background: #f5f5f0;
}

.cart-item__info {
  min-width: 0;
}

.cart-item__title {
  font-family: 'Georgia', serif;
  font-size: 0.97rem;
  color: #1a3a2a;
  margin: 0 0 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cart-item__author {
  font-size: 0.78rem;
  color: #888;
  margin: 0 0 0.3rem;
}

.cart-item__unit-price {
  font-size: 0.8rem;
  color: #aaa;
}

.cart-item__controls {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #f0faf4;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
}

.cart-item__qty-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1.5px solid #2ecc71;
  background: #fff;
  color: #1a3a2a;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  line-height: 1;
}

.cart-item__qty-btn:hover {
  background: #2ecc71;
  color: #fff;
}

.cart-item__qty {
  min-width: 24px;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: #1a3a2a;
}

.cart-item__subtotal {
  font-weight: 700;
  font-size: 1rem;
  color: #1a3a2a;
  white-space: nowrap;
  min-width: 90px;
  text-align: right;
}

.cart-item__remove {
  background: none;
  border: none;
  color: #ccc;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color 0.15s, background 0.15s;
}

.cart-item__remove:hover {
  color: #e74c3c;
  background: #fdecea;
}

@media (max-width: 640px) {
  .cart-item {
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto auto auto;
  }

  .cart-item__cover {
    width: 56px;
    height: 74px;
    grid-row: 1 / 3;
  }

  .cart-item__controls {
    grid-column: 1 / -1;
  }

  .cart-item__subtotal {
    grid-column: 1 / -1;
    text-align: left;
  }

  .cart-item__remove {
    grid-column: 1 / -1;
    text-align: left;
    width: fit-content;
  }
}
</style>
