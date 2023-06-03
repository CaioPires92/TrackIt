import SCCampoHabitos from './CampoHabitos'
import { DiasDaSemana } from './DiasDaSemana'
import lixo from '../assets/lixo.png'
import styled from 'styled-components'

export default function HabitoSelecionado() {
  return (
    <SCCampoHabitos>
      <SCContainer>
        <h2>Ler 1 capítulo de livro</h2>
        <a href="#">
          <img src={lixo} alt="" />
        </a>
      </SCContainer>
      <DiasDaSemana />
    </SCCampoHabitos>
  )
}

const SCContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  h2 {
    font-size: 20px;
    color: #666666;
  }

  img {
    position: absolute;
    top: -10px;
    right: -10px;
  }
`
