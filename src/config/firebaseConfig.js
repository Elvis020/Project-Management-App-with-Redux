import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




//  Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyCEG98BkmbF6Oy8Y977e7uVlXQrQL5A-60",
    authDomain: "project-management-9f581.firebaseapp.com",
    databaseURL: "https://project-management-9f581.firebaseio.com",
    projectId: "project-management-9f581",
    storageBucket: "project-management-9f581.appspot.com",
    messagingSenderId: "1003212127957",
    appId: "1:1003212127957:web:137ecf0d079a1280f0ec5c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// New feature setting required to be done in firebase
firebase.firestore().settings({ timestampsInSnapshots: true})


export default firebase;