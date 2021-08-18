import React from 'react'
import styled from 'styled-components'
import IconFacebook from '../Icons/IconFacebook'
import IconInstagram from '../Icons/IconInstagram'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    text-align:center;
    width:90%;

    margin-bottom:100px;

    svg{
        width:70%;
    }

    > * {
        margin-bottom:70px;
    }
    @media  (min-width: ${({ theme }) => theme.media700}) {
        max-width:60%;
    }

`


const SocialIcon = ({type}) => {

    switch(type){
        case "FACEBOOK":
            return (
                <IconFacebook/>
            )
        case "INSTAGRAM":
            return(
                <IconInstagram/>
            )
        case "TWITTER":
            return(
                <IconInstagram/>
            )
    }

  }


  
const AboutItem = ({item}) => {
    let {src,type} = item

    return (
        <a href={src} target="_blank"  rel="noreferrer">
            <SocialIcon type={type} />
        </a>
        
    )
  }

  
export default AboutItem


