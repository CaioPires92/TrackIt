import Button from '../components/Button'
import FooterLink from '../components/StyledLink'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { SCContainerSyle } from './styles/styles'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CadastroPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function cadastrar(e) {
    e.preventDefault()

    setIsLoading(true)

    console.log(email)
    console.log(password)
    console.log(name)
    console.log(image)

    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const novo = {
      email,
      name,
      image,
      password
    }

    axios
      .post(URL, novo)
      .then(response => {
        alert('usuario cadastrado com sucesso')
        navigate('/')
      })
      .catch(erro => alert(erro.response.data.message))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      <SCContainerSyle>
        <Logo />
        <form onSubmit={cadastrar}>
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
          <Input
            type={'text'}
            onChange={e => setName(e.target.value)}
            placeholder={'nome'}
            value={name}
            id={'nomeInput'}
            disabled={isLoading}
          />
          <Input
            type={'text'}
            onChange={e => setImage(e.target.value)}
            placeholder={'foto'}
            value={image}
            id={'fotoInput'}
            disabled={isLoading}
          />
          <Button disabled={isLoading}>Cadastrar</Button>
        </form>
        <FooterLink value={'/'}>Já tem uma conta? Faça login!</FooterLink>
      </SCContainerSyle>
    </div>
  )
}
