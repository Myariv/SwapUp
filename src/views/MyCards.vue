<template>
  <q-page class="q-pa-md">
    <div class="CardsPage">
      <div class="container-cards">
        <h6>{{user.products}}</h6>
        <Card  v-for="card in products" :key="card.id" :card="card" />
      </div>
    </div>
  </q-page>
</template>


<script>
import {mapState, mapActions, mapMutations} from 'vuex'

import Card from "../components/Card";

export default {
  name: "CardsPage",
  components: {Card},
  data() {
    return {
    }
  },

  methods: {
    ...mapActions(`items`, ['getItems']),
    ...mapActions('users', ['getUsersProducts']),
    ...mapMutations('users', ['setUserId'])


  },

  computed: {
    ...mapState('items', ['editedItem', 'items']),
    ...mapState('users', ['user', 'userId', 'users']),

    products() {
      return this.user.products
    }
  },

  created() {
    this.setUserId(window.user.uid)
    this.getUsersProducts()
  },
}
</script>

<style>
.container-cards {
  display: flex;
  gap: 25px;
}

</style>