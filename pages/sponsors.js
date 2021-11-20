import * as React from "react"
import { Image } from "../src/components/atoms/Image";
import HeadPage from "/src/components/atoms/heads/HeadPage"
import Paragraph from "/src/components/atoms/paragraphs/Paragraph"
import {WrapperComponent} from "/src/components/atoms/wrappers";
import {mediaMinScreen} from "/src/global/helpers/css"
export default function RegistrationPage() {
  const sponsors = [
    {id:0, src: "/assets/images/sponsors/ptbun.png"},
    {id:3, src: "/assets/images/sponsors/mp_logo_new.png"},

    {id:4, src: "/assets/images/sponsors/kopalniawiedzy-logo.png"},
    {id:1, src: "/assets/images/sponsors/tygiel.png"},
    {id:2, src: "/assets/images/sponsors/neuroaktywacja.jpg"},
  ]
  return (
    <div>
      <HeadPage text={"Sponsors"}/>
      <WrapperComponent cssProp={`
        display:flex;
        flex-wrap:wrap;
        gap:120px;
      `}> 
      {sponsors.map( item =>
        <Image cssProps={`
          height:200px;
          width:300px;
          `}
          image={{src:item, alt:"Logo"}} priority objectFit={"contain"}  layout="fill" />  
        )}

      </WrapperComponent>
    </div>
  )
}

 