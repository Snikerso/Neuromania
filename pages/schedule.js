import * as React from "react"
import { Image } from "../src/components/atoms/Image";
import { WrapperComponent } from "../src/components/atoms/wrappers";
import HeadPage from "/src/components/atoms/heads/HeadPage";
import {mediaMinScreen} from "/src/global/helpers/css"

export default function PriceListPage() {

  return (
    <WrapperComponent cssProps={`

    `}>
      <HeadPage text={"Schedule"} />
      
      <Image cssProps={`
        height:420px;
        width:300px;
        ${mediaMinScreen({endpoint:"500px", cssProp:`
          height:690px;
          width:500px;
        `})}
        ${mediaMinScreen({endpoint:"1000px", cssProp:`
          height: 1100px;
          width: 750px;
        `})}
      `}
      image={{src:"/assets/images/program/Neuromania-schedule.png", alt:"Neuromania schedule"}} priority   layout="fill" />
      
      {/* <Shedule list={sheduleData}/> */}
      {/* <p>
        Schedule will be available soon 
      </p>
      <p>

        This year we will be focusing on areas such as: 
          <ul>
          <li>relation between language and cognition</li>  
          <li>social cognition</li>  
          <li>communication as a manifestation of cognition</li>  
        </ul>
      </p> */}
    </WrapperComponent>
  )
}