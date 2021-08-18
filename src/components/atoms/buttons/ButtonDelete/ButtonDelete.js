import React from 'react';
import styled from 'styled-components';
import IconMinus from '../../interface/Icons/IconMinus';

const StyledButtonDelete = styled.button`
    background:none;
    border:none;

    :hover{
        cursor:pointer;
        transform:scale(0.9);
        transition:0.4s;

    }
    :active{
        transform:scale(0.8);
        transition:0.4s;
    }
`

const ButtonDelete = ({onClick}) => {

    return (
        <StyledButtonDelete onClick={onClick}>
            <IconMinus/>
        </StyledButtonDelete>
    )
  }
  
  export default ButtonDelete


