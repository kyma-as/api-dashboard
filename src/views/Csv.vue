<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <nav-drawer/>
    <div>
      <v-content>
        <v-layout row wrap>
          <v-flex sm6 md6 lg6>
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
          <v-flex sm6 md6 lg6>
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
          <v-flex sm6 md6 lg6>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large pa-0">
                <v-layout>
                  <FromDate/>
                  <ToDate/>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 md6 lg6>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-btn class="primary primary darken-3" flat large
                       @click="getLogDataCsv(selected,selectedGranularity,fDate,tDate)">
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
        <v-snackbar v-model="snackbar"
                    :color="snackbarColor"
                    :bottom="true"
                    :timeout="5000">
          {{snackbarText}}
        </v-snackbar>
      </v-content>
    </div>
  </div>
</template>
<script>
    import NavDrawer from "@/components/NavDrawer";
    import FromDate from "@/components/FromDate";
    import ToDate from "@/components/ToDate";
    const {ipcRenderer} = require('electron');


    export default {
        components: {
            NavDrawer,
            FromDate,
            ToDate
        },
        created() {
            /**
             * Handles event callback after writing csv file
             */
            let _this = this;
            ipcRenderer.on("write-csv-callback", (event, arg) => {
                // Handle error
                if (!!arg.error) {
                    _this.snackBarError("Error writing to file.")
                } else {
                    _this.snackBarSuccess(`File created: ${arg.filePath}`);
                }
            });
        },
        beforeDestroy() {
            /**
             * Remove listeners so that we don't stack them up.
             */
            ipcRenderer.removeAllListeners("write-csv-callback");
        },
        mounted() {
            this.loading = true;
            this.getVessels();
        },
        /**
         * The methods in here does everything by
         * fetching the data from the KymaAPI so
         * to a try to be dynamic for use by more
         * than just the demo environment
         * * URL path may have to be altered
         */
        methods: {
            /**
             * Changes snackbar to output error message
             */
            snackBarError(errorMsg) {
                this.snackbar = true;
                this.snackbarText = errorMsg;
                this.snackbarColor = "error";
            },

            /**
             * Changes snackbar to output success message
             */
            snackBarSuccess(successMsg) {
                this.snackbar = true;
                this.snackbarText = successMsg;
                this.snackbarColor = "success";
            },

            /**
             * Handling errors in fetch() http-request
             * @param response
             * @return {{ok}|*}
             */
            handleErrors(response) {
                if (!response.ok) {
                    this.snackBarError(`Fetch error: ${response.status} ${response.statusText}`);
                    throw Error(response.statusText);
                }
                return response;
            },

            /** To get the vessels needed for the
             *  dropdown list
             *  Vessels are retrieved from state
             */
            getVessels() {
                let fetchUrl = `${this.fetchUrl}vessels`;

                let vessels = this.$store.state.vessels;
                for(let vessel of vessels){
                    this.vessels.push(vessel.id);
                }
                this.loading = false;
            },

            /** Uses the vessel specified in the
             *  dropdown list to show logVariables
             *  that exists on this vessel
             * @param vesselId
             */
            getLogVariables(vesselId) {
                let fetchUrl = `${this.fetchUrl}logvariables/find?vesselId=${vesselId}`;
                this.loading = true;
                fetch(fetchUrl, this.fetchHeader)
                    .then(this.handleErrors)
                    .then(res => res.json())
                    .then(logVariables => {
                        this.logVariables = logVariables;
                        this.loading = false;
                    })
            },

            /** Fetches data for 10 variables per fetch.
             *  Data is returned as a blob, and all blobs are concatenated
             *  into one blob and sent as payload to 'sendCsvEventToMain'
             * @param logVariables list of variable ids
             * @param granularity Day,Hour,QuarterHour,Minute,Raw(15sec)
             * @param fromDate YYYY-MM-DD
             * @param toDate YYYY-MM-DD
             */
            getLogDataCsv(logVariables, granularity, fromDate, toDate) {
                const maxVariables = 10;
                this.loading = true;
                let ids = "";

                if(logVariables.length<1){
                    this.snackBarError("Missing log variables");
                    this.loading = false;
                }else if(granularity.length<1){
                    this.snackBarError("Missing granularity");
                    this.loading = false;
                }else{
                    for (let i = 0; i < logVariables.length && i < maxVariables; i++) {
                        ids += logVariables[i].id;
                        ids += ',';
                    }
                    ids = ids.substring(0, ids.length - 1);
                    console.log(ids);
                    // Creating filename from logVars
                    let fileName = `v${this.selectedVessels}_${granularity}_${fromDate}_${toDate}`;
                    // Fetching data and sending event to create file
                    let fetchUrl = this.fetchUrl + "logdata/BatchFind?logVariableIds="
                        + ids + "&granularity=" + granularity + "&fromDate="
                        + fromDate + "&toDate=" + toDate + "&format=csv";
                    fetch(fetchUrl, this.fetchHeader)
                        .then(this.handleErrors)
                        .then(res => res.blob())
                        .then(blobOutput => {
                            let myReader = new FileReader();
                            let _this = this;
                            myReader.onload = function (event) {
                                console.log("filename = " + fileName);
                                let formatedFileName = fileName.replace(/[/\\?%*:|"<>]/g, '_');
                                console.log("formatedFilename = " + formatedFileName);
                                ipcRenderer.send("write-csv", {
                                    file: JSON.stringify(myReader.result),
                                    fileName: formatedFileName
                                });
                            };
                            myReader.readAsText(blobOutput);
                            this.loading = false;
                        });
                }


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
            isLoading() {
                return this.loading
            },
            fDate: function () {
                return this.$store.state.fromDate;
            },
            tDate: function () {
                return this.$store.state.toDate;
            }
        },
        data() {
            return {
                //Snackbar
                snackbar: false,
                snackbarText: "",
                snackbarColor: "",
                // Outputs
                vessels: [],
                granularity: ['Day', 'Hour', 'QuarterHour', 'Minute', 'Raw'],
                logData: {},
                logVariables: [{}],
                // Header for dataTable
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
                // Selections
                selected: [],
                selectedVessels: [],
                selectedGranularity: [],
                // Misc
                loading: false,
            }
        }
    }
</script>
