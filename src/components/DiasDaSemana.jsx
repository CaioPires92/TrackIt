import styled from 'styled-components'

export default function DiasDaSemana() {
  return (
    <>
      <SCCContainerBtnSemana>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
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
  }
`
