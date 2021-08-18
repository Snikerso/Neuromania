import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    position:absolute;
    bottom:5px;   

    a{
        text-decoration:none;
        color:white;
        display:flex;
        align-items:center;
    }
`
const StyledSignSnikers = styled.svg`
    width:30px;
    height:30px;
    margin-left:10px;
    
    path{
        stroke:${({theme})=>theme.colours.accent.default};
    }
`

const SignSnikers = ({onClick}) => {
    
    return (
        <StyledWrapper>
        <a href={"https://www.pawel-drojecki.com/"} target="_blank" rel="noreferrer">
            <p>created by</p>
            <StyledSignSnikers onClick={onClick} width="187" height="186" viewBox="0 0 187 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.4196 47.1435C32.1948 59.2726 24.9599 75.3383 24.9599 93.1596C24.9599 119.439 40.6001 142.102 61.3473 153.433C61.3473 156.891 61.3472 174.286 61.3472 176.308C27.8326 163.647 3.99998 131.143 3.99998 93C3.99999 43.8452 44.0048 4.00001 93.1596 4.00002C142.314 4.00002 182.213 43.8452 182.213 93C182.213 142.155 141.995 182 92.8936 182C88.7441 182 84.1691 181.734 80.4453 181.202C80.4453 181.149 80.4453 181.096 80.4453 181.096L80.4453 118.961C80.4453 118.961 81.5092 118.961 93.2128 118.961C107.417 118.961 118.907 107.895 118.907 93.6916C118.907 79.4878 107.417 68.4226 93.2128 68.4226L81.7752 68.4226" stroke="#363636" strokeWidth="7.98295" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M125.185 32.9396C115.663 27.8858 104.81 25.0131 93.2663 25.0131C80.818 25.0131 69.1677 28.3646 59.1665 34.1632" stroke="#363636" strokeWidth="7.98295" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M102.947 160.348C135.93 155.614 161.252 127.259 161.252 93C161.252 83.6372 159.39 74.7531 155.986 66.6671" stroke="#363636" strokeWidth="7.98295" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M102.894 138.91C124.12 134.441 140.079 115.609 140.079 93.0532C140.079 67.1458 119.066 46.1859 93.212 46.1859C67.3579 46.1859 46.3447 67.199 46.3447 93.0531C46.3447 114.385 60.6017 132.42 80.1253 138.059" stroke="#363636" strokeWidth="7.98295" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M138.856 42.0365C140.665 43.4196 142.686 45.1752 144.761 47.5159C146.836 49.8034 148.379 51.9845 149.549 53.8996L166.147 42.0897" stroke="#363636" strokeWidth="7.98295" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            
            </StyledSignSnikers>
        </a>
        </StyledWrapper>
    )
  }
  
  export default SignSnikers