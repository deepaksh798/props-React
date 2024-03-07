import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "deepak",
    age: 23
  };

  return (
    <>
    <h1 className='bg-green-400 rounded-xl p-4 text-black mb-4'>Tailwind test</h1>
   <Card username="chaiaurcode" btnText="click here" />
   <Card username="deepak" btnText="visit here"/>
    </>
  )
}

export default App
