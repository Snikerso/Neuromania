import * as React from "react"
import styled from "styled-components"
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"
import * as Accordion from '/src/components/organisms/WordsCompound/Accordion';
import { importantDatesData } from "/src//global/constants/data";

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
      <Paragraph text={"Registration will be available soon."}/>

        <StyledWrapperAccordion>
        <h2>Important Dates</h2>
        <Accordion.Wizzard>
            {importantDatesData.map(item =><Accordion.Item  key={item.id} item={item}/> )}
        </Accordion.Wizzard>
      </StyledWrapperAccordion>
    </StyledWrapper>
  )
}

 