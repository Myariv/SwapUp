import firebase from "firebase/compat";
import auth from "firebase/compat";


firebase.initializeApp({
        apiKey: "AIzaSyAOe-vgBkRR2ssjI_fNajdh7c2VSCvREmI",
        authDomain: "yarivtestproj.firebaseapp.com",
        databaseURL: 'https://yarivtestproj-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: "yarivtestproj",
        storageBucket: "yarivtestproj.appspot.com",
        messagingSenderId: "343142983153",
        appId: "1:343142983153:web:6db3b9f0f030641bf85050"
})

export default {
        firebase,
}