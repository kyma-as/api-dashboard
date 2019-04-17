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
