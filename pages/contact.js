import * as React from "react"
import styled from "styled-components"
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Link from "/src/components/atoms/interface/Link/Link"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"

export default function ContactPage() {

  const StyledWrapperWelcomeInfo = styled.div`
  margin-bottom: 50px;
  h3{
    margin-bottom: 30px;
  }
  p{
    margin-bottom: 20px;
  }
`
  return (
    <>
      <HeadPage text={"Contact"}/>
      <StyledWrapperWelcomeInfo>
        <Paragraph text={"The Conference is organised by Student's Cognitive Science Association and Cognitive Science Department at the Faculty of Philosophy and Social Science, Nicolaus Copernicus University, Toruń, Poland."}/>
        <Paragraph text={"If you have any questions contact us: neuromania@umk.pl"}/>
        <p> You can also find the event on <Link target={"_blank"} href={"https://www.facebook.com/neuromania.conference"} text={"Facebook"}/> and <Link target={"_blank"} href={"https://twitter.com/neuromaniac?lang=en"} text={"Twitter"}/> !</p>
      </StyledWrapperWelcomeInfo>
    </>
  )
}

 