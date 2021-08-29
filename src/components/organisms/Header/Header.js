import  React from "react"
import styled from "styled-components"
import Navigation from "/src/components/molecules/Navigation/Navigation"
import NavigationBar from "/src/components/molecules/NavigationBar/NavigationBar"
import LogoName from "/src/components/atoms/interface/Logo/LogoName"
import Logo from "/src/components/atoms/interface/Logo/Logo"
import { useRouter } from "next/router"

const StyledHeader = styled.header`
    position: relative;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px;
    background-color:${({theme})=>theme.colours.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width:${({theme})=>theme.media.media700} ){
      flex-direction:column;
      justify-content:flex-start;
      align-items:flex-start;
      .logo{
        display:none;
      }
    }
    @media (min-width:${({theme})=>theme.media.media1000} ){
      margin-left: 300px;
      background-color:transparent ;
      box-shadow: none;
    }
`


const Header = () => {
  const router = useRouter()
  const [width, setWidth] = React.useState()
  console.log(router)
  return (
    <StyledHeader>
        <Logo className="logo"/>
        <LogoName text={"NEUROMANIA CONFERENCE 2021"}/>
        <Navigation location={router.pathname} width={width} setWidth={setWidth}/>
        <NavigationBar location={router.pathname} />
    </StyledHeader>
  )
}

export default Header;