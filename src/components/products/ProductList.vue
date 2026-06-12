<script setup>
import { ref, computed } from 'vue'
import { produtos } from '@/data/product'
import ProductCard from './ProductCard.vue'

const busca = ref('')

const produtosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase().trim()
  if (!termo) return produtos
  return produtos.filter(
    (p) =>
      p.titulo.toLowerCase().includes(termo) ||
      p.autor.toLowerCase().includes(termo),
  )
})
</script>

<template>
  <section class="product-list">
    <div class="product-list__header">
      <h2 class="product-list__title">Catálogo de Livros</h2>
      <input
        v-model="busca"
        type="text"
        placeholder="Buscar por título ou autor…"
        class="product-list__search"
      />
    </div>

    <p v-if="produtosFiltrados.length === 0" class="product-list__empty">
      Nenhum livro encontrado para "{{ busca }}".
    </p>

    <div v-else class="product-list__grid">
      <ProductCard
        v-for="produto in produtosFiltrados"
        :key="produto.id"
        :produto="produto"
      />
    </div>
  </section>
</template>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.product-list__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.product-list__title {
  font-family: 'Georgia', serif;
  font-size: 1.6rem;
  color: #1a3a2a;
  margin: 0;
}

.product-list__search {
  padding: 0.55rem 1rem;
  border: 2px solid #c8e6d4;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  width: 260px;
  transition: border-color 0.2s;
}

.product-list__search:focus {
  border-color: #2ecc71;
}

.product-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1.5rem;
}

.product-list__empty {
  text-align: center;
  color: #888;
  margin-top: 3rem;
  font-size: 1rem;
}
</style>