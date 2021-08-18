import React from 'react'
import styled from 'styled-components'
import IconFacebook from '../../atoms/interface/Icons/IconFacebook'
import IconInstagram from '../../atoms/interface/Icons/IconInstagram'

const StyledWrapper = styled.div`
    display: flex;

    svg{
        /* width: 30px; */
    }

    > * {
        margin:10px;
    }

`

export default function SocialList(){

    return(
        <StyledWrapper>
            <IconFacebook />
            <IconInstagram/>
        </StyledWrapper>
    )
}