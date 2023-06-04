import MainHeader from '../components/MainHeader'
import styled from 'styled-components'
import MainFooter from '../components/MainFooter'
import { SCContainerHojeHabitos, SCContainerSyle } from './styles/styles'

export default function Historico({ calcularProgresso, data, setData }) {
  return (
    <>
      <MainHeader />
      <SCContainerSyle>
        <SCContainerHojeHabitos>
          <Header>
            <h2>Historico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
          </Header>
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
    margin-top: 18px;
    margin-bottom: 18px;

    color: #666;
  }
`
