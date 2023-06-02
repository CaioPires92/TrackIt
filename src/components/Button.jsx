import styled from 'styled-components'
import { ThreeDots } from 'react-loader-spinner'

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, isLoading }) {
  console.log('dsdds', isLoading)
  return (
    <ScButton disabled={disabled}>
      {isLoading ? (
        <LoaderWrapper>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </LoaderWrapper>
      ) : (
        children
      )}
    </ScButton>
  )
}

const ScButton = styled.button`
  margin-top: 6px;
  width: 100%;
  height: 45px;

  background-color: #52b6ff;
  border-radius: 5px;
  border-color: #52b6ff;
  cursor: pointer;

  font-size: 20px;
  text-align: center;

  color: #ffffff;
`

const LoaderWrapper = styled.div`
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
`
