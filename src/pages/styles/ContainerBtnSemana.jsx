import styled from 'styled-components'

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

export default SCCContainerBtnSemana
