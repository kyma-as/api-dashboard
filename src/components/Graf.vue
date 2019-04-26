 <template>
    <div>
   <svg width="1200" height="120000">
            <g v-for="(value, i) in rows"
            :transform="'translate(0, 0)'">
             <rect height="20" v-bind:width=" 1" v-bind:y="i*30+20" fill="green"
             ></rect>
             <text v-bind:y="i*30 + 35" fill="White">{{value}}</text>
            </g>
        </svg>
    </div>
 </template>
 <script>
 //import {getApiDataTest} from "@/scripts/getData"; 
 export default {
      data() {
            return {
                urlParam: "vessels",
                rows: [],
            }
        },
     methods: {
               getApiDataTest: function () {
                console.log("Trying to fetch testdata...");
                getApiDataTest( this.rows)
            },
        }
 }
 </script>
