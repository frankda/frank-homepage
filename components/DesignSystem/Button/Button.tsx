import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.color.blue};
  border-radius: 2px;
  cursor: pointer;
  color: ${(p) => p.theme.color.blue};
  display: inline-block;
  /* font-family: var(--fonts-primary); */
  letter-spacing: 0.045em;
  padding: 0.45rem;
  text-align: left;
  text-transform: uppercase;
`

interface Props {
  children?: React.ReactElement
  type?: 'contained' | 'disabled' | 'text'
}

const Button = ({ type }: Props) => {
  return (
    <ButtonContainer>
    test
    </ButtonContainer>
  )
}

export default Button