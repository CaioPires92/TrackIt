import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function FooterLink({ children }) {
  return <SCFooterLink> {children}</SCFooterLink>
}

const SCFooterLink = styled.a`
  margin-top: 25px;
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;

  color: #52b6ff;
`
