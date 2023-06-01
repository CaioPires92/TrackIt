import styled from 'styled-components'
import { CampoDeHabitos } from '../components/CampoHabitos'
import HabitoSelecionado from '../components/HabitoSelecionado'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

export function HabitosPage() {
  return (
    <SCContainerHabitos>
      <MainHeader />

      <HeaderConteudo>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </HeaderConteudo>

      <HabitoSelecionado />
      <HabitoSelecionado />
      <HabitoSelecionado />
      {/* <CampoDeHabitos /> */}

      <Paragrafo>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Paragrafo>
      <MainFooter />
    </SCContainerHabitos>
  )
}

const SCContainerHabitos = styled.div`
  margin-top: 70px;
  margin-inline: auto;
  width: 375px;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  padding: 0 20px;
`

//

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

export default SCContainerHabitos
