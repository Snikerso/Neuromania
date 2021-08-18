import React from 'react'
import styled from 'styled-components'
import IconPrice from '../Icons/IconPrice'


const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Price = ({price}) => {
    return (
        <>
        <StyledWrapper>
        <IconPrice/>
        <p>{`${price}zł`}</p>
        </StyledWrapper>
        </>
    )
  }
  
export default Price


