import React from 'react'
import styled from 'styled-components'
import SheduleItem from '/src/components/molecules/SheduleItem/SheduleItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;

    @media (min-width: ${({ theme }) => theme.media700}) {
        flex-direction:row;
        flex-wrap:wrap;
    }
`

const SheduleList = React.forwardRef((props,ref)=> {
    const {list, isMyShedule} = props;
    return (
        <>          
            <StyledWrapper ref={ref}>
                {list?.sort(function(a, b){return a.id - b.id}).map(item=> <SheduleItem key={item.id} item={item} isMyShedule={isMyShedule}/> )}
            </StyledWrapper>
        </>
    )
})
  
export default SheduleList;