# api-dashboard
Requires **Yarn**

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run electron:serve
```

### Compiles and minifies for production
```
yarn run electron:build
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Application Overview

### Application Login

##### Takes an email and a password and converts it into a 64bit api key and authenticates with the Kyma server
<img width="1440" alt="Screenshot 2019-07-03 at 13 22 01" src="https://user-images.githubusercontent.com/21195947/60588292-da061e00-9d96-11e9-9c58-a4a4ed638cef.png">

### Main Vessels Dashboard

##### Showing graphs over a specified timeframe
<img width="1439" alt="Screenshot 2019-07-03 at 13 33 42" src="https://user-images.githubusercontent.com/21195947/60588487-5c8edd80-9d97-11e9-9e50-a084fea3dc17.png">

### Single Vessel Data View

##### A line-graph showing the speed of a ship over a month

<img width="1440" alt="Screenshot 2019-07-03 at 13 25 24" src="https://user-images.githubusercontent.com/21195947/60588186-8bf11a80-9d96-11e9-8d28-2645036de485.png">


##### Graph selection with dropdown button

<img width="228" alt="Screenshot 2019-07-03 at 13 34 23" src="https://user-images.githubusercontent.com/21195947/60588503-6c0e2680-9d97-11e9-9fbc-59c41fe69ae9.png">

### Fuel Report View

##### Fuel report showing the specific engines' fuel usage over a year displayed monthly

<img width="1437" alt="Screenshot 2019-07-03 at 13 18 22" src="https://user-images.githubusercontent.com/21195947/60588802-3584db80-9d98-11e9-93e4-39faf20fef7a.png">

### CSV File Printout View
##### Printing CSV files with the selected variables and granularity over the specified timeframe

<img width="1440" alt="Screenshot 2019-07-03 at 13 23 27" src="https://user-images.githubusercontent.com/21195947/60588194-90b5ce80-9d96-11e9-836e-325142beeddc.png">

## API Bulletpoints

### Vessels
_Lists all **vessels** and their basic information:_ `/vessels`
- id of vessel
- name of vessel
- logData min/max date
- trendData min/Max date
- lastExportDate

### Log Variables
_Finds log **variables** active on a vessel:_ `/logvariables/find?vesselId={vesselId}`

- id of variable
- name of variable
- min/max limit
- display precision
- units

### Log Data
_Finds log **data** for the specific variable:_`/logdata/find?logVariableId={logVariableId}&granularity={granularity}&fromDate={fromDate}&toDate={toDate}`

- Granularity: Frequency of data points(Raw, Minute, QuarterHour, Hour, Day)
- fromDate/toDate: yyyy-mm-dd
