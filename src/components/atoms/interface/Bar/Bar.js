import React from 'react'
import styled from 'styled-components'

const StyledBar = styled.svg`
    display:block;
    @media (min-width: ${({ theme }) => theme.media.media700}) {
        display:none;
    }
`

const Bar = ({onClick}) => {
    return (
        <StyledBar onClick={onClick} width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.71429" y1="2.28571" x2="31.6192" y2="2.2857" stroke="#00C4D5" strokeWidth="3.42859" strokeLinecap="round"/>
        <line x1="1.71429" y1="10.2858" x2="31.6192" y2="10.2858" stroke="#00C4D5" strokeWidth="3.42859" strokeLinecap="round"/>
        <line x1="1.71429" y1="18.2857" x2="31.6192" y2="18.2857" stroke="#00C4D5" strokeWidth="3.42859" strokeLinecap="round"/>
        
        </StyledBar>
        

    )
  }
  
  export default Bar


