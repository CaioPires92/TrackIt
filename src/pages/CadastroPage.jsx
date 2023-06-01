import Button from '../components/Button'
import FooterLink from '../components/StyledLink'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { SCContainerSyle } from './styles/styles'
import { useState } from 'react'

export default function CadastroPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')

  function cadastrar(e) {
    e.preventDefault()

    setTimeout(() => {
      console.log(email)
      console.log(senha)
      console.log(nome)
      console.log(foto)
    }, 1)
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
          />
          <Input
            type="password"
            onChange={e => setSenha(e.target.value)}
            placeholder="senha"
            value={senha}
            id={'senhaInput'}
          />
          <Input
            type={'text'}
            onChange={e => setNome(e.target.value)}
            placeholder={'nome'}
            value={nome}
            id={'nomeInput'}
          />
          <Input
            type={'text'}
            onChange={e => setFoto(e.target.value)}
            placeholder={'foto'}
            value={foto}
            id={'fotoInput'}
          />
          <Button>Cadastrar</Button>
        </form>
        <FooterLink>Já tem uma conta? Faça login!</FooterLink>
      </SCContainerSyle>
    </div>
  )
}
