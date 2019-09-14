<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <Datatable :table=table :quartiles=quartiles></Datatable>
  </div>
</template>

<script>
import * as d3 from 'd3'
import Datatable from '@/components/Datatable.vue'
export default {
  name: 'Main',
  data () {
    return {
      title: 'Sales Analytics',
      table: this.loadCSV('../../static/data/analytics.csv')
    }
  },
  components: {
    Datatable
  },
  methods: {
    loadCSV (filepath) {
      let output = []
      d3.csv(filepath).then(function (data) {
        data.forEach(function (row) {
          output.push(row)
        })
      })
      return output
    }
  },
  computed: {
    quartiles () {
      /* Dictionary containing the quartiles for each numerical quantity
      available in the table. */
      const columns = ['number_orders', 'ca', 'home_to_sale', 'sale_to_item',
        'item_to_cart', 'abandoned_cart', 'avg_order']
      let q = {}
      for (let i = 0; i < columns.length; i++) {
        let arr = []
        let c = columns[i]
        this.table.map((row) => {
          arr.push(parseFloat(row[c]))
        })
        let quantile = require('compute-quantile')
        q[c] = { 'q1': quantile(arr, 0.25), 'q3': quantile(arr, 0.75) }
      }
      return q
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
