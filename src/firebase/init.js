import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/analytics' 

// import 'firebase/auth';        // for authentication
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
// import 'firebase/firestore';   // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: // HIDDEN SECRETS
  authDomain: // HIDDEN SECRETS
  databaseURL: // HIDDEN SECRETS
  projectId: // HIDDEN SECRETS
  storageBucket: // HIDDEN SECRETS
  messagingSenderId: // HIDDEN SECRETS
  appId: // HIDDEN SECRETS
  measurementId:  // HIDDEN SECRETS
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

// export firestore database
export default firebaseApp.firestore();
