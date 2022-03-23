import React, { useState } from 'react'

function App() {

  const [ seconds, setSeconds ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)
  const [ hours, setHours ] = useState(0)

  const handleStart = () => {
    setInterval(() => {
      setSeconds(seconds + 1)
      console.log(seconds)
    }, 1000)
  }

  return (
    <div>
      <div>{`${hours}:${minutes}:${seconds}`}</div>
      <div><button onClick={handleStart}>Start</button></div>
      <div><button>Pause</button></div>
      <div><button>Clean</button></div>
    </div>
  )
}

export default App
