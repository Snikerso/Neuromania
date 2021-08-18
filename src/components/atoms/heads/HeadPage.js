import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:100px;


    >*{
        margin-top:5px;
    }
    @media (min-width:${({theme})=>theme.media.media700} ){
        display:none;
    }

`
const StyledHead = styled.h2`
    color:${({theme})=>theme.colours.accent.default};
    text-decoration:none;
    text-align:center;
    font-family:first;
    font-size:40px;
`

const HeadPage = ({text}) => {
    return (
        <StyledWrapper>
            <StyledHead>{text}</StyledHead>
        </StyledWrapper>
    )
  }
  
export default HeadPage