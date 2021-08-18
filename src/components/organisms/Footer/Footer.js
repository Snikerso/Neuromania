import React from "react"
import styled from "styled-components"


const StyledWrapper = styled.footer`
    display:flex;
    flex-direction:column;
    position: relative;
    align-items:center;
    justify-content:flex-end;
    overflow-x:hidden;
    height:200px;
    background-color:${({ theme }) => theme.colours.accent.default};
    @media only screen and (min-width: ${({ theme }) => theme.media.media700}) {
      justify-content:center;
    }
`

const StyledInformation = styled.div`
  color: ${({theme})=>theme.colours.black};
  text-align:center;
  font-family:nunito-regular; 
  font-size:12px;
  :first-child {
    font-family:nunito-semibold; 
    font-weight:bold;
  }
  margin-bottom:10px;

  @media only screen and (min-width: ${({ theme }) => theme.media.media700}) {
    font-size:15px;
    }
`

const Footer = ({}) => {

  return (
    <StyledWrapper>

      <StyledInformation> <p>Occupying</p> <p>Wileńska 4, 87-100 Toruń </p></StyledInformation>
      <StyledInformation> <p>Email</p> <p>neurotechtor@gmail.com</p></StyledInformation>
    </StyledWrapper>
  )
}

export default Footer;

