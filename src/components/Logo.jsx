import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <SCLogo>
      <img src={logo} alt="logo" />
    </SCLogo>
  )
}

const SCLogo = styled.span`
  margin-top: 68px;
`
