const moedaPais = 'BRL'
const idioma = 'pt-BR'

/**
 * Formata um número como moeda brasileira (R$).
 * @param {number} preco
 * @returns {string}
 */
export function formataPreco(preco) {
  return Number(preco).toLocaleString(idioma, {
    style: 'currency',
    currency: moedaPais,
  })
}
