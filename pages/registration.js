import * as React from "react"
import styled from "styled-components"
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"
import * as Accordion from '/src/components/organisms/WordsCompound/Accordion';
import { importantDatesData } from "/src//global/constants/data";
import Link from "/src/components/atoms/interface/Link/Link" 
const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
  > * {
    margin-bottom: 10px;
  }

    @media (min-width: ${({theme})=>theme.media.media1000} ){
      width: 100%;
        align-items: flex-start;
    }
`
const WrapperPaymentInfo = styled.div`
margin:20px 0;

`

const StyledWrapperAccordion = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    align-self: center;
    margin-top:30px;

    @media (min-width: ${({theme})=>theme.media.media1000} ){
        display:none;
    }
`
export default function VenuePage() {
  return (
    <StyledWrapper>
      <HeadPage text={"Registration"}/>

      <Paragraph text={"The conference fee is:"}/>
      <ul>
        <li>50 zł/12 € - passive participant</li>
        <li>80 zł/18 € - active participant</li>
      </ul>
       
      <Paragraph text={`Please fill out the form below to register for the conference `}/>
        <Link isImportant target={"_blank"} href={"https://forms.gle/WvqBYPtSnmE5GP5A7"} text={"https://forms.gle/WvqBYPtSnmE5GP5A7"}/>
        <Link target={"_blank"} href={"/assets/files/Regulations.pdf"} text={"Regulations of the Scientific Conference"}/>
        <Link target={"_blank"} href={"/assets/files/Rodo_eng.pdf"} text={"Information on the processing of personal data"}/>
        <Link target={"_blank"} href={"/assets/files/Rodo_pl.pdf"} text={"Informacja o przetwarzaniu danych osobowych"}/>
        
            <WrapperPaymentInfo>
          <Paragraph text={`Participation fees ought to be transferred to the following bank account:`}/>
          <Paragraph text={`Uniwersytet Mikołaja Kopernika w Toruniu `}/>
          <Paragraph text={`Bank Millenium S.A. Warszawa `}/>
          <Paragraph text={`45 1160 2202 0000 0000 3174 8579 `}/>
          <Paragraph text={`With an addition: neuromania, a participant's full name.   `}/>
          <Paragraph text={`Foreign transfers should also include:`}/>
          <Paragraph text={`SWIFT: BIGBPLPWXXX `}/>
          <Paragraph text={`IBAN: PL45 1160 2202 0000 0000 3174 8579`}/>
    </WrapperPaymentInfo>
        <StyledWrapperAccordion>

          
        <h2>Important Dates</h2>
        <Accordion.Wizzard>
            {importantDatesData.map(item =><Accordion.Item  key={item.id} item={item}/> )}
        </Accordion.Wizzard>
      </StyledWrapperAccordion>
    </StyledWrapper>
  )
}

 