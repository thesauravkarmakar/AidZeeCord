## Setup Firebase Database
- Signup/Login to [Firebase Console](https://console.firebase.google.com/) and create a project.
- Navigate to the Cloud Firestore section. You'll be prompted to select an existing Firebase project. Follow the database creation workflow.
- Navigate to *Project Settings*, then register new web app to get firebase sdk config like this
```js
const firebaseConfig = {
  apiKey: "abcdefghijklmnopqrstuvwxyz",
  authDomain: "example.firebaseapp.com",
  databaseURL: "https://example.firebaseio.com",
  projectId: "example-462d2",
  storageBucket: "example-462d2.appspot.com",
  messagingSenderId: "1234567890",
  appId: "0:1234567890:web:1234567890abcde",
  measurementId: "G-G500Q5H5L9"
};
```
- Then in file `db.js` change the credential on your own