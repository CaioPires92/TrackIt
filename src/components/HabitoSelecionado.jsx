import SCCampoHabitos from './CampoHabitos'
import lixo from '../assets/lixo.png'
import styled from 'styled-components'
import DiasDaSemana from './DiasDaSemana'
import SCCContainerBtnSemana from '../pages/styles/ContainerBtnSemana'

export default function HabitoSelecionado({
  habito,
  diasDaSemana,
  diasSelecionados,
  onClick
}) {
  return (
    <SCCampoHabitos>
      <SCContainer>
        <h2>{habito.name}</h2>
        <a href="#">
          <img src={lixo} alt="" onClick={() => onClick(habito.id)} />
        </a>
      </SCContainer>
      <SCCContainerBtnSemana>
        {diasDaSemana.map((dia, index) => (
          <DiasDaSemana
            key={index}
            dia={dia}
            index={index}
            diasSelecionados={diasSelecionados}
            diasHabito={habito.days}
            isInNewHabit={true}
          />
        ))}
      </SCCContainerBtnSemana>
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
