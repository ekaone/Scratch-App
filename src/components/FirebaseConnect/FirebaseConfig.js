import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgqIxy6c8k-DXp-32qM6lNSb2XN59cFkM",
  authDomain: "ambient-future-198109.firebaseapp.com",
  databaseURL: "https://ambient-future-198109.firebaseio.com",
  projectId: "ambient-future-198109",
  storageBucket: "ambient-future-198109.appspot.com",
  messagingSenderId: "269591731211",
  appId: "1:269591731211:web:a597fbe0ec3f8451f53b0e",
  measurementId: "G-6ERLFVKCXT"
});

const db = firebaseApp.firestore();

export { db };
