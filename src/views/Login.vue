<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="secondary lighten-1">
                <AppTitle/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="input.username" prepend-icon="person" name="login"
                                label="Login" type="text" id="username">

                  </v-text-field>
                  <v-text-field v-model="input.password" prepend-icon="lock" name="password"
                                label="Password" id="password" type="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
    import AppTitle from "@/components/AppTitle"
    import {validateLogin,authenticateLogin} from "../scripts/authentication";

    export default {
        name:'login',
        components:{AppTitle},
        data() {
            return{
              input:{
                  username:"",
                  password:""
              }
            }
        },
        methods:{
            async login() {
                let username = this.input.username;
                let password = this.input.password;
                if (validateLogin(username, password)) {
                    // Authenticate against kyma api
                    if (await authenticateLogin(username, password)) {
                        // Set state authenticated
                        // Route to Home
                        console.log(authenticateLogin(username, password))
                        this.$router.replace({name: 'home'})
                    } else {
                        console.log("Could not authenticate with the server")
                    }
                } else {
                    console.log("Must have an email and password")
                }
            }
        }
    }


</script>
