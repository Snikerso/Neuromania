import * as React from "react"
// import Shedule from "/src/components/organisms/Shedule";
// import {sheduleData} from '/src/global/constants/data';
import HeadPage from "/src/components/atoms/heads/HeadPage";


export default function PriceListPage() {

  return (
    <>
      <HeadPage text={"Schedule"} />
      {/* <Shedule list={sheduleData}/> */}
      <p>
        Schedule will be available soon 
      </p>
      <p>

        This year we will be focusing on areas such as: 
          <ul>
          <li>relation between language and cognition</li>  
          <li>social cognition</li>  
          <li>communication as a manifestation of cognition</li>  
        </ul>
      </p>
    </>
  )
}
