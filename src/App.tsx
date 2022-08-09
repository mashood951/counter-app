import React, { FC, useState } from 'react'
import './App.css'

const App: FC = () => {
  const [counter, setCounter] = useState<string>('0000')

  const handleCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const counterNum = parseInt(counter)
    if (event.currentTarget.innerHTML === '+') {
      setCounter(setZeros((counterNum + 1).toString()))
    } else {
      if (counterNum > 0) {
        setCounter(setZeros((counterNum - 1).toString()))
      }
    }
  }

  const setZeros = (num: string): string => {
    const numLen = num.length
    for (let i = 0; i < (4 - numLen); i++) {
      num = `0${num}`
    }
    return num
  }

  return (
    <div className='app'>
      <h1 className='title'>Counter App</h1>
      <div className="counter-container">
        <div className='counter'>
          <div>{counter[0]}</div>
          <div>{counter[1]}</div>
          <div>{counter[2]}</div>
          <div>{counter[3]}</div>
        </div>
        <div className="btns">
          <button className='btn' onClick={handleCounter}>-</button>
          <button className='btn' onClick={handleCounter}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App