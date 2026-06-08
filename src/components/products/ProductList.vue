<script setup>
import { produtos } from '@/data/product'
import ProductCard from './ProductCard.vue'
import { addCarrinho } from '@/utils/cartUtils'

function handleAddToCart(produto) {
  addCarrinho(produto.id, 1)
  alert(`"${produto.titulo}" adicionado ao carrinho!`)
}
</script>

<template>
  <section class="product-list-section">
    <h2 class="section-title">Lançamentos</h2>
    <div class="product-grid">
      <ProductCard
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
        @addToCart="handleAddToCart"
      />
    </div>
  </section>
</template>

<style scoped>
.product-list-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.section-title {
  font-size: 22px;
  font-weight: 800;
  color: #222;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #00b300;
  display: inline-block;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
</style>
