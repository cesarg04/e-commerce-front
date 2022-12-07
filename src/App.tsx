import { useState } from 'react'
import { NabvarComponent } from './components/Nabvar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <NabvarComponent/>
    </div>
  )
}

export default App
