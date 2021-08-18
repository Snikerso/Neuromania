import styled, { css } from 'styled-components'

export const StyledWrapper = styled.div`
    display:none;
    flex-direction:column;
    align-items:center;
    width:700px;
    padding:10px;
    margin-top:50px;
    
    ${({isActive})=> 
    isActive && css`
        display:none;
    `}

    @media (min-width: ${({theme})=>theme.media.media1500}){
        display:flex;
    }
`

export const StyledWrapperAction = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:50px;
    align-items:center;

    div >* {
        margin:10px;
    }
`