import React from 'react'
import styled from 'styled-components'

const StyledIconList = styled.svg`
  text{
    font-size:28px;
    fill: ${({theme})=>theme.colours.white};
  }
`

const IconList = ({amount = 0}) => {

    return (
        <StyledIconList width="113" height="132" viewBox="0 0 113 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.56475 59.3762L49 35.7254L90.4352 59.3762V106.658L49 130.309L7.56475 106.658V59.3762Z" fill="#00C4D5" fillOpacity="0.2" stroke="#00C4D5" strokeWidth="2"/>
          <path d="M38.3333 96.9073H33V91.5739H38.3333V96.9073ZM38.3333 80.9073H33V86.2406H38.3333V80.9073ZM38.3333 70.2406H33V75.5739H38.3333V70.2406ZM42.3333 70.2406V75.5739H65V70.2406H42.3333ZM42.3333 86.2406H65V80.9073H42.3333V86.2406ZM42.3333 96.9073H65V91.5739H42.3333V96.9073Z" fill="#00C4D5"/>
          <text x={amount < 10 ? "70":"63"} y="40" >{amount}</text>
        </StyledIconList>
    )
  }
  
export default IconList


