import React from 'react'
import styled from 'styled-components'
import Logo from 'src/components/atoms/interface/Logo/Logo'
import LogoName from 'src/components/atoms/interface/Logo/LogoName'

const StyledWrapper = styled.div`
    display:flex;
`

const LogoWithName = () => {
    
    return (
        <StyledWrapper>
            <Logo/>
            <LogoName text={"NEUROMANIA CONFERENCE 2021"}/>
        </StyledWrapper>
    )
  }
  
  export default LogoWithName


