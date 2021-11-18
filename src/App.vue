<template>
  <q-layout view="lHh Lpr lFf">

    <q-header>

      <q-toolbar class="bg-cyan-9">
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />

        <q-toolbar-title>
          SwapUp
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        bordered
        content-class="bg-grey-2"
    >
      <q-list class="flex column">
        <q-item-label header >Manage Your Profile</q-item-label>

        <q-item clickable tag="a" href="http://localhost:8080/#/FeedPage">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable tag="a" href="http://localhost:8080/#/MyCards">
          <q-item-section avatar>
            <q-icon name="view_carousel"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>MyCards</q-item-label>
          </q-item-section>
        </q-item>



        <q-item clickable tag="a" href="http://localhost:8080/#/NewCard">
          <q-item-section avatar>
            <q-icon name="add"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>New Card</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="singOut">
          <q-item-section avatar>
            <q-icon name="logout"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Log-Out</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import firebaseInstance from './middleWare/firebase'
export default {
  name: 'LayoutDefault',

  components: {},

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      links: [
          {icon: 'view_carousel', href: 'http://localhost:8080/#/cardsPage', label: 'MyCards', id:1},
          {icon: 'add', href: 'http://localhost:8080/#/NewCard', label: 'New Card', id:2},
      ],
      isLogin: false
    }
  },

  methods: {
    singOut() {
        firebaseInstance.firebase.auth().signOut().then(() => {
          this.$router.push('/')

          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      },
  },

  created() {

  }
}
</script>

<style>

</style>
