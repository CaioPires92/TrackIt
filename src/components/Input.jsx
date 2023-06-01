import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function Input({ value, type, placeholder, id, onChange }) {
  return (
    <>
      <SCContainerInput>
        <SCInput>
          <label htmlFor={value}></label>
          <input
            required
            type={type}
            name={value}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </SCInput>
      </SCContainerInput>
    </>
  )
}

const SCContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 303px;
    height: 45px;

    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    &::placeholder {
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;

      font-size: 20px;
      padding: 10px;

      color: #dbdbdb;
    }
  }
`
const SCInput = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  margin-top: 6px;
`
