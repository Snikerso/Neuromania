import styled from "styled-components"

export const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    width:90%;

    @media (min-width:${({theme})=>theme.media.media700}){
        align-self:flex-start;
        width:80%;
    }
    @media (min-width:${({theme})=>theme.media.media1000}){
        align-self:flex-start;
    }


`

const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:40px;
    align-items:center;
`

export const StyledPriceHeader = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:700;
    width:100%;
    margin-bottom:10px;
    padding:14px 20px;
    border: 2px solid ${({theme})=>theme.colours.black};
    background-color:  ${({theme})=>theme.colours.accent.default};
    border-radius:10px;
`