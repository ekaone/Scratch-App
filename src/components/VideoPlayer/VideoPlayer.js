import React from 'react'
import VideoJSPlayer from './VideoJS'
import 'video.js/dist/video-js.css'
// import ReactPlayer from 'react-player'

const URLMjpeg = 'http://127.0.0.1:8100/Mjpeg/0?authToken=9933185a-591f-4ffa-9c1e-3a23f4f5f5e5'
// const URLJpeg = 'http://127.0.0.1:8100/Jpeg/0?authToken=9933185a-591f-4ffa-9c1e-3a23f4f5f5e5'
// const URLYoutube = 'https://www.youtube.com/watch?v=6IYo0uBew1c'
// const URLLive = "http://127.0.0.1:8100/Live/0?authToken=9933185a-591f-4ffa-9c1e-3a23f4f5f5e5"



export default function VideoPlayer() {

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   sources: [{
  //     src: URLMjpeg,
  //     // type: 'video/mp4'
  //     // type: 'video/ogg'
  //     type: 'image/mjpeg'
  //   }]
  // }

  return (
    <>
      {/* <ReactPlayer url={URLYoutube} playing controls /> */}
      <br />
      <img id="mjpeg_0" src={URLMjpeg} width="800" height="450" />
      {/* <video id="video_0" src={URLLive} type="video/ogg" controls="controls" autoPlay="autoplay" width="600" height="400"/> */}
      {/* <VideoJSPlayer  {...videoJsOptions} /> */}
    </>
  )
}
