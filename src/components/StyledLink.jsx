import { Link } from 'react-router-dom'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function FooterLink({ children, value }) {
  return <StyledLink to={value}>{children}</StyledLink>
}

const StyledLink = styled(Link)`
  margin-top: 25px;
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;

  color: #52b6ff;
`
