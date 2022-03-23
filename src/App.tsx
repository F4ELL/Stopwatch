import React, { useEffect, useState } from 'react'

function App() {

  const [ time, setTime ] = useState(0)
  const [ isRun, setIsRun ] = useState(false)

  useEffect(() => {
    let interval = 0

    if(isRun){
      interval = setInterval(() => {
        setTime((current) => current + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRun])

  return (
    <div>
      <span>{('0' + Math.floor((time / 3600) % 60)).slice(-2)} :</span>
      <span>{('0' + Math.floor((time / 60) % 60)).slice(-2)} :</span>
      <span>{('0' + Math.floor(time % 60)).slice(-2)}</span>



      <div><button onClick={() => setIsRun(true)}>Start</button></div>
      <div><button onClick={() => setIsRun(false)}>Pause</button></div>
      <div><button onClick={() => setTime(0)}>Reset</button></div>
    </div>
  )
}

export default App
