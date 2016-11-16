import Vuex from 'vuex'

// MODULES
import auth from './auth'

// STORE CREATOR
export default function () {
  return new Vuex.Store({
    modules: {
      auth
    }
  })
}
