import styled from 'styled-components'
import { CampoDeHabitos } from '../components/CampoHabitos'
import HabitoSelecionado from '../components/HabitoSelecionado'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import { SCContainerHojeHabitos } from './styles/styles'
import axios from 'axios'
import { useState } from 'react'

export default function HabitosPage() {
  const [novoHabito, setNovoHabito] = useState(null)
  const [exibe, setExibe] = useState(false)
  const [valorInput, setValorInput] = useState('')

  const URL =
    'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

  axios
    .post(URL, novoHabito)
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response))

  function exibirInputHabito() {
    setExibe(true)
  }

  function fecharInput() {
    setExibe(false)
  }

  function handleInputChange(novoValor) {
    setValorInput(novoValor)
    console.log(valorInput)
  }

  return (
    <SCContainerHojeHabitos>
      <MainHeader />

      <HeaderConteudo>
        <h2>Meus hábitos</h2>
        <button onClick={exibirInputHabito}>+</button>
      </HeaderConteudo>

      {exibe && (
        <CampoDeHabitos
          onClick={fecharInput}
          onChangeInput={handleInputChange}
        />
      )}
      <HabitoSelecionado />
      <HabitoSelecionado />
      <HabitoSelecionado />

      <Paragrafo>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Paragrafo>
      <MainFooter />
    </SCContainerHojeHabitos>
  )
}

const HeaderConteudo = styled.header`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 23px;

    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;

    background-color: #52b6ff;
    border-color: #52b6ff;
    cursor: pointer;
    border-radius: 4.63636px;

    font-size: 26.976px;
    /* identical to box height */

    color: #ffffff;
  }
`

const Paragrafo = styled.p`
  margin-top: 50px;
  font-size: 18px;
  padding: 0 18px;
  color: #666666;
`
