import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()

  const handleLogin = () => {
    return navigate("/login")
  }

  return (
    <div>
      Hello World
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home
