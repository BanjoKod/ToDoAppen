import { useState } from 'react'

function App(){
  const [todos, setTodos] = useState([
    "Fyll i din lista här"
  ]);

function clearList(){
  setTodos([])
}
}

export default App
