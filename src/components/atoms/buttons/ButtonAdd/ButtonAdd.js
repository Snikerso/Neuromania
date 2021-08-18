import React from 'react'
import styled, { css } from 'styled-components'
import IconPlus from '../../interface/Icons/IconPlus'

const StyledButtonAdd = styled.button`
    background:none;
    border:none;
    outline:none;
    display:flex;
    align-items:center;
    justify-content:center;


    svg{    
            transform:rotateZ(0deg);
            cursor:pointer;
            transform: scale(1);
            transform-origin:50% 50%;

            :hover{
                    transform: scale(1.1);
                }
        }        



    ${({isAdded})=>

        isAdded 
        ? css`



            svg{
                transform:rotateZ(-180deg);
                transition:0.4s;

                .vertical-line {
                    opacity: 0;
                    transition:0.4s;
                }
            :active{
                transform:scale(0.9)
            }
            }
        `

        :   css`
        
            svg{

                transform:rotateZ(180deg);
                transition:0.4s;
 
                .vertical-line {
                    opacity: 1;
                    transition:0.4s;
                }
                :active{
                transform:scale(1.2)
            }
            }
        
        `
    }
`

const ButtonAdd = ({onClick, isAdded}) => {

    return (
        <StyledButtonAdd isAdded={isAdded} onClick={onClick}>
            <IconPlus/>
        </StyledButtonAdd>
    )
  }
  
export default ButtonAdd


