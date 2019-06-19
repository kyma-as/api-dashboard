<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="secondary">
                <AppTitle/>
              </v-toolbar>
              <v-card-text>
                <v-form @keydown.native.enter="login">
                  <v-text-field v-model="input.username" prepend-icon="person" name="login"
                                label="Login" type="text" id="username"
                                :rules="[rules.email, rules.required]">

                  </v-text-field>
                  <v-text-field v-model="input.password" prepend-icon="lock" name="password"
                                label="Password" id="password" type="password"
                                :rules="[rules.required]">
                  </v-text-field>
                  <p v-if="errorToggle" class="red--text"> Invalid username or password </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-progress-circular
                    v-if="loading"
                    :indeterminate="loading"
                    color="primary"
                ></v-progress-circular>
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
    import {authenticateLogin, convertToBase64} from "../scripts/authentication";

    export default {
        name: 'login',
        components: {AppTitle},
        data() {
            return {
                loading: false,
                errorToggle: false,
                input: {
                    username: "",
                    password: ""
                },
                rules:{
                    required:value=>!!value||'Required',
                    email: (value)=>{
                        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                        return emailReg.test(value) ||'Must be email'
                    }

                }
            }
        },
        computed: {
          errorMessage: () => {
            return this.errorToggle;
          }
        },
        methods: {
            async login() {
                let username = this.input.username;
                let password = this.input.password;

                this.loading = true;
                this.errorToggle = false;

                // Authenticate against kyma api
                let headerParams = convertToBase64(username,password);
                console.log("Authenticating with server...");
                if (await authenticateLogin(headerParams)) {
                    this.loading = false;
                    console.log("Authenticated!");
                    // Set state authenticated
                    // Route to Vessels
                    this.$store.dispatch('setLoggedIn',{loggedIn:true, headerParams:headerParams});
                    this.$router.replace({name: 'vessels'})

                } else {
                    this.errorToggle = true;
                    this.loading = false;
                    console.log("Could not authenticate with the server")
                }
            }

        },
        mounted() {
          // TODO: remove in production
            this.$store.dispatch('getCurrentDate');
        }
    }


</script>
