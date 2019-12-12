import React from 'react'
import AddToHomescreen from 'react-add-to-homescreen';

function Homescreen() {

  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  return (
    <>
      <AddToHomescreen
        title={'Click'} 
        onAddToHomescreenClick={handleAddToHomescreenClick} 
      />
    </>
  )
}

export default Homescreen
