<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="teal darken-3">
              <v-icon size="40" color="white">mdi-account</v-icon>
            </v-avatar>
            <h2 class="black--text mt-4">Vue Login Page</h2>
          </div>
          <v-form @submit.prevent="Login" ref="form">
            <v-card-text>
              <v-text-field
                v-model="username"
                :rules="emailRules"
                type="email"
                label="Username"
                placeholder="Username"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-switch label="Remember me" color="indigo"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading " type="submit" color="blue">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top :color="loading ? 'green' : 'red'" v-model="snackbar">
      Can't logged in to user account
    </v-snackbar>
  </v-app>
</template>

<script>
 import {mapActions} from "vuex";

export default {
  name: "App",

  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    username: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),

  computed:{
    //  ...mapState([
    //    "loading",
    //    "snackbar"
    //  ])
  },
  methods: {




    ...mapActions(["checkData"]),
    Login() {
      const {username,password}=this;
     
      this.checkData([username,password])
      
      

       if (this.$refs.form.validate()) {
       
         this.loading = true;
        setTimeout(() => {
           
          this.loading = false;
          this.snackbar = true;
        }, 1000);
      
       }
    },
  },
};
</script>
<style>
</style>