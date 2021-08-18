import React from 'react'
import styled from 'styled-components'
import {GuestItem} from '../../molecules/GuestItem/GuestItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;

    align-items:center;

    @media (min-width: ${({theme})=>theme.media.media700}){
        align-items:flex-start;
    }
`

export const GuestList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(item=> <GuestItem key={item.id} item={item} /> )}
            </StyledWrapper>
        </>
    )
  }


