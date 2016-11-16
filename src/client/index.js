// IMPORT CSS
import '../stylesheets/base'

// LIBS
import 'materialize-css'

// FIREBASE
import firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyApycWCzj4ke7enxT5izdPYfl5jkCgo-Ds',
  authDomain: 'famulove-83075.firebaseapp.com',
  databaseURL: 'https://famulove-83075.firebaseio.com',
  storageBucket: 'famulove-83075.appspot.com',
  messagingSenderId: '988680266245'
}
firebase.initializeApp(firebaseConfig)

// INITIALIZE
import Vue from 'vue'
import Vuex from 'vuex'
import page from 'page'

Vue.use(Vuex)

// SETUP
import createStore from './store'
import routes from './routes'
import flApp from './components/fl-app'

// MAIN APP INSTANCE
const app = new Vue({
  el: '#app',
  data: {
    RouteComponent: {render: (h) => h('div', 'loading')}
  },
  components: {
    'fl-app': flApp
  },
  render (h) {
    return h('fl-app', {
      props: {
        RouteComponent: this.RouteComponent
      }
    })
  },
  store: createStore()
})

// ROUTING
for (let route in routes) {
  page(route, () => { app.RouteComponent = routes[route] })
}
page()
