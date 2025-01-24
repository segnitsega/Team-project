
import { useState } from 'react';
import './App.css'

function App() {


  let [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <>
      <h1>Count: { value }</h1>
      <button onClick={ increment }>increase</button>
      <button onClick={ decrement }>decrease</button>
      <button onClick={ reset }>reset</button>
    </>
  )
}

export default App
