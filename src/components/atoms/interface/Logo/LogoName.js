import React from 'react'
import styled from 'styled-components'

const StyledLogoName = styled.h1`
    font-weight:400;
    font-size:17px;
    text-align:center;
    @media (min-width:${({theme})=>theme.media.media700} ){
      font-size:30px;
      margin-bottom:20px;
    }
`

const LogoName = ({text}) => {
    
    return (
        <StyledLogoName>{text}</StyledLogoName>
    )
  }
  
  export default LogoName


