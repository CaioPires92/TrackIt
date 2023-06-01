import MainHeader from '../components/MainHeader'
import SCContainerHabitos from './HabitosPage'
import styled from 'styled-components'
import MainFooter from '../components/MainFooter'
import { SCContainerSyle } from './styles/styles'

export default function Historico() {
  return (
    <>
      <MainHeader />
      <SCContainerSyle>
        <SCContainerHabitos>
          <Header>
            <h2>Historico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
          </Header>
        </SCContainerHabitos>
        <MainFooter />
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
