import Button from '../components/Button'
import StyledLink from '../components/StyledLink'
import Input from '../components/Input.jsx'
import Logo from '../components/Logo'
// import { useEffect } from 'react'
// import axios from 'axios'
import { SCContainerSyle } from './styles/styles'

export default function LoginPage() {
  // const URL =
  //   'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

  // useEffect(() => {
  //   axios.post(URL).the
  // }, [])

  return (
    <SCContainerSyle>
      <Logo />
      <Input value={'email'} type={'email'} />
      <Input value={'senha'} type={'password'} />
      <Button value={'Entrar'} />
      {/* <a href="">Não tem uma conta? Cadastre-se!</a> */}
      <StyledLink>Não tem uma conta? Cadastre-se!</StyledLink>
    </SCContainerSyle>
  )
}
