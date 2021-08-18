import  React, { useState } from "react"
import styled from "styled-components"
import Bar from "/src/components/atoms/interface/Bar/Bar"
import ButtonClose from "/src/components/atoms/buttons/ButtonClose/ButtonClose"
import NavItem from "/src/components/atoms/interface/NavItem/NavItem"
import {navigation} from "/src/global/constants/routes";


const NavPanel = styled.div`
    position: absolute;
    display:flex;
    flex-direction:column;
    z-index: 1000;
    padding: 40px 10px 40px 10px;
    width: 100%;
    top: 85px;
    border-bottom: 2px solid white;
    background-color: ${({ theme }) => theme.colours.black};

    a{
        font-size:40px;
        text-align:left;
    }
    @media (min-width: ${({ theme }) => theme.media.media700}) {
        display:none;
    }
`

const StyledNavigation = styled.div`
    /* margin-top:60px ; */
`

const NavigationBar = ({location}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen ?<ButtonClose onClick={()=>setIsOpen(prev =>!prev)}/> :<Bar onClick={()=>setIsOpen(prev =>!prev)}/>}
            {isOpen &&   (
                <>
                    <NavPanel>
                    
                        <StyledNavigation>
                            {navigation.map(({to, text,id} )=> (<NavItem key={id} id={"nav-item-line"} to={to} text={text} location={location} />) )}
                        </StyledNavigation>
                    </NavPanel>
                </>
            )}
        </>
    )
}

export default NavigationBar
