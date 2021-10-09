<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="onButtonClick()">Randomize</button>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      myarray: [1,2,3,4,5]
    };
  },
  mounted() {
    this.fillData();
    this.counter=0;
        console.log(`fillData ${this.counter}`)
  },
  methods: {
    fillData() {
        console.log(`mounted ${this.counter}`)
    this.datacollection = {
        labels: ["un", "deux", "trois", "quatre", "cinq"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            stepped: true,
            tension: 0,
            data: [-1, -2, -4, 4, 5],
          },
          {
            label: "Data Two",
            backgroundColor: "#787979",
            data: this.myarray,
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    onButtonClick() {
//        console.log(`onButtonClicked ${this.datacollection.datasets[1].data[1]}`)
//        console.log(`${JSON.stringify(this.datacollection)}`)
        this.counter++;
        console.log(`onButtonClicked ${this.counter}`)
        // this.datacollection.datasets[0].data[2]=this.counter; 
        this.$set(this.myarray, 2, this.counter);
        let datasets = this.datacollection.datasets;
        console.log(`onButtonClicked datasets ${datasets.length}`);
        // for ( let dataset of datasets){
        //     console.log(`onButtonClicked ..datasets ${dataset.label}`);
        //     for ( let cell of dataset.data){
        //         console.log(`onButtonClicked ....value ${cell}`);
        //     }
        // }
        // for ( let attr in this){
        //     console.log(`..attr ${attr} ${typeof this[attr]}`);
        // }
        // this.$forceUpdate();
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>