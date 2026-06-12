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