import React from 'react'
import styled from 'styled-components'

const StyledButtonAction = styled.button`
    width: 87px;
    height: 43px;
    background: ${({theme})=>theme.colours.accent.opacity03};
    border: 2px solid #00C4D5;
    box-sizing: border-box;
    border-radius: 10px;
    color:${({theme})=>theme.colours.white};
    font-weight:700;

    :hover{
        cursor: pointer;
        background-color: ${({theme})=>theme.colours.accent.white};
    }
`
const ButtonAction = ({onClick,text}) => {
    return (
        <StyledButtonAction onClick={onClick}>
            {text}
        </StyledButtonAction>
    )
  }
  
  export default ButtonAction


