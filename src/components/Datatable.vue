<template>
  <div>
    <b-table hover :items="table" :fields="fields" @row-clicked="testfun"></b-table>
    <b-modal ref="sale-details-modal">
      <img :src="currentSaleCover" class="sale-cover"/>
      <span>{{ this.currentSaleBrand }}</span>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Datatable',
  props: {
    table: Array,
    quartiles: Object
  },
  data () {
    return {
      fields: [
        { key: 'name', label: 'Brand', sortable: true },
        { key: 'home_to_sale', label: 'Click Sale', sortable: true, formatter: this.ratioFormatter, tdClass: this.cellStyle },
        { key: 'sale_to_item', label: 'Click Item', sortable: true, formatter: this.ratioFormatter, tdClass: this.cellStyle },
        { key: 'item_to_cart', label: 'Add To Cart', sortable: true, formatter: this.ratioFormatter, tdClass: this.cellStyle },
        { key: 'abandoned_cart', label: 'Abandoned Cart', sortable: true, formatter: this.ratioFormatter, tdClass: this.cellStyle },
        { key: 'avg_order', label: 'Average Order', sortable: true, formatter: this.amountFormatter, tdClass: this.cellStyle },
        { key: 'number_orders', label: 'Number of orders', sortable: true, tdClass: this.cellStyle },
        { key: 'start_date', label: 'Start date', sortable: true },
        { key: 'ca', label: 'CA', sortable: true, formatter: this.amountFormatter, tdClass: this.cellStyle },
        { key: 'sale_id', label: 'Sale ID' }
      ],
      currentSaleId: '',
      currentSaleBrand: '',
      currentSaleCover: ''
    }
  },
  methods: {
    amountFormatter (value, key, item) {
      return parseFloat(value).toFixed(2) + '€'
    },
    ratioFormatter (value, key, item) {
      return parseFloat(value * 100).toFixed(1) + '%'
    },
    cellStyle (value, key, items) {
      const x = parseFloat(value)
      if (key in this.quartiles) {
        if (x > this.quartiles[key]['q3']) {
          return 'good-sale'
        } else if (x < this.quartiles[key]['q1']) {
          return 'bad-sale'
        } else {
          return 'avg-sale'
        }
      }
    },
    testfun (row) {
      this.currentSaleId = row.sale_id
      this.currentSaleBrand = row.name
      this.currentSaleCover = row.cover
      this.$refs['sale-details-modal'].show()
    }
  }
}
</script>

<style>
.good-sale {
  color: green !important;
  font-weight: 700;
}

.bad-sale {
  color: red !important;
  font-weight: 700;
}

.avg-sale {
  color: black !important;
  font-weight: 700;
}

.sale-cover {
  width: 100%;
}
</style>
