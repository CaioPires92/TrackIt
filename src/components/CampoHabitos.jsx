import styled from 'styled-components'
import DiasDaSemana from './DiasDaSemana'
import { useState } from 'react'

export function CampoDeHabitos({
  onClick,
  diasDaSemana,
  setDiasSelecionados,
  diasSelecionados,
  handleDiaClick,
  salvaHabitos,
  onChangeInput
}) {
  const [valorInput, setValorInput] = useState('')

  console.log(diasSelecionados)

  function handleChange(e) {
    const novoValor = e.target.value
    setValorInput(novoValor)
    onChangeInput(novoValor)
  }

  return (
    <>
      <SCCampoHabitos>
        <input
          type="text"
          placeholder="nome do hábito"
          value={valorInput}
          onChange={handleChange}
        />
        <SCCContainerBtnSemana>
          {diasDaSemana.map((dia, index) => (
            <DiasDaSemana
              key={index}
              dia={dia}
              onClick={() => handleDiaClick(index)}
              index={index}
              diasSelecionados={diasSelecionados}
              setDiasSelecionados={setDiasSelecionados}
            />
          ))}
        </SCCContainerBtnSemana>
        <BtnContainer>
          <ButtonCancelar onClick={onClick}>Cancelar</ButtonCancelar>
          <ButtonSalvar onClick={salvaHabitos}>Salvar</ButtonSalvar>
        </BtnContainer>
      </SCCampoHabitos>
    </>
  )
}

const SCCampoHabitos = styled.div`
  margin-top: 20px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
  border-radius: 5px;

  input {
    width: 303px;
    height: 45px;
    margin-top: 18px;

    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-size: 20px;
    color: #666666;

    &::placeholder {
      color: #dbdbdb;
      padding: 10px;
    }
  }
`

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
  gap: 20px;
`

const ButtonCancelar = styled.a`
  width: 69px;
  height: 20px;
  font-size: 16px;
  text-align: center;
  color: #52b6ff;
  border: none;
`
const ButtonSalvar = styled.button`
  width: 84px;
  height: 35px;
  color: #fff;
  border-color: #52b6ff;
  background-color: #52b6ff;
  border-radius: 4.6px;
`

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

export default SCCampoHabitos
