import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return <ScButton>{children}</ScButton>
}

const ScButton = styled.button`
  margin-top: 6px;
  width: 303px;
  height: 45px;

  background-color: #52b6ff;
  border-radius: 5px;
  border-color: #52b6ff;
  cursor: pointer;

  font-size: 20px;
  text-align: center;

  color: #ffffff;
`
