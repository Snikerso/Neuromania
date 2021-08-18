import React from 'react'
import styled from 'styled-components'
import IconClose from '../../interface/Icons/IconClose'

const StyledButtonClose = styled.button`
    background:transparent;
    border:none;
    outline:none;
    right:40px;
    top:40px;

    :hover{
        cursor:pointer;
        transform:scale(1.1);
        transition:0.4s;

    }
    :active{
        transform:scale(0.9);
        transition:0.4s;
    }
`

const ButtonClose = ({onClick,props}) => {

    return (
        <StyledButtonClose onClick={onClick} {...props} className="bar" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <IconClose/>
        </StyledButtonClose>
    )
  }
  
  export default ButtonClose


