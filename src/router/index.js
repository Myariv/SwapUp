import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "../views/LoginPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/MyCards',
        name: 'MyCards',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MyCards.vue')

    },
    {
        path: '/CardsEdit/:id',
        name: 'CardsEdit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CardsEdit.vue')

    },
    {
        path: '/NewCard',
        name: 'NewCard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/NewCard.vue')
    },
    {
        path: '/FeedPage',
        name: 'FeedPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/FeedPage.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router
