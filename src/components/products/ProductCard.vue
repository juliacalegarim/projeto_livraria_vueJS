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
}
</style>
