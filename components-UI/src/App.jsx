// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container width='full-width'>
        This is class 100% width This is class 100% width This is class 100% width
      </Container>
      <Container width='wide-width'>
        This is class 90% width
      </Container>
      <Container width='normal-width'>
        This is class 80% width
      </Container>
      <Container width='narrow-width'>
        This is class 70% width
      </Container>
    </>
  )
}

export default App
