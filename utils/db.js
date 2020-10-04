const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "AIzaSyA8EWE2uOmpPfXMu4F3gBfLX_CTuNRkKmo",
	authDomain: "testing-only-462d2.firebaseapp.com",
	databaseURL: "https://testing-only-462d2.firebaseio.com",
	projectId: "testing-only-462d2",
	storageBucket: "testing-only-462d2.appspot.com",
	messagingSenderId: "894665263426",
	appId: "1:894665263426:web:4b0f893b07244d796fe0db",
	measurementId: "G-G500Q5H5L9"
};

const firestore = firebase.initializeApp(firebaseConfig);

module.exports = firestore;