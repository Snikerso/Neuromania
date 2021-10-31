import * as React from "react"
import styled from 'styled-components';
import SocialList from "/src/components/molecules/SocialList/SocialList"
import Logo from "/src/components/atoms/interface/Logo/Logo";
import * as Accordion from '/src/components/organisms/WordsCompound/Accordion';
import { importantDatesData } from "/src/global/constants/data";
import SignSnikers from "/src/components/atoms/interface/SignSnikers/SignSnikers";
import Link from "../../atoms/interface/Link/Link";


const StyledAside = styled.aside`
    position: fixed;
    top:0px;
    left:0px;
    display:none;
    background-color:${({theme})=>theme.colours.black};
    box-shadow: 7px 4px 36px #013034;
    height: 100vh;
    width:250px; 
    
    @media (min-width:${({theme})=>theme.media.media1000} ){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
    }
`
const StyledWrapperAccordion = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:30px;

`
const WrapperLinks = styled.div`
position: absolute;
bottom:10px;
display: flex;
flex-direction: column;
gap:10px;
padding: 10px;
padding-left: 25px;

`

const Aside = () => {

  return (
      <StyledAside>
          <Logo/>
          <SocialList/>
          <StyledWrapperAccordion>
            <h2>Important Dates</h2>
                <Accordion.Wizzard>
                    {importantDatesData.map(item =><Accordion.Item  key={item.id} item={item}/> )}
                </Accordion.Wizzard>
          </StyledWrapperAccordion>
            <WrapperLinks>
                <Link target={"_blank"} href={"/assets/files/Regulations.pdf"} text={"Regulations of the Scientific Conference"}/>
                <Link target={"_blank"} href={"/assets/files/Rodo_eng.pdf"} text={"Information on the processing of personal data"}/>
                <Link target={"_blank"} href={"/assets/files/Rodo_pl.pdf"} text={"Informacja o przetwarzaniu danych osobowych"}/>
            </WrapperLinks>
          {/* <SignSnikers/> */}
      </StyledAside>
  )
}

export default Aside