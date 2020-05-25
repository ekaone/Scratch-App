import React from 'react'
import Speech from 'react-speech'

export default function Voice() {

  const textstyle = {
    play: {
      hover: {
        backgroundColor: 'black',
        color:'white'
      },
      button: {
        padding:'4',
        fontFamily: 'Helvetica',
        fontSize: '1.0em',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none',
      },
    }
  }

  return (
    <>
      <Speech
        // styles={textstyle} 
        textAsButton={true}    
        displayText="Hello" 
        text="I have text displayed as a button" />
    </>
  )
}
