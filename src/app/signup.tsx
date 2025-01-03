import React, { useState } from 'react'
import { Link } from 'react-router'

function Signup() {
  const [userName, setUserName] = useState("")
  const [userCpf, setUserCpf] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(userEmail, userPassword)
    alert("Registrando os dados")
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Fazer registro</h1>
        <div>
          <input type="" placeholder="Nome" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div>
          <input type="" placeholder="CPF" onChange={(e) => setUserCpf(e.target.value)}/>
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)}/>
        </div>
        <button>Registrar</button>
      </form>
    </div>
  )
}

export default Signup
