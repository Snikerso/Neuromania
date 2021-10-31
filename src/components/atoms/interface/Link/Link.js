import React from 'react'
import styled, { css } from 'styled-components'

const StyledLink = styled.a`
    display:inline;
    color: ${({ theme }) => theme.colours.accent.default};

    ${({isImportant})=> isImportant && css`
        font-weight: bold;
    `}
`

const Link = ({href,text,target, isImportant}) => {
    return (
        <StyledLink isImportant={isImportant} href={href} target={target}>
            {text}
        </StyledLink>
    )
}
  
  export default Link


