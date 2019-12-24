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

  useEffect(() => {
    getCounter()
  }, [])
  
  return (
    <>
      <button onClick={handleAddCounter}>Add Counter</button>
      <hr />
      <pre>
        {JSON.stringify({ state: counters }, null, 2)}
      </pre>
    </>
  )
}

