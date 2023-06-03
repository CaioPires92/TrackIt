import SCCampoHabitos from './CampoHabitos'
import lixo from '../assets/lixo.png'
import styled from 'styled-components'
import DiasDaSemana from './DiasDaSemana'

export default function HabitoSelecionado({
  habito,
  diasDaSemana
  // diasSelecionados,
  // dia
}) {
  return (
    <SCCampoHabitos>
      <SCContainer>
        <h2>{habito.name}</h2>
        <a href="#">
          <img src={lixo} alt="" />
        </a>
      </SCContainer>
      {diasDaSemana.map((dia, index) => (
        <DiasDaSemana key={index} dia={'c'} diasSelecionados={habito.days} />
      ))}
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
