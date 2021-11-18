<template>

  <div class="q-pa-md">

    <div class="q-gutter-md" style="max-width: 300px">
      <q-select outlined v-model="localCard.category" :options="optionsCategory" label="Category"/>
      <q-select outlined v-model="localCard.brand" :options="optionsBrand" label="Brand"/>
      <q-input clearable outlined v-model="localCard.name" label="Product name"/>
      <q-select outlined v-model="localCard.condition" :options="optionsCondition" label="Condition"/>
      <q-input clearable type="textarea" outlined v-model="localCard.description" label="Description"/>
      <q-file color="green" outlined label-color="black" v-model="localCard.img" label="Choose Img">
        <template v-slot:append>
          <q-icon name="attachment" color="green-3"/>
        </template>
      </q-file>
    </div>


    <div class="q-pa-sm q-gutter-sm">
      <q-btn v-if="!editedItem.id" outline color="black" label="AddCard" @click="insert"/>
      <q-btn v-if="editedItem.id" outline color="black" label="Update Card" @click="update"/>
    </div>
  </div>

</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "AddCard",
  data() {
    return {
      localCard: {
        category: '',
        brand: '',
        name: '',
        condition: '',
        description: '',
        img: [],
        date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
      },
      model: null,
      optionsCategory: ['Electronics', 'Sports', 'Bikes', 'Home&Garden'],
      optionsBrand: ['Apple', 'Samsung', 'Xiaomi', 'RealMe'],
      optionsCondition: ['New', 'In-Box', 'Used', 'Broken'],
    }
  },

  methods: {
    ...mapActions('items', ['insertItem', 'updateItem']),
    ...mapMutations('items', ['setEditedItem', 'resetEditedItemId', 'resetEditedItem']),
    ...mapActions('users', ['insertUser']),
    ...mapMutations('users', ['setUserId']),

    insert() {
      // this.setUserId(window.user.uid)
      this.setEditedItem(this.localCard)
      this.insertItem().then(() => {
        this.$router.push('/MyCards')
      })
    },

    update() {
      this.setEditedItem(this.localCard)
      this.updateItem()
      this.$router.push('/MyCards')
    },

    destroy() {
      this.resetEditedItem()
      this.resetEditedItemId()
    },
  },

  computed: {
    ...mapState('items', ['editedItem', 'editedItemId','items']),
    ...mapState('users', ['user'])
  },

  created() {
    if (this.editedItemId) {
      Object.assign(this.localCard, this.editedItem)
    }
  },

  destroyed() {
    this.destroy()

  }


}
</script>

<style scoped>

</style>


//// ------------------------------------------------ ////
// insertCard() {
// firebaseData.generateId({entity: this.cardTable}).then(itemId => {
//   firebaseData.uploadImg({item: this.card, id: itemId}).then(item => {
//     firebaseData.setGenerateId({entity: this.cardTable, item: item, id: itemId})
//     firebaseData.update({entity: 'users', id: window.user.uid, item: {[itemId]: itemId}})
//     this.$router.push('/MyCards')
// })
// })
// },


// updateCard() {
//   firebaseData.update({entity: this.cardTable, id: this.card.id, item: this.card})
//   this.$router.push('/MyCards')
// }
