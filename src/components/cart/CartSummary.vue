<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.

import { inject, computed } from 'vue'
import { formataPreco } from '@/utils/currencyUtils'

const cartTotal = inject('cartTotal')
const onLimpar = inject('onLimpar')

const FRETE_GRATIS_ACIMA = 200
const FRETE_FIXO = 15.9

const frete = computed(() => (cartTotal.value >= FRETE_GRATIS_ACIMA ? 0 : FRETE_FIXO))
const totalFinal = computed(() => cartTotal.value + frete.value)
const freteGratis = computed(() => cartTotal.value >= FRETE_GRATIS_ACIMA)
</script>

<template>
  <aside class="cart-summary">
    <h2 class="cart-summary__title">Resumo do Pedido</h2>

    <div class="cart-summary__rows">
      <div class="cart-summary__row">
        <span>Subtotal</span>
        <span>{{ formataPreco(cartTotal) }}</span>
      </div>

      <div class="cart-summary__row">
        <span>Frete</span>
        <span :class="{ 'cart-summary__free': freteGratis }">
          {{ freteGratis ? 'Grátis 🎉' : formataPreco(frete) }}
        </span>
      </div>

      <p v-if="!freteGratis" class="cart-summary__frete-hint">
        Faltam {{ formataPreco(FRETE_GRATIS_ACIMA - cartTotal) }} para frete grátis
      </p>

      <hr class="cart-summary__divider" />

      <div class="cart-summary__row cart-summary__row--total">
        <span>Total</span>
        <span>{{ formataPreco(totalFinal) }}</span>
      </div>
    </div>

    <button class="cart-summary__checkout-btn">
      Finalizar Compra
    </button>

    <button class="cart-summary__clear-btn" @click="onLimpar">
      Limpar Carrinho
    </button>

    <div class="cart-summary__payment">
      <span>💳</span>
      <span>Visa</span>
      <span>Mastercard</span>
      <span>Pix</span>
      <span>Boleto</span>
    </div>
  </aside>
</template>

<style scoped>
.cart-summary {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.09);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 80px;
  align-self: start;
}

.cart-summary__title {
  font-family: 'Georgia', serif;
  font-size: 1.15rem;
  color: #1a3a2a;
  margin: 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e8f5ed;
}

.cart-summary__rows {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cart-summary__row {
  display: flex;
  justify-content: space-between;
  font-size: 0.92rem;
  color: #444;
}

.cart-summary__row--total {
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a3a2a;
}

.cart-summary__free {
  color: #2ecc71;
  font-weight: 700;
}

.cart-summary__frete-hint {
  font-size: 0.75rem;
  color: #e67e22;
  margin: -0.3rem 0 0;
  text-align: right;
}

.cart-summary__divider {
  border: none;
  border-top: 1.5px solid #e8f5ed;
  margin: 0.25rem 0;
}

.cart-summary__checkout-btn {
  background: #2ecc71;
  color: #1a3a2a;
  border: none;
  border-radius: 8px;
  padding: 0.85rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

.cart-summary__checkout-btn:hover {
  background: #27ae60;
  color: #fff;
}

.cart-summary__clear-btn {
  background: none;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.55rem;
  font-size: 0.85rem;
  color: #999;
  cursor: pointer;
  width: 100%;
  transition: border-color 0.2s, color 0.2s;
}

.cart-summary__clear-btn:hover {
  border-color: #e74c3c;
  color: #e74c3c;
}

.cart-summary__payment {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #bbb;
  flex-wrap: wrap;
}
</style>

