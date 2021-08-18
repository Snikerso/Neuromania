import React from 'react'
import styled from 'styled-components'
import IconTime from '../Icons/IconTime'

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`


const Time = ({time}) => {
    return (
        <StyledWrapper>
        <IconTime/>
        <div>{`${time}min`}</div>
        </StyledWrapper>
    )
  }
  
export default Time


