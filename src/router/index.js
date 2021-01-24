import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Authentication from '../views/Аuthentication.vue'
import Registration from '../views/Registration.vue'
import ErrorPage from "@/views/ErrorPage"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '*',
    component: ErrorPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser

  if (to.name !== 'HomePage' && currentUser) {
    next('/')
  } else if (to.name === 'HomePage' && !currentUser) {
    next('/registration')
  } else {
    next()
  }
})

export default router
