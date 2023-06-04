import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function MainFooter({ calcularProgresso }) {
  return (
    <SCMainFooter>
      <Link to={'/habitos'}>Habitos</Link>

      <Link to={'/hoje'}>
        <StyledCircularProgressbar
          value={calcularProgresso()}
          text={'Hoje'}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#52b6ff',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent'
          })}
        />
      </Link>
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
  }
`

const StyledCircularProgressbar = styled(CircularProgressbar)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`
