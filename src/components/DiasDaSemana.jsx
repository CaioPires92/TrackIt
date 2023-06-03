import { useState } from 'react'
import styled from 'styled-components'

const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function DiasDaSemana({}) {
  const [diasSelecionados, setDiasSelecionados] = useState([])

  function handleDiaClick(index) {
    if (diasSelecionados.includes(index)) {
      setDiasSelecionados(diasSelecionados.filter(d => d !== index))
    } else {
      setDiasSelecionados([...diasSelecionados, index])
    }
  }

  console.log(diasSelecionados)
  return (
    <>
      <SCCContainerBtnSemana>
        {diasDaSemana.map((dia, index) => (
          <button
            key={index}
            onClick={() => handleDiaClick(index)}
            className={diasSelecionados.includes(index) ? 'selected' : ''}
          >
            {dia}
          </button>
        ))}
      </SCCContainerBtnSemana>
    </>
  )
}

const SCCContainerBtnSemana = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 4px;

  button {
    width: 30px;
    height: 30px;

    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-size: 20px;
    margin-top: 8px;
    color: #dbdbdb;

    &.selected {
      background-color: gray;
      color: white;
    }
  }
`
