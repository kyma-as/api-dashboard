<template>
  <div>
    <div class="ma-5">
      <v-container>
        <v-layout row wrap>
          <v-flex md3>
            <v-card dark tile flat color="red">
              <v-card-text>
                Vessel Input
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3>
            <v-card dark tile flat color="blue">
              <v-card-text>
                Granularity
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3>
            <v-card dark tile flat color="green">
              <v-card-text>
                timeFrom
              </v-card-text>
            </v-card>
            <v-flex md3>
              <v-card dark tile flat color="yellow">
                <v-card-text>
                  timeTo
                </v-card-text>
              </v-card>
            </v-flex>
          </v-flex>
          <v-flex md12>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="logVariables"
                item-key="name"
                select-all
                class="elevation-1"
            >
              <template v-slot:items="props">
                <td>
                  <v-checkbox
                      v-model="props.selected"
                      primary
                      hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.logDataMinDate }}</td>
                <td class="text-xs-right">{{ props.item.logDataMaxDate }}</td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
    export default {
        mounted() {
            this.getLogVariables(110);
        },
        methods: {
            getVessels() {
                let fetchUrl = `${this.fetchUrl}vessels`
                fetch(fetchUrl, this.fetchHeader)
                    .then(res => res.json())
                    .then(vessels => {
                        this.vessels = vessels;
                        console.log(this.vessels);
                    })
            },
            getLogVariables(vesselId) {
                let fetchUrl = `${this.fetchUrl}logvariables/find?vesselId=${vesselId}`;
                fetch(fetchUrl, this.fetchHeader)
                    .then(res => res.json())
                    .then(logVariables => {
                        this.logVariables = logVariables;
                        console.log(this.logVariables);
                    })
            },
            getLogDataCsv(logVariableId, isBatch) {
                if (!!isBatch) {
                    // TODO fix url with loop
                    let fetchUrl = `${this.fetchUrl}logdata/BatchFind?logVariableIds=${logVariableId1},${logVariableId2}&granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`
                    //Do batch call
                } else {

                }
            }
        },
        computed: {
            fetchUrl() {
                return this.$store.state.url;
            },
            fetchHeader() {
                return this.$store.state.header;
            }
        },
        data() {
            return {
                selected: [],
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        value: 'id'
                    },
                    {text: 'Variable Name', value: 'name', align: 'right'},
                    {text: 'logDataMinDate', value: 'logDataMinDate', align: 'right'},
                    {text: 'logDataMaxDate', value: 'logDataMaxDate', align: 'right'},
                ],
                vessels:{},
                logData:{},
                logVariables:[{
                    id: 1,
                    name: "test",
                    logDataMinDate: 1,
                    logDataMaxDate: 2
                },
                    {
                        id: 2,
                        name: "tost",
                        logDataMinDate: 1,
                        logDataMaxDate: 3
                    }
                ]
            }
        }
    }
</script>
