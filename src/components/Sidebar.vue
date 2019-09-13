<template>
  <sidebar-menu :menu="menu" @item-click="onItemClick"/>
</template>

<script>
export default {
  data () {
    return {
      menu: []
    }
  },
  mounted () {
    this.importPages(require.context('../../static/img/', true))
  },
  methods: {
    importPages (r) {
      r.keys().forEach(key => (this.menu.push({ title: key })))
    },
    onItemClick (event, item) {
      console.log(event)
      console.log(item)
    }
  }
}
</script>
