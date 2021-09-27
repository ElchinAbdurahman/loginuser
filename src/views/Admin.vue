<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Admin</v-toolbar-title>

      <v-spacer></v-spacer>

     

      <v-btn  @click="logout" color="black" class="ml-4">
        Logout
      </v-btn>

      <v-menu
        left
        bottom
      >
   
      </v-menu>
      
    </v-app-bar>
   
    <h1 class="text-center mt-5"> {{msg}}  </h1>
  </div>
</template>


<script>
import router from "../router";
import {mapState} from "vuex"

export default {
  data() {
    return {
     msgState:false
    }
  },

computed:{
 ...mapState(["msg"])
},

 methods: {
  logout(){
    localStorage.removeItem("saveddata")
    router.push("/")
  }
}}
</script>