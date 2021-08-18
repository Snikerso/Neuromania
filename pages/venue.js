import * as React from "react"
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"

export default function RegistrationPage() {
  return (
    <div>
      <HeadPage text={"Venue"}/>
      <Paragraph text={"It is possible that the conference will be held in hybrid mode. This means that some of the lectures will be held remotely and some stationary."}/>
    </div>
  )
}

 