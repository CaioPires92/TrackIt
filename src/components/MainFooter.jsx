import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function MainFooter() {
  return (
    <SCMainFooter>
      <Link to={'/habitos'}>Habitos</Link>
      <Link to={'/hoje'}>Hoje</Link>
      <Link to={'/historico'}>Historico</Link>
    </SCMainFooter>
  )
}

const SCMainFooter = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  height: 70px;
  background-color: #fff;
  padding: 0 20px;

  a {
    font-size: 18pxpx;
    text-align: center;
    color: #52b6ff;
    text-decoration: none;

    &:nth-child(2) {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #52b6ff;
      color: #fff;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
