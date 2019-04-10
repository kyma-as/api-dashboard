<template v-for="vessels in allVessels">
  <div class="home">
    <NavDrawer />
    <v-content> 
    <v-container grid-list-lg>
      <v-layout row wrap>
        
        <v-flex xs12 sm6 md4 lg3 xl3>
          <v-card>
            <v-card-title >
              <div>
                <h3 class="headline mb-0">{{ vessels in allVessels }}</h3>
                <div>Dette er et skip</div>
              </div>
            </v-card-title>

            <div>
              {{ vessels.name }}
            </div>
          </v-card>  
        </v-flex>
       
        
      </v-layout>
    </v-container>
    </v-content>
  </div>
</template>


<script>
import NavDrawer from "@/components/NavDrawer"
import VesselCard from "@/components/VesselCard"
    export default {
        name: "home",
        components: {
          NavDrawer,
          VesselCard
        },
        data() {
          return {
            
            allVessels:[
              {name: 'vn'}
              ]
          }
        },
        mounted() {
        this.$store.commit("setAllVessels")
    },
        computed: {
        getAllVessels(){
            
            return this.$store.getAllVessels
        }
      }
    }
</script>