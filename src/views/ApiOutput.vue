<template>
  <div>
    <v-content>
      <v-layout row wrap>
        <v-flex>
          <v-text-field class="white"
                        label="Url Parameter"
                        v-model="urlParam"
          ></v-text-field>
          <v-btn @click="getApiData">Fetch Data</v-btn>
          <v-btn @click="clearData">Clear Data</v-btn>
          <v-progress-circular
              v-if="loading"
              :indeterminate="loading"
              color="primary"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-list v-for="row in rows" class="primary">
        <v-divider/>
        <v-list-tile class="tertiary">
          {{row}}
        </v-list-tile>
        <v-divider/>
      </v-list>
    </v-content>
  </div>
</template>

<script>
    export default {
        name: "ApiOutput",
        data() {
            return {
                loading: false,
                urlParam: "vessels",
                rows: []
            }
        },
        methods: {
            getApiData() {
                if(this.rows.length >0){
                    this.clearData();
                }
                let url = 'https://demo.kyma.no/api/v1/' + this.urlParam;
                let user = 'ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==';
                this.loading = true;
                console.log("Trying to fetch data...")
                fetch(url, {
                    headers: {
                        Authorization: 'Basic ' + user
                    }
                })
                    .then(res => res.json())
                    .then((json) => {
                        this.loading = false;
                        for (let entry of json) {
                            for (let key in entry) {
                                let str = `${key} --> ${entry[key]}`
                                this.rows.push(str)
                            }
                        }
                    });

            },
            clearData() {
                this.rows = []
            }
        },
        created() {
            //this.getApiData();
        }
    }
</script>

<style scoped>

</style>