import Button from '../components/Button'
import FooterLink from '../components/FooterLink'
import Input from '../components/Input.jsx'
import Logo from '../components/Logo'
import styled from 'styled-components'

export function LoginPage() {
  return (
    <SCContainerLogin>
      <Logo />
      <Input value={'email'} type={'email'} />
      <Input value={'senha'} type={'password'} />
      <Button value={'Entrar'} />
      {/* <a href="">Não tem uma conta? Cadastre-se!</a> */}
      <FooterLink>Não tem uma conta? Cadastre-se!</FooterLink>
    </SCContainerLogin>
  )
}

const SCContainerLogin = styled.div`
  margin-inline: auto;
  width: 375px;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export default SCContainerLogin
