// Este arquivo é um módulo JavaScript que contém a lógica relacionada ao carrinho de compras em um aplicativo Vue.js. Ele define uma estrutura de dados para representar os itens no carrinho, incluindo informações como id, título, autor, resenha, preço, capa (URL da imagem), quantidade e preço total. O módulo também exporta uma função addCarrinho que permite adicionar um livro ao carrinho, atualizando a quantidade e o preço total conforme necessário. A função utiliza a lista de produtos importada do arquivo /src/data/product.js para encontrar as informações do livro com base no id fornecido. Este módulo é projetado para ser usado em componentes relacionados ao carrinho de compras, permitindo que os usuários adicionem livros ao carrinho e visualizem os itens selecionados. AINDA PRECISAM SER ADICIONADAS VÁRIAS FUNÇÕES AQUI!!!
//Exemplo: Remover itens do carrinho, adicionar quantidade para o item já no carrinho, remover quantidade para o item já no carrinho, calcular o total do carrinho, filtrar livros por autor, por preço, etc. Vocês podem criar funções para cada uma dessas funcionalidades e exportá-las para serem usadas em outros componentes do aplicativo, como o ProductList.vue, onde o usuário poderá filtrar os livros disponíveis, ou no CartPanel.vue, onde o usuário poderá gerenciar os itens em seu carrinho de compras.

import { produtos } from '@/data/product'

/**
 * Adiciona um produto ao carrinho ou incrementa sua quantidade.
 * @param {Array} cartItems - array reativo de itens do carrinho
 * @param {number} idLivro
 * @param {number} quantidade
 */
export function addCarrinho(cartItems, idLivro, quantidade = 1) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (!livro) return

  const itemExistente = cartItems.find((item) => item.id === idLivro)
  if (itemExistente) {
    itemExistente.quantidade += quantidade
    itemExistente.precoTotal = itemExistente.quantidade * itemExistente.preco
  } else {
    cartItems.push({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      preco: livro.preco,
      capa: livro.capa,
      quantidade,
      precoTotal: quantidade * livro.preco,
    })
  }
  recalcularTotal(cartItems)
}

/**
 * Remove completamente um item do carrinho.
 * @param {Array} cartItems
 * @param {number} idLivro
 */
export function removeCarrinho(cartItems, idLivro) {
  const index = cartItems.findIndex((item) => item.id === idLivro)
  if (index !== -1) {
    cartItems.splice(index, 1)
  }
  recalcularTotal(cartItems)
}

/**
 * Incrementa a quantidade de um item do carrinho em 1.
 */
export function incrementarItem(cartItems, idLivro) {
  const item = cartItems.find((i) => i.id === idLivro)
  if (item) {
    item.quantidade += 1
    item.precoTotal = item.quantidade * item.preco
    recalcularTotal(cartItems)
  }
}

/**
 * Decrementa a quantidade de um item. Remove se chegar a 0.
 */
export function decrementarItem(cartItems, idLivro) {
  const item = cartItems.find((i) => i.id === idLivro)
  if (!item) return
  if (item.quantidade > 1) {
    item.quantidade -= 1
    item.precoTotal = item.quantidade * item.preco
    recalcularTotal(cartItems)
  } else {
    removeCarrinho(cartItems, idLivro)
  }
}

/**
 * Recalcula o total do carrinho (usado internamente).
 * Retorna o total mas também pode ser chamado externamente.
 */
export function recalcularTotal(cartItems) {
  return cartItems.reduce((acc, item) => acc + item.precoTotal, 0)
}

/**
 * Calcula o total do carrinho.
 */
export function calcularTotal(cartItems) {
  return cartItems.reduce((acc, item) => acc + item.precoTotal, 0)
}

/**
 * Calcula o número total de itens no carrinho.
 */
export function calcularQuantidadeTotal(cartItems) {
  return cartItems.reduce((acc, item) => acc + item.quantidade, 0)
}

/**
 * Verifica se o carrinho está vazio.
 */
export function carrinhoVazio(cartItems) {
  return cartItems.length === 0
}

/**
 * Limpa todos os itens do carrinho.
 */
export function limparCarrinho(cartItems) {
  cartItems.splice(0, cartItems.length)
}

