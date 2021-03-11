import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
