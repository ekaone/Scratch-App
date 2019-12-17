import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:5000');

export default function SocketView() {
  const [data, setData] = useState(null)

  useEffect(() => {
    socket.on("ThemeData", (dataTheming) => {
      setData(dataTheming)
    })
  }, [])

  return (
    <>
      <pre>
        {JSON.stringify(data)}
      </pre>
    </>
  )
}
