<template>
  <q-page class="FeedPage q-pa-md flex">
    <Card v-for="card in this.items" :card="card" :indicator="indicator"/>
  </q-page>
</template>

<script>
import Card from "../components/Card";
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "FeedPage",
  components: {Card},

  data() {
    return {
      indicator: true
    }
  },

  methods: {
    ...mapActions('items', ['getItems']),
  },

  computed: {
    ...mapState('items', ['items'])
  },

  created() {
    this.getItems()
  }
}
</script>

<style scoped>
.FeedPage {
  gap: 24px;
}

</style>