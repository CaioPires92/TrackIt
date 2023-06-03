import Button from '../components/Button'
import StyledLink from '../components/StyledLink'
import Input from '../components/Input.jsx'
import Logo from '../components/Logo'
import { SCContainerSyle } from './styles/styles'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { setUser } = useContext(UserContext)

  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()

    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    const novoLogin = {
      email,
      password
    }

    axios
      .post(URL, novoLogin)
      .then(response => {
        const userData = response.data
        setUser(prevState => ({ ...prevState, isLogged: true }))
        localStorage.setItem('user', JSON.stringify(userData))
        alert('Login feito com sucesso')
        navigate('/hoje')
      })
      .catch(erro => alert(erro.response.data.message))
      .finally(() => {
        setIsLoading(true)
      })
  }

  return (
    <SCContainerSyle>
      <Logo />
      <form onSubmit={login}>
        <Input
          type={'email'}
          onChange={e => setEmail(e.target.value)}
          placeholder={'email'}
          value={email}
          id={'emailInput'}
          disabled={isLoading}
        />
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="senha"
          value={password}
          id={'senhaInput'}
          disabled={isLoading}
        />
        <Button disabled={isLoading} isLoading={isLoading}>
          Entrar
        </Button>
      </form>
      {/* <a href="">Não tem uma conta? Cadastre-se!</a> */}
      <StyledLink value="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </SCContainerSyle>
  )
}
