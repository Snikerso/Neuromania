import React from 'react'
import {StyledPriceHeader,StyledWrapper,StyledWrapperInner} from './Styles'
import SheduleItem from '../../molecules/SheduleItem/SheduleItem'



const PriceList = ({list}) => {
    const day = list.map(item=> {
        if(item.day.includes("1")){
            return item
        }
    })

    let grupedByDay = list.reduce((r, a) => {
        r[a.day] = [...r[a.day] || [], a];
        return r;
       }, {});


    const allAuthors = list.map(item=> item.author).reduce((acc, cur) =>[acc].concat(cur))
    
    const allAuthorsUnique = allAuthors.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj["name"]).indexOf(obj["name"]) === pos;
    });

    const allPapers = list.map(item => item.paper).reduce((acc,cur) =>[acc].concat(cur))
    
    return (
        <>
            <StyledWrapper>
                <h2>Conference Shedule</h2>
                {Object.values(grupedByDay).map((listItem, key) => {

                    return(
                        <>
                            <StyledWrapperInner>
                                <StyledPriceHeader>{"DAY " + (key + 1)}</StyledPriceHeader>

                                {listItem.map(item =>
                                {    
                                    return(
                                        <>
                                            <SheduleItem item={item}/> 
                                        </>
                                    )
                                })}              
                            </StyledWrapperInner>
                        </>
                    )
                })}
            </StyledWrapper>
        </>
    )
  }
  
export default PriceList


