import React, { useState } from 'react'
import { Link } from 'react-router'
import { api } from '../../services/api'

type DataProps = {
  user: string,
  token: string
}

type DataRequest = {
  name: string,
  email: string,
  cpf: string,
  password: string
}

function SignUp() {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState<DataProps>();

  const createDataObject = (): DataRequest => ({
    name,
    email,
    cpf,
    password,
  });

  const handleSubmit = async (event: any) => {
    try{
      event.preventDefault()
      console.log(email, password)
      const requestBody = createDataObject();
      const {data} = await api.post("/auth/register", requestBody)
      setData(data)
      alert(data.token)
    } catch(error){
      console.log(error)
      alert("Não foi possivel carregar os dados.")
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Fazer registro</h1>
        <div>
          <input type="" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <input type="" placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button>Registrar</button>
      </form>
    </div>
  )
}

export default SignUp
