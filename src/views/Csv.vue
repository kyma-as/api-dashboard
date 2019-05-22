<template>
  <div>
    <v-list v-for="vessel in vessels">
      <v-list-tile>
        {{vessel.name}}
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: "Csv.vue",
        computed: {
            ...mapState([
                'vessels'
            ])
        },
        methods:{

        },
        mounted() {

        }
    }
</script>
