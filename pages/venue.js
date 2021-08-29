import * as React from "react"
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"

export default function RegistrationPage() {
  return (
    <div>
      <HeadPage text={"Venue"}/>
      <Paragraph text={"The conference will be held in online mode."}/>
    </div>
  )
}

 