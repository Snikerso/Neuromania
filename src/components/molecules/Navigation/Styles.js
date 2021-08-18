import styled from 'styled-components'

export const StyledWrapper = styled.nav`
    position: relative;
    display:flex;
    flex-direction:row;
    text-align:center;
    width:100%;
    height:100%;
    border-top:2px solid ${({ theme }) => theme.colours.accent.default};

    > *{
      margin-right: 0px 20px ;
    }

    @media  (max-width: ${({ theme }) => theme.media.media700}) {
        display:none;
    }

`

export const NavActiveSlider= styled.div`
  position:absolute;
  width:120px;
  height:100%;
  left:  ${({width})=>width};
  background-color:${({theme})=>theme.colours.accent.opacity08};
  opacity:100%;
  box-shadow: 4px 4px 11px ${({theme})=>theme.colours.accent.opacity08};
  transition: left 0.3s ease-in;
`