import { useRouter } from "next/router"
import React, {  useEffect,  useRef } from "react"
import {StyledWrapper, NavActiveSlider} from "./Styles"
import NavItem from "/src/components/atoms/interface/NavItem/NavItem"
import {navigation} from "/src/global/constants/routes"


const init = (location)=>{
  switch(location){
    case "/":
      return `${0 * 120}px`
    case "/shedule":
      return `${1 * 120}px`
    case "/guests":
      return `${2 * 120}px`
    case "/venue":
      return `${3 * 120}px`
    case "/contact":
      return `${4 * 120}px`
    case "/registration":
      return `${5 * 120}px`
    case "/sponsors":
      return `${6 * 120}px`
  }
}


const Navigation = ({location,width}) => {
  const navRef = useRef()
  const router = useRouter()

  useEffect(()=>{
    navRef.current.style.left = init(location)
  },[router])

  

  return (
    <StyledWrapper >
      <NavActiveSlider ref={navRef} width={width}  />
      {navigation.map((item )=>
       (<NavItem  key={item.id} id={"nav-item-line"} to={item.to} text={item.text}/>) )}
    </StyledWrapper>
  )
}

export default Navigation