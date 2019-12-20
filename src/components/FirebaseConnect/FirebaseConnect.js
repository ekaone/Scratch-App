import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAgqIxy6c8k-DXp-32qM6lNSb2XN59cFkM",
    authDomain: "ambient-future-198109.firebaseapp.com",
    databaseURL: "https://ambient-future-198109.firebaseio.com",
    projectId: "ambient-future-198109",
    storageBucket: "ambient-future-198109.appspot.com",
    messagingSenderId: "269591731211",
    appId: "1:269591731211:web:a597fbe0ec3f8451f53b0e",
    measurementId: "G-6ERLFVKCXT"
  }
  firebase.initializeApp(firebaseConfig);
}

firebaseInit()

export default function FirebaseConnect() {  

  const [values, setValues] = useState(0)
  const [datas, setDatas] = useState(null)

  const handleAddData = () => {
    setValues(ps => ps + 1)
  }

  const addFirebase = () => {
    firebase.database().ref('/').set(values);
    console.log('DATA SAVED');
  }

  useEffect(() => {
    let ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      setDatas(state);
    });
  
    console.log('DATA RETRIEVED');
  }, [datas])



  addFirebase()
  console.log(values)
  
  return (
    <>
      Firebase
      <br />
      <button onClick={handleAddData}>Add</button>
      <br />
      <pre>{ JSON.stringify(datas, null, 2) }</pre>
    </>
  )
}
