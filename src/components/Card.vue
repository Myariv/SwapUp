<template>
  <div class="NewCard">

    <q-card class="my-card" flat bordered>
      <q-img :src="card.url" :ratio="4/3"/>

      <q-card-section>
        <div class="q-mt-sm absolute-right" style="letter-spacing: 1px"> {{ card.date }}</div>
        <div class="text-h7 q-mt-sm q-mb-xs text-indigo">{{ card.category }}</div>
        <div class="text-overline text-orange-9">{{ card.brand }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ card.name }}</div>
      </q-card-section>

      <q-card-actions>

        <q-btn v-if="!indicator" flat color="secondary" label="Update" @click="sendTo()"/>
        <q-btn v-if="!indicator" flat color="red" label="Delete" @click="remove()"/>

        <div class="flex row justify-start" style="width: 100%">
          <q-btn v-if="indicator" flat icon="favorite" size="md" color="red" @click="likeIt"/>
        </div>

        <q-space/>

        <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator/>
          <q-card-section class="text-subtitle1">
            {{ card.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
  name: "NewCard",
  props: ['card', 'indicator'],
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    ...mapMutations('items', ['setEditedItem', 'setEditedItemId', 'resetEditedItem', 'resetEditedItemId']),
    ...mapActions('items', ['deleteItem']),
    ...mapActions('users', ['getUsersProducts']),

    destroy() {
      this.resetEditedItem()
      this.resetEditedItemId()
    },

    remove() {
      this.setEditedItemId(this.card.id)
      this.deleteItem()
      // this.getUsersProducts()
    },


    sendTo() {
      this.setEditedItem(this.card)
      this.setEditedItemId(this.card.id)
      this.$router.push(`/cardsEdit/${this.card.id}`)
    },

    likeIt() {
      alert('Like It')
    }
  },

  computed: {
    ...mapState('items', ['editedItem', 'editedItemId', 'items']),
    ...mapState('users', ['user'])
  },

}


</script>

<style lang="sass" scoped>
.my-card
  width: 250px


</style>


