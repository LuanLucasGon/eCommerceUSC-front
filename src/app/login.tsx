import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import { Link } from "react-router"

function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(userEmail, userPassword)
    alert("Enviando os dados")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)}/>
          <FaUser className="icon"/>
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)}/>
          <FaLock className="icon"/>
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox"/>
            Lembrar de mim
            <Link to="">Esqueceu sua senha?</Link>
          </label>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>Não tem uma conta?<Link to="/signup">Registrar</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
