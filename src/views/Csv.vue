<template>
  <div>
    <div class="ma-5">
      <v-container>
        <v-layout row wrap>
          <v-flex md6>
            <v-card dark tile flat color="error">

            </v-card>
          </v-flex>
          <v-flex md6>
            <v-card dark tile flat color="blue">
              <v-card-text>
                #2
              </v-card-text>
            </v-card>
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

        },
        methods: {
            getVessels() {

            },
            getLogVariables() {

            },
            getLogData() {

            }
        },
        computed: {
            vessels() {

            },

            logData() {

            },
            logVariables() {
                return [{
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
        },
        data() {
            return {
                url:"https://demo.kyma.no/api/v1/",
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
                ]
            }
        }
    }
</script>
