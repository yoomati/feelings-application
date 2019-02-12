import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var config = {
    apiKey: "AIzaSyC-fydfSapw1Xx-8lViL1VSGsKr-UwT0Kk",
    authDomain: "shareit-cf39d.firebaseapp.com",
    databaseURL: "https://shareit-cf39d.firebaseio.com",
    projectId: "shareit-cf39d",
    storageBucket: "shareit-cf39d.appspot.com",
    messagingSenderId: "711204905529"
};
firebase.initializeApp(config);

export default firebase;