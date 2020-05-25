import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function ReactSpring() {

  const [toggle, setToggle] = useState(true)
  const numberSpring = useSpring({ number: 10, from: { number: 1 } })
  const fade = useSpring({
    // from: {
    //   opacity: 0
    // },
    // to: {
    //   opacity: 1
    // }
    opacity: toggle ? 1 : 0
  })

  return (
    <div>
      <animated.div style={numberSpring}>
        {numberSpring.number}
      </animated.div>
      <button onClick={() => setToggle(!toggle)}>Opacity {data}</button>

    </div>
  )
}
