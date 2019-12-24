import React, { useState, useEffect } from 'react'
import { db } from './FirebaseConfig'

export default function FirebaseConnect() {  

  const [counters, setCounters] = useState()

  const handleAddCounter = () => {
    let c = counters + 1
    let newData = {
      date: new Date(),
      value: c,
    }
    db.collection("mycounter").doc("counter").set(newData)
    .then(function() {
        console.log("Counter successfully written!");
        setCounters(c)
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }


  const getCounter = () => {
    db.collection('mycounter')
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      let counter = parseInt(data.map(d => d.value))
      setCounters(counter)
    })
    .catch(function(error) {
      console.error("Error get collection: ", error);
    });
  }

  const handleCreateUser = () => {
    let newData = {
      name: "Herby",
      password: "herby",
      username: "herby",
      level: "admin"
    }
    db.collection("ellipsemobile").doc("102").set(newData)
    .then(function() {
        console.log("Add user successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  const handleGetDocuments = () => {
    db.collection("ellipsemobile")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return { id: doc.id, data: doc.data() }
      });
      console.log(data)
    })
    .catch(function(error) {
      console.error("Error get collection: ", error);
    });
  }

  useEffect(() => {
    getCounter()
  }, [])
  
  return (
    <>
      <button onClick={handleAddCounter}>Add Counter</button>
      <hr />
      <button onClick={handleCreateUser}>Add User</button>
      <hr />
      <button onClick={handleGetDocuments}>Get Documents</button>
      <hr />
      <pre>
        { counters === undefined ? 'Loading..' : JSON.stringify(counters, null, 2)}
      </pre>
    </>
  )
}

