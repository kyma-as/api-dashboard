<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <nav-drawer/>
    <div>
      <v-content>
        <v-layout row wrap>
          <v-flex md3>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select class=""
                          v-model="selectedVessels"
                          :items="vessels"
                          label="Select Vessel"
                          single-line
                          @input="getLogVariables(selectedVessels)"
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex md3>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select class=""
                          v-model="selectedGranularity"
                          :items="granularity"
                          label="Select Granularity"
                          single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex md3>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select class=""
                          :items="granularity"
                          label="Select Date"
                          single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex md3>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-btn class="primary primary darken-3" flat large
                @click="getLogDataCsv(selected,granularity,selectedFromDate,selectedToDate)">
                  Print Csv File
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex md12 class="">
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="logVariables"
                item-key="name"
                select-all
                class="elevation-1"
                :loading="isLoading"
            >
              <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
              <template v-slot:items="props">
                <td>
                  <v-checkbox
                      v-model="props.selected"
                      primary
                      hide-details
                      mandatory
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
      </v-content>
    </div>
  </div>
</template>
<script>
    import NavDrawer from "@/components/NavDrawer";

    const {ipcRenderer} = require('electron');
    export default {
        components: {
            NavDrawer
        },
        mounted() {
            this.loading = true;
            this.getVessels();
            // TODO used for testing
            //this.getLogDataCsv([9049], "Day", "2016-08-01", "2016-09-13");
        },
        /**
         * The methods in here does everything by
         * fetching the data from the KymaAPI so
         * to a try to be dynamic for use by more
         * than just the demo environment
         * * URL path may have to be altered
         */
        methods: {
            /** Sending CSV blob data to main thread
             *  for it to be printed to file
             * @param csv
             */
            sendCsvEventToMain(csv) {
                console.log("Sending event to MainThread");
                ipcRenderer.send("write-csv", csv);
            },

            /** To get the vessels needed for the
             *  dropdown list
             */
            getVessels() {
                let fetchUrl = `${this.fetchUrl}vessels`;
                fetch(fetchUrl, this.fetchHeader)
                    .then(res => res.json())
                    .then(vessels => {

                        for (let entry of vessels) {
                            this.vessels.push(entry.id);
                        }
                        this.loading = false;
                    })
            },

            /** Uses the vessel specified in the
             *  dropdown list to show logVariables
             *  that exists on this vessel
             * @param vesselId
             */
            getLogVariables(vesselId) {
                console.log("test");
                let fetchUrl = `${this.fetchUrl}logvariables/find?vesselId=${vesselId}`;
                this.loading = true;
                fetch(fetchUrl, this.fetchHeader)
                    .then(res => res.json())
                    .then(logVariables => {
                        this.logVariables = logVariables;
                        this.loading = false;
                    })
            },

            /** Fetches data for 10 variables per fetch.
             *  Data is returned as a blob, and all blobs are concatenated
             *  into one blob and sent as payload to 'sendCsvEventToMain'
             * @param logVariableIds list of variable ids
             * @param granularity Day,Hour,QuarterHour,Minute,Raw(15sec)
             * @param fromDate YYYY-MM-DD
             * @param toDate YYYY-MM-DD
             */
            getLogDataCsv(logVariableIds, granularity, fromDate, toDate) {
                this.loading = true;

                let fetchUrl = this.fetchUrl + "logdata/BatchFind?logVariableIds="
                    + logVariableIds[0].id + "&granularity=" + granularity[0] + "&fromDate="
                    + fromDate[0] + "&toDate=" + toDate[0] + "&format=csv";
                fetch(fetchUrl, this.fetchHeader)
                    .then(res => res.blob())
                    .then(blobOutput => {
                        console.log("Fetch complete");
                        let myReader = new FileReader();

                        myReader.onload = function (event) {
                            console.log("test");
                            ipcRenderer.send("write-csv", JSON.stringify(myReader.result));
                        };
                        myReader.readAsText(blobOutput);
                        this.loading = false;
                    })
            }
        },
        computed: {
            fetchUrl() {
                /** For dynamic use may have to allow
                 *  being altered.
                 */
                return this.$store.state.url;
            },
            fetchHeader() {
                return this.$store.state.header;
            },
            isLoading(){
                return this.loading
            }
        },
        data() {
            return {
                loading:false,
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
                vessels: [],
                selectedVessels: [],
                selectedGranularity:[],
                selectedFromDate:["2019-05-01"],
                selectedToDate:["2019-05-10"],
                granularity: ['Day', 'Hour', 'QuarterHour', 'Minute', 'Raw'],
                logData: {},
                logVariables: [{}]
            }
        }
    }
</script>
