import MainHeader from '../components/MainHeader'
import styled, { css } from 'styled-components'

import { ImCheckmark } from 'react-icons/im'
import MainFooter from '../components/MainFooter'
import { SCContainerSyle, SCContainerHojeHabitos } from './styles/styles'
import { useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { useContext } from 'react'
import { ProgressoContext } from '../ProgressoContext'

export default function Hoje({ calcularProgresso, data, setData }) {
  const { progresso, atualizarProgresso } = useContext(ProgressoContext)

  dayjs.locale('pt-br')

  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const today = capitalizeFirstLetter(dayjs().format('dddd, DD[/]MM'))

  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTQyMCwiaWF0IjoxNjg1ODE3ODM2fQ.pnJIzSYlNn1JvfxVp-4WgONrhksfykzeDvSJY_aS8Kc'

  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }

  useEffect(() => {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    axios
      .get(URL, config)
      .then(response => {
        setData(response.data)
        const novoProgresso = calcularProgresso(response.data)
        atualizarProgresso(novoProgresso)
      })
      .catch(error => console.error(error.response))
  }, [])

  const Subtitulo = ({ progresso }) => {
    if (progresso == 0) {
      return <span>Nenhum hábito concluído ainda</span>
    } else {
      return <span>{progresso}% dos hábitos concluídos</span>
    }
  }

  function concluir(id, done) {
    let URL

    if (done) {
      URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
    } else {
      URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    }
    axios
      .post(URL, {}, config)
      .then(response => {
        console.log(response.data)
        window.location.reload()
      })
      .catch(error => console.log(error.response))
  }

  return (
    <>
      <MainHeader />
      <SCContainerSyle>
        <SCContainerHojeHabitos>
          <Header>
            <h2>{today}</h2>
            <p>
              <Subtitulo progresso={data ? calcularProgresso(data) : 0} />
            </p>
          </Header>

          {data.map(item => (
            <ContainerConteudo
              key={item.id}
              data-done={item.done ? 'true' : 'false'}
            >
              <div className="text">
                <h2>{item.name}</h2>
                <StyledSpan
                  data-done={item.done}
                  data-currentsequence={item.currentSequence}
                  data-highestsequence={item.highestSequence}
                >
                  Sequência atual: {item.currentSequence} dias{' '}
                </StyledSpan>{' '}
                <StyledSpan
                  data-done={item.done}
                  data-currentsequence={item.currentSequence}
                  data-highestsequence={item.highestSequence}
                >
                  <br />
                  Seu recorde: <span>{item.highestSequence} dias</span>
                </StyledSpan>
              </div>
              <div
                onClick={() => concluir(item.id, item.done)}
                data-done={item.done}
              >
                <StyledReactIcon />
              </div>
            </ContainerConteudo>
          ))}
        </SCContainerHojeHabitos>
        <MainFooter calcularProgresso={() => calcularProgresso(data)} />
      </SCContainerSyle>
    </>
  )
}

const Header = styled.div`
  margin-top: 28px;
  width: 100%;

  h2 {
    font-size: 23px;

    color: #126ba5;
  }

  p {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 18px;

    color: #bababa;
  }
`

const ContainerConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px;

  div {
    &:last-child {
      width: 69px;
      height: 69px;
      background-color: ${props =>
        props['data-done'] === 'true' ? '#8FC549' : '#ebebeb'};
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h2 {
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
  }
`

const StyledReactIcon = styled(ImCheckmark)`
  color: #fff;
  font-size: 34px;
  text-align: center;
`

const StyledSpan = styled.span`
  width: 150px;
  font-size: 13px;
  color: #666666;

  &:first-of-type {
    ${props =>
      props['data-done'] &&
      css`
        color: green;
      `}
  }

  &:last-of-type {
    ${props =>
      props['data-done'] &&
      props['data-currentsequence'] === props['data-highestsequence'] &&
      parseInt(props['data-currentsequence']) > 0 &&
      css`
        color: green;
      `}
  }
`
