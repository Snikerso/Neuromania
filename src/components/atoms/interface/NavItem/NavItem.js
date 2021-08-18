import React from 'react'
import styled, { css } from 'styled-components'
import {useRouter} from 'next/router'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    min-width:120px;
    opacity:90%;

    svg{
        width:100%;
    }
    :hover{
        cursor: pointer;
        /* color:${({theme})=>theme.colours.accent}; */
    }
`
const StyledLink = styled.div`
    text-decoration:none;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    color:${({theme})=>theme.colours.white};
    height:100%;
    padding:7px;
    border-radius:0px 0px 5px 5px;
    
    ${({isActive})=>
        isActive ? css`
            background-color:${({theme})=>theme.colours.accent.opacity08};
            opacity:100%;
            box-shadow: 4px 4px 11px ${({theme})=>theme.colours.accent.opacity08};
            
            border-radius:5px 5px 5px 5px;
            :hover{
                cursor: pointer;
                color:${({theme})=>theme.colours.white};
            }
        ` : css`
            :hover{
                cursor: pointer;
                color:${({theme})=>theme.colours.accent.default};
            }
        `}
        
`

const NavItem = ({text,to,location}) => {
    const router = useRouter()

    const handleClick = () =>{
        router.push(to)
    }
    return (
        <StyledWrapper isActive={location === to} onClick={()=>handleClick()}>
            <StyledLink isActive={location === to}>
                {text}
            </StyledLink>
        </StyledWrapper>
    )
  }
  
  export default NavItem


