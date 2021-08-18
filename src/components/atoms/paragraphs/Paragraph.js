import React from 'react'
import styled, { css } from 'styled-components'


const StyledParagraph = styled.p`
    color:white;
    text-decoration:none;
    text-align:left;
    font-family:first;
`

const Paragraph = ({text}) => {
    return (

            <StyledParagraph>{text}</StyledParagraph>
    )
  }
  
export default Paragraph


