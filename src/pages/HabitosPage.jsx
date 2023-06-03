import styled from 'styled-components'
import { CampoDeHabitos } from '../components/CampoHabitos'
import HabitoSelecionado from '../components/HabitoSelecionado'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import { SCContainerHojeHabitos } from './styles/styles'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function HabitosPage() {
  const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const [valorInput, setValorInput] = useState('')
  const [exibe, setExibe] = useState(false)
  const [diasSelecionados, setDiasSelecionados] = useState([])
  const [habitos, setHabitos] = useState([])
  const [loading, setLoading] = useState(true)

  function exibirInputHabito() {
    setExibe(true)
  }

  function fecharInput() {
    setExibe(false)
  }

  function salvaHabitos() {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTQyMCwiaWF0IjoxNjg1ODE3ODM2fQ.pnJIzSYlNn1JvfxVp-4WgONrhksfykzeDvSJY_aS8Kc'

    const novoHabito = {
      name: valorInput,
      days: diasSelecionados
    }

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }

    axios
      .post(URL, novoHabito, config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response))
  }

  function handleInputChange(novoValor) {
    setValorInput(novoValor)
  }

  function handleDiaClick(index) {
    if (diasSelecionados.includes(index)) {
      setDiasSelecionados(diasSelecionados.filter(d => d !== index))
    } else {
      setDiasSelecionados([...diasSelecionados, index])
    }
  }

  useEffect(() => {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTQyMCwiaWF0IjoxNjg1ODE3ODM2fQ.pnJIzSYlNn1JvfxVp-4WgONrhksfykzeDvSJY_aS8Kc'

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }

    axios
      .get(URL, config)
      .then(response => {
        setHabitos(response.data)
        console.log('habitos: ', habitos)
        setLoading(false)
      })
      .catch(error => console.log(error.response))
  }, [])

  if (loading) {
    return <div>Carregando...</div>
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
          onChangeInput={handleInputChange}
          salvaHabitos={salvaHabitos}
          handleDiaClick={handleDiaClick}
          diasDaSemana={diasDaSemana}
          onClick={fecharInput}
          diasSelecionados={diasSelecionados}
          setDiasSelecionados={setDiasSelecionados}
          valorInput={valorInput}
        />
      )}

      {habitos.map(habito => (
        <HabitoSelecionado
          habito={habito}
          key={habito.id}
          diasDaSemana={diasDaSemana}
        />
      ))}

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
