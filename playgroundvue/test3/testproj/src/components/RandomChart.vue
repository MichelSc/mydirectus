<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['un','deux', 'trois', 'quatre', 'cinq'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              stepped: true,
              tension: 0,
              data: [1,2,40,4,5]
            }, {
              label: 'Data Two',
              backgroundColor: '#787979',
              data: [10,20,0,0,0]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>