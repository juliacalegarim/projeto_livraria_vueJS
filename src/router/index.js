import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/layout/HomeView.vue'
import ProductList from '@/components/products/ProductList.vue'
import CartPanel from '@/components/cart/CartPanel.vue'
import TermosView from '@/components/pages/TermosView.vue'
import EnviosView from '@/components/pages/EnviosView.vue'
import EquipeView from '@/components/pages/EquipeView.vue'
import DevolucoesView from '@/components/pages/DevolucoesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/',           name: 'home',       component: HomeView },
    { path: '/produtos',   name: 'products',   component: ProductList },
    { path: '/carrinho',   name: 'cart',       component: CartPanel },
    { path: '/termos',     name: 'termos',     component: TermosView },
    { path: '/envios',     name: 'envios',     component: EnviosView },
    { path: '/equipe',     name: 'equipe',     component: EquipeView },
    { path: '/devolucoes', name: 'devolucoes', component: DevolucoesView },
  ],
})

export default router
