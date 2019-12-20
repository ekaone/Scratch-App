import React, { useState, useEffect } from 'react'
import { db } from './FirebaseConfig'


export default function FirebaseConnect() {  

  const [counters, setCounters] = useState(0)
  const [dates, setDates] = useState(null)
  const [collections, setcollections] = useState(null)

  const handleAddDate = () => {
    db.collection("mydates").doc("dates").set({
      mydatevalue: dates,
    })
    .then(function() {
        console.log("Date successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  const handleAddCounter = () => {
    db.collection("mycounter").doc("counter").set({
      mycounter: counters,
    })
    .then(function() {
        console.log("Date successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  const getCollections = () => {
    db.collection("mycounter")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      // console.log(data); // array of cities objects
      setcollections(data)
    });
  }

  getCollections()

  return (
    <>
      Firebase
      <br />
      <button onClick={() => handleAddCounter(setCounters(ps => ps + 1))}>Counter</button>
      <br />
      <button onClick={() => handleAddDate(setDates(new Date()))}>Date</button>
      <br />
      <pre>{ JSON.stringify(collections, null, 2) }</pre>
    </>
  )
}
