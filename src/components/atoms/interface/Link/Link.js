import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    display:inline;
    color: ${({ theme }) => theme.colours.accent.default};
`

const Link = ({href,text,target}) => {
    return (
        <StyledLink href={href} target={target}>
            {text}
        </StyledLink>
    )
}
  
  export default Link


