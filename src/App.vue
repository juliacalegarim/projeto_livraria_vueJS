<script setup>
import { reactive, computed, provide } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import {
  addCarrinho,
  removeCarrinho,
  incrementarItem,
  decrementarItem,
  calcularTotal,
  calcularQuantidadeTotal,
  limparCarrinho,
} from '@/utils/cartUtils'

const cartItems = reactive([])
const total = computed(() => calcularTotal(cartItems))
const quantidadeTotal = computed(() => calcularQuantidadeTotal(cartItems))

provide('cartItems', cartItems)
provide('cartTotal', total)
provide('cartQuantidade', quantidadeTotal)
provide('onAddCarrinho', (id) => addCarrinho(cartItems, id))
provide('onRemoveCarrinho', (id) => removeCarrinho(cartItems, id))
provide('onIncrementar', (id) => incrementarItem(cartItems, id))
provide('onDecrementar', (id) => decrementarItem(cartItems, id))
provide('onLimpar', () => limparCarrinho(cartItems))
</script>

<template>
  <AppHeader :quantidade-total="quantidadeTotal" />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
</style>

