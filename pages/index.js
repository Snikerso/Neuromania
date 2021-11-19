import * as React from "react";
import styled from "styled-components";
import * as Accordion from '/src/components/organisms/WordsCompound/Accordion';
import { importantDatesData } from "/src//global/constants/data";
import HeadPage from "/src/components/atoms/heads/HeadPage";
import Paragraph from "/src/components/atoms/paragraphs/Paragraph";



const StyledWrapperWelcomeInfo = styled.div`
  margin-bottom: 50px;
  h3{
    margin-bottom: 30px;
  }
  p{
    margin-bottom: 20px;
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

export default function IndexPage () {

  return (
    <>
      <HeadPage text={"Home"}/>
      <StyledWrapperWelcomeInfo>
        <h3>Welcome!</h3>
        <Paragraph text={"We would like to invite you to the second international (remote) edition of the Neuromania Conference. This year we will be focusing on areas such as social cognition, relation between language and cognition,  communication as a manifestation of cognition. The event will take place on 20-21st of November 2021 and will be filled with lectures from our keynote speakers, students’ sessions, discussions and workshops."}/>
        <Paragraph text={"Neuromania Conference has been organised by Cognitive Science Student Association at Nicolaus Copernicus University in Toruń, Poland since 2013. The first iterations were held on a national level but since the event’s popularity grew in 2019, we have decided to take it to the international scene. Due to the COVID-19 pandemic in 2020 we were forced to postpone the conference but we’re coming back in the fall of 2021 with fresh energy."} />
        <Paragraph text={"See you there!"}/>
      </StyledWrapperWelcomeInfo>
      <Paragraph text={<div style={{marginBottom:"40px"}}>
        <h4>Organising Committee</h4>
        <ul style={{marginBottom:"15px"}}>
          <li>Alicja Terelak,</li>
          <li>Michalina Zawartowska,,</li>
          <li>Adrianna Sänger,</li>
          <li>Julia Chrząstkowska,</li>
          <li>Kinga Petryka,</li>
          <li>Klaudia Krupa,</li>
          <li>Małgorzata Czerwonka,</li>
          <li>Natalia Pawłowska,</li>
          <li>Paweł Drojecki,</li>
          <li>Weronika Sójka,</li>
          <li>Piotr Bekier,</li>
          <li>Remigiusz Depta</li>
        </ul>
        <h4>Organising Committee</h4>
        <ul style={{marginBottom:"15px"}}>
          <li>dr hab. Anita Pacholik-Żuromska, prof. UMK,</li>
          <li>dr hab. Arkadiusz Gut, prof. UMK,</li>
          <li>prof. dr hab. Urszula Żegleń,</li>
          <li>dr Paweł Gładziejewski,</li>
          <li>dr Przemysław Nowakowski</li>
        </ul>
        <h4>Supervisor</h4>
        <p>dr Tomasz Komendziński</p>
      </div>}/>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/A2HjgvTnGwc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
      <StyledWrapperAccordion>
        <h2>Important Dates</h2>
        <Accordion.Wizzard>
            {importantDatesData.map(item =><Accordion.Item  key={item.id} item={item}/> )}
        </Accordion.Wizzard>
      </StyledWrapperAccordion>
    </>
 )
}