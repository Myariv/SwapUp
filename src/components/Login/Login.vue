<template>
  <div class="login-container absolute-center flex column">

    <div class="social-inputs flex column q-mb-xl">
      <q-btn outline color="blue-5" label="Twitter" />
      <q-btn outline color="blue-10" label="facebook" />
      <q-btn @click="loginGoogle" outline color="red-5" label="google" />
    </div>

    <q-separator class="q-mb-xl"/>

    <div class="inputs-section q-mb-md">
      <q-input outlined color="green-9" class="q-mb-md " type="email" v-model="email" label="Email"/>
      <q-input outlined color="green-9" type="password" label="password" v-model="password"/>
    </div>

    <div class="login-section self-center">
      <q-btn  @click="singUp" color="green-10" flat class="login-btn q-mr-lg">Sing-up</q-btn>
      <q-btn  @click="login" color="green-10" flat class="login-btn q-mr-lg">Log-in</q-btn>
    </div>


  </div>
</template>

<script>
import firebaseInstance from '../../middleWare/firebase'

export default {
  name: "Login",


  data() {
    return {
      password: '',
      email: ''
    }
  },

  methods: {
    loginGoogle() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();

      firebaseInstance.firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            window.user = result.user

            this.$router.push('/FeedPage')

          }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
    },
    login() {
      firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push('/FeedPage')
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    },
    singUp() {
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push('/FeedPage')

            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
    },

  }
}


</script>

<style scoped>
.login-container {
  width: 400px;
}


.social-inputs {
  gap: 8px;
}

.inputs-section {

}


.login-btn {
  width: 120px;
}

</style>