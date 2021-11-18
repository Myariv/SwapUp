<template>
<div>
  <h2>{{name}}</h2>
  <input v-model="newName" @input="getUsers(newName)" placeholder="sendActions"  >
</div>
</template>

<script>
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex'

export default {
  name: "Vuex",

  data() {
    return {
      newName: ''
    }
  },

  methods: {
    ...mapActions('items', ['getUsers'])
  },

  computed: {
    ...mapState('items', ['editedItem']),
    name() {
      return this.editedItem.name
    }

  }
}
</script>

<style scoped>

</style>