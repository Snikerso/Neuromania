import React from 'react'
import styled, { css } from 'styled-components'
import IconList from '../../interface/Icons/IconList'

const StyledButtonAdd = styled.button`
    background:none;
    border:none;
    position:fixed;
    z-index:10;
    right:0;
    top:150px;
    outline:none;

    ${({isActive})=>
    isActive && css`
        display:none;
    `}}

    svg {
        width:80px;
    }


    :hover{
        transform:scale(1.1);
        cursor:pointer;
        transition:0.5s;
    }
`

const ButtonList= ({onClick, amount, isActive}) => {
    return (
        <StyledButtonAdd onClick={onClick} isActive={isActive}>
            <IconList amount={amount} />
        </StyledButtonAdd>
    )
  }
  
  export default ButtonList


