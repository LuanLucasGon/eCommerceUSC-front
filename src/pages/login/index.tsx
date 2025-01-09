import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import { Link } from "react-router"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import Input from "../../components/input"
import Button from "../../components/button"

const createUserFormSchema = z.object({
  email: z.string().nonempty('e-mail é obrigatorio').email('Formato de e-mail invalido'),
  password: z.string().nonempty('senha é obrigatoria'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const {register, handleSubmit, formState: {errors}} = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const consoleData = (event: any) => {
    console.log(userEmail, userPassword)
    alert("Enviando os dados")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(consoleData)}>
        <h1>Acesse o sistema</h1>
        <div>
          <Input type="email" placeholder="Email" {...register('email')}/>
          {errors.email && <span>{errors.email.message}</span>}
          <Input type="password" placeholder="Senha" {...register('password')}/>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox"/>
            Lembrar de mim
            <Link to="">Esqueceu sua senha?</Link>
          </label>
        </div>
        <Button>Entrar</Button>
        <div className="signup-link">
          <p>Não tem uma conta?<Link to="/signup">Registrar</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login