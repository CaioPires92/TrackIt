import styled from 'styled-components'
import perfil from '../assets/perfil.png'

export default function HabitosPage() {
  return (
    <SCContainerHabitos>
      <SCMainHeader className="main-header">
        <h2>TrackIt</h2>
        <img src={perfil} alt="foto de perfil" />
      </SCMainHeader>

      <HeaderConteudo>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </HeaderConteudo>

      <div className="camboHabitos">
        <input type="text" />
        <div>
          <button>d</button>
          <button>s</button>
          <button>t</button>
          <button>q</button>
          <button>q</button>
          <button>s</button>
          <button>s</button>
        </div>
        <div>
          <button>Cancelar</button>
          <button>Salvar</button>
        </div>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </div>
      <footer>
        <a href=""></a>
        <a href="">
          Hoje
          <img src="" alt="" />
        </a>
        <a href=""></a>
      </footer>
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
`

const SCMainHeader = styled.header`
  font-family: 'Playball', cursive;
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 40px;
    /* identical to box height */
    color: #ffffff;
  }

  img {
    border-radius: 98.5px;
  }
`

const HeaderConteudo = styled.header`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 22.976px;
    /* identical to box height */

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
