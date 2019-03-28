<template>
  <div>
    <v-content>
      <v-list v-for="row in rows">
        <v-divider/>
        <v-list-tile>
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
                rows:[]
            }
        },
        methods: {
            getApiData() {
                let url = 'https://demo.kyma.no/api/v1/vessels';
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
                        console.log(json);
                        this.loading = false;
                        for(let entry of json){
                            for(let key in entry){
                                let str = `${key} --> ${entry[key]}`
                                this.rows.push(str)
                            }
                        }
                    });

            }
        },
        created() {
            this.getApiData();
        }
    }
</script>

<style scoped>

</style>