import Button from '../components/Button'
import FooterLink from '../components/FooterLink'
import Input from '../components/Input'
import Logo from '../components/Logo'
import SCContainerLogin from './LoginPage'

export default function CadastroPage() {
  return (
    <div>
      <SCContainerLogin>
        <Logo />
        <Input value={'email'} type={'email'} />
        <Input value={'senha'} type={'password'} />
        <Input value={'nome'} type={'text'} />
        <Input value={'foto'} type={'text'} />
        <Button value={'Cadastrar'} />
        <FooterLink>Já tem uma conta? Faça login!</FooterLink>
      </SCContainerLogin>
    </div>
  )
}
