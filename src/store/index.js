import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import createPersistedState from "vuex-persistedstate";




Vue.use(Vuex);




export default new Vuex.Store({
  state: {
  
    user: {
      username: "admin@gmail.com",
      password: "admin1"
    },
    msg: "Hello Admin!"




  },

  actions: {
    checkData: ({ commit }, [username, password]) => {
      setTimeout(() => commit("setData", [username, password]), 1000)

    }

  },
  mutations: {
    
    setData: (state, [username, password]) => {
      
      if ( state.user.username== username && state.user.password == password)
       {
       localStorage.setItem("saveddata",JSON.stringify(username + ' ' + password))
        router.push("/admin");


      }


    }

  },
  plugins: [createPersistedState()]


})

