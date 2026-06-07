<script setup>
import { reactive, computed } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import {
  addCarrinho,
  removeCarrinho,
  incrementarItem,
  decrementarItem,
  calcularTotal,
  calcularQuantidadeTotal,
  limparCarrinho,
} from '@/utils/cartUtils'

// Estado central do carrinho – compartilhado via provide
const cartItems = reactive([])

const total = computed(() => calcularTotal(cartItems))
const quantidadeTotal = computed(() => calcularQuantidadeTotal(cartItems))

function onAddCarrinho(idLivro) {
  addCarrinho(cartItems, idLivro)
}
function onRemoveCarrinho(idLivro) {
  removeCarrinho(cartItems, idLivro)
}
function onIncrementar(idLivro) {
  incrementarItem(cartItems, idLivro)
}
function onDecrementar(idLivro) {
  decrementarItem(cartItems, idLivro)
}
function onLimpar() {
  limparCarrinho(cartItems)
}

// Disponibiliza estado e handlers para todos os filhos via provide
import { provide } from 'vue'
provide('cartItems', cartItems)
provide('cartTotal', total)
provide('cartQuantidade', quantidadeTotal)
provide('onAddCarrinho', onAddCarrinho)
provide('onRemoveCarrinho', onRemoveCarrinho)
provide('onIncrementar', onIncrementar)
provide('onDecrementar', onDecrementar)
provide('onLimpar', onLimpar)
</script>

<template>
  <AppHeader :quantidade-total="quantidadeTotal" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
