const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyC6fOWxv5Y0jt9WwikWuR19NIit3slKb-g",
    authDomain: "aidzeecord.firebaseapp.com",
    databaseURL: "https://aidzeecord.firebaseio.com",
    projectId: "aidzeecord",
    storageBucket: "aidzeecord.appspot.com",
    messagingSenderId: "131751851549",
    appId: "1:131751851549:web:54acf9b254ca14c57678f4"
};

const firestore = firebase.initializeApp(firebaseConfig);

module.exports = firestore;
