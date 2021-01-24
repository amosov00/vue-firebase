import Vue from 'vue'
import firebase from 'firebase'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import Xbutton from '@/components/Xbutton'
import Xcard from '@/components/Xcard'
import router from './router'
import store from './store'
import '@/styles/main.scss'

Vue.config.productionTip = false
Vue.component('x-btn', Xbutton)
Vue.component('x-card', Xcard)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyBkX6hCTaAQvk73R6iS1h0Pj2Qd-gnFixg",
  authDomain: "test-vue-project-1af02.firebaseapp.com",
  projectId: "test-vue-project-1af02",
  storageBucket: "test-vue-project-1af02.appspot.com",
  messagingSenderId: "916803527772",
  appId: "1:916803527772:web:94d91c901e57961da1b299",
  measurementId: "G-RWMJ4Q1P4H"
})

let app

firebase.auth().onAuthStateChanged(()=>{
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
