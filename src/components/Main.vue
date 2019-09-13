<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Segment Analytics'
    }
  },
  components: {
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
