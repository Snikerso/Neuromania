import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useShedule } from '/src/global/state/useShedule';
import ButtonAdd from '../../atoms/buttons/ButtonAdd/ButtonAdd';
import ButtonDelete from '../../atoms/buttons/ButtonDelete/ButtonDelete';

const StyledWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    ${({isMyShedule})=>
        isMyShedule && css`
            /* background-color: red; */
    `}

    @media (min-width:${({theme})=>theme.media.media1000} ){
        justify-content:flex-start;
        align-items:flex-start;
    }
`;

const StyledMeta = styled.p`
    font-size:20px;
    margin-left:5px;

    span {
        color: ${({theme})=>theme.colours.accent.default};
        font-weight:700;
    }
`;

const StyledWrapperInner = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:100%;
    margin-bottom:10px;
    padding:14px 20px;
    border: 2px solid ${({theme})=>theme.colours.accent.default};
    border-radius:10px;

    button{
        position:absolute;
        right:0;
        bottom:5px;
    }

    ${({isKeyPaper})=>
    isKeyPaper && css`
        background-color:  ${({theme})=>theme.colours.accent.opacity03};
    `}

    @media (min-width:${({theme})=>theme.media.media1000} ){
        padding:20px 45px;
    }

    @media print {
        width:90%;
    }
`;


const SheduleItem = ({item, isKeyPaper, isMyShedule}) => {
    const {sheduleState, sheduleDispatch} = useShedule()
    const findedItem =Boolean(sheduleState.find(sheduleItem =>sheduleItem.id === item.id))
    const [isAdded, setIsAdded ]= useState(findedItem)


    function handleClick(){
        if(isAdded === true){
           return (
               sheduleDispatch({type:"DELETE",payload:{item:item}}),
               setIsAdded(false)
           )
        }else{
            return (
                sheduleDispatch({type:"ADD",payload:{item:item}}),
                setIsAdded(true)
            )
        }
    }
    return (
            <StyledWrapper isMyShedule={isMyShedule}>
                <StyledMeta>{item.author[0].keynote && <span>KEYNOTE: </span>}{item.author.map(item =>item.name)}; {item.time_start}</StyledMeta>
                <StyledWrapperInner isKeyPaper={item.author[0].keynote}>
                    <h3>{item.paper.title}</h3>
                    <div>{item.paper.abstract}</div>
                {isMyShedule 
                    ? <ButtonDelete onClick={() => sheduleDispatch({type:"DELETE",payload:{item:item}})} /> 
                    : <ButtonAdd isAdded={isAdded} onClick={()=>handleClick()}/>}
                
                </StyledWrapperInner>
            </StyledWrapper>
    )
}
  
  export default SheduleItem


