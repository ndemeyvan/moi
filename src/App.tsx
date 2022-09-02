import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './components/Home'
import NavBar from './components/Nav'
import NavBAr from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar />
     <Home/>
    </div>
  )
}

export default App
