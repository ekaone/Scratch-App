import React from 'react'
import Store from 'store'

Store.set('user', { name:'Danny' })

const getUser = () => {
  return Store.get('user')
} 

function Stored() {
  return (
    <>
      {getUser().name}
    </>
  )
}

export default Stored
