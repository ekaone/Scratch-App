import React, { useState } from 'react'
import Webcam from "react-webcam";
import base64Img from 'base64-img';
import base64ToImage from 'base64-to-image';

export default function Camera() {

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);
  
  const capture = React.useCallback(
      () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc)
      const filepath = "E:/scratch/a/test.jpeg"
      base64Img.img(imageSrc, "E:/scratch/a/", '1', function(err, filepath) {
        if(err) {
          console.log(err)
        }
        console.log(filepath)
      });
      
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  )
}
