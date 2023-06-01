import MainHeader from '../components/MainHeader'
import SCContainerHabitos from './HabitosPage'
import SCContainerLogin from './LoginPage'
import styled from 'styled-components'
import { ImCheckmark } from 'react-icons/im'
import MainFooter from '../components/MainFooter'

export default function Hoje() {
  return (
    <>
      <MainHeader />
      <SCContainerLogin>
        <SCContainerHabitos>
          <Header>
            <h2>Segunda, 17/05</h2>
            <p>Nenhum hábito concluído ainda</p>
          </Header>

          <ContainerConteudo>
            <div className="text">
              <h2>Ler 1 capítulo de livro</h2>
              <p>Sequência atual: 3 dias Seu recorde: 5 dias</p>
            </div>
            <div>
              <StyledReactIcon />
            </div>
          </ContainerConteudo>
          <ContainerConteudo>
            <div className="text">
              <h2>Ler 1 capítulo de livro</h2>
              <p>Sequência atual: 3 dias Seu recorde: 5 dias</p>
            </div>
            <div>
              <StyledReactIcon />
            </div>
          </ContainerConteudo>
          <ContainerConteudo>
            <div className="text">
              <h2>Ler 1 capítulo de livro</h2>
              <p>Sequência atual: 3 dias Seu recorde: 5 dias</p>
            </div>
            <div>
              <StyledReactIcon />
            </div>
          </ContainerConteudo>
        </SCContainerHabitos>
        <MainFooter />
      </SCContainerLogin>
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

      background-color: #ebebeb;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h2 {
    font-size: 20px;

    color: #666666;
  }

  p {
    width: 150px;
    margin-top: 7px;
    font-size: 13px;
    color: #666666;
  }
`

const StyledReactIcon = styled(ImCheckmark)`
  color: #fff;
  font-size: 34px;
  text-align: center;
`
