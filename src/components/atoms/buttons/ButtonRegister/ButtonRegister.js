import {Link} from 'next/link'
import React from 'react'
import styled from 'styled-components'




const StyledLink = styled(Link)`
    align-self:flex-end;
    
    :hover{
        cursor: pointer;
    }
`
const StyledButton = styled.button`
    width:204px;
    height:54px;
    background: ${({theme})=>theme.colours.accent.default};
    color: ${({theme})=>theme.colours.black};
    font-size:14px;
    border-radius: 12px;
    border:none;
    outline:none;
    justify-self:center;
    align-self:center;
    
    :hover{
        cursor: pointer;
    }
`

const ButtonRegister = ({text,slug, onClick}) => {
    return (
        <StyledLink to={`/project/${slug}/`}>
            <StyledButton onClick={onClick}>{text}</StyledButton>
        </StyledLink>
    )
  }
  
  export default ButtonRegister


