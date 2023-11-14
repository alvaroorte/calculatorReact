import { useState } from 'react'
import './App.css'
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hola</h1>
      <Button variant="outlined">boton 1</Button>
    </>
  )
}

export default App
