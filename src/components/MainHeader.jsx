import styled from 'styled-components'
import perfil from '../assets/perfil.png'
import UserContext from '../UserContext'
import { useContext } from 'react'

export default function MainHeader() {
  const { user } = useContext(UserContext)

  console.log('User na Pagina Main Header', user)

  return (
    <SCMainHeader className="main-header">
      <h2>TrackIt</h2>
      {user && user.data && user.data.image ? (
        <img src={user.data.image} alt="foto de perfil" />
      ) : (
        <img src={perfil} alt="foto de perfil" />
      )}
    </SCMainHeader>
  )
}

const SCMainHeader = styled.header`
  font-family: 'Playball', cursive;
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 40px;
    /* identical to box height */
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`
