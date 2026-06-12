<script setup>
// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.

import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const cartItems = inject('cartItems')
const cartQuantidade = inject('cartQuantidade')
</script>

<template>
  <section class="cart-panel">
    <div class="cart-panel__inner">

      <!-- Cabeçalho da página -->
      <div class="cart-panel__heading">
        <h1 class="cart-panel__title">
          🛒 Carrinho
          <span v-if="cartQuantidade > 0" class="cart-panel__count">
            {{ cartQuantidade }} {{ cartQuantidade === 1 ? 'item' : 'itens' }}
          </span>
        </h1>
        <RouterLink to="/produtos" class="cart-panel__back">← Continuar comprando</RouterLink>
      </div>

      <!-- Carrinho vazio -->
      <div v-if="cartItems.length === 0" class="cart-panel__empty">
        <div class="cart-panel__empty-icon">🛒</div>
        <h2 class="cart-panel__empty-title">Seu carrinho está vazio</h2>
        <p class="cart-panel__empty-desc">Adicione livros para começar a sua compra.</p>
        <RouterLink to="/produtos" class="cart-panel__empty-btn">Ver catálogo</RouterLink>
      </div>

      <!-- Grid: itens + resumo -->
      <div v-else class="cart-panel__layout">

        <!-- Lista de itens -->
        <div class="cart-panel__items">
          <!-- Cabeçalho da tabela (desktop) -->
          <div class="cart-panel__items-header">
            <span>Título</span>
            <span>Quantidade</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          <TransitionGroup name="cart-item" tag="div" class="cart-panel__items-list">
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :item="item"
            />
          </TransitionGroup>
        </div>

        <!-- Resumo -->
        <CartSummary />
      </div>

    </div>
  </section>
</template>

<style scoped>
.cart-panel {
  background: #f7faf8;
  min-height: calc(100vh - 64px);
  padding: 2rem 1.5rem;
}

.cart-panel__inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* Heading */
.cart-panel__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.cart-panel__title {
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  color: #1a3a2a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.cart-panel__count {
  font-family: 'Verdana', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #888;
}

.cart-panel__back {
  font-size: 0.88rem;
  color: #2ecc71;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.15s;
}

.cart-panel__back:hover {
  color: #1a3a2a;
}

/* Empty state */
.cart-panel__empty {
  text-align: center;
  padding: 5rem 1rem;
}

.cart-panel__empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.3;
}

.cart-panel__empty-title {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #1a3a2a;
  margin: 0 0 0.5rem;
}

.cart-panel__empty-desc {
  color: #888;
  font-size: 0.95rem;
  margin: 0 0 1.5rem;
}

.cart-panel__empty-btn {
  display: inline-block;
  background: #2ecc71;
  color: #1a3a2a;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  transition: background 0.2s;
}

.cart-panel__empty-btn:hover {
  background: #27ae60;
  color: #fff;
}

/* Layout principal */
.cart-panel__layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  align-items: start;
}

/* Itens */
.cart-panel__items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cart-panel__items-header {
  display: grid;
  grid-template-columns: 72px 1fr auto auto auto;
  gap: 1rem;
  padding: 0 1.25rem 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #aaa;
}

.cart-panel__items-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* TransitionGroup animations */
.cart-item-enter-active,
.cart-item-leave-active {
  transition: all 0.3s ease;
}

.cart-item-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}

.cart-item-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.cart-item-move {
  transition: transform 0.3s ease;
}

/* Responsivo */
@media (max-width: 900px) {
  .cart-panel__layout {
    grid-template-columns: 1fr;
  }

  .cart-panel__items-header {
    display: none;
  }
}
</style>

