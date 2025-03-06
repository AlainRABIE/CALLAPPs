import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOtG1_tkj8QxwcUmKi6twRfz0lhIa3euo",
  authDomain: "callapp-e73e5.firebaseapp.com",
  projectId: "callapp-e73e5",
  storageBucket: "callapp-e73e5.appspot.com",
  messagingSenderId: "76884156975",
  appId: "1:76884156975:web:7b322a890d1c935cf49cda",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Si déjà initialisé
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
