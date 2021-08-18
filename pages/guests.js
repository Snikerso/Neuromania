import * as React from "react"
import {sheduleData} from '/src/global/constants/data';
import HeadPage from "/src/components/atoms/heads/HeadPage"
import {GuestList} from "/src/components/organisms/GuestList/GuestList"

export default function GuestsPage() {

  const allAuthorsKeynotes = sheduleData.map(item => item.author).reduce((acc, cur) => {return acc.concat(cur) }).filter(item=>item.keynote ===true)

  return (
    <div>
      <HeadPage text={"Guests"} />
      <GuestList list={allAuthorsKeynotes}/>
    </div>
  )
}

 