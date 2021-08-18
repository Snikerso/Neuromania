import React from 'react';
import Paragraph from '../../atoms/paragraphs/Paragraph';
import Link from '../../atoms/interface/Link/Link';
import { StyledWrapper, StyledWrapperInner,StyledImage } from './Styles';
import Image from 'next/image'
export const GuestItem = ({item}) => {
    let {title, price, time, slug, img } = item

    return (
        <StyledWrapper>
            <StyledImage>
            <Image src={`/assets/images/guests/${img}`} objectFit={"contain"} layout={"fill"}/>
            </StyledImage>
            <StyledWrapperInner>
                <h1>{item.name}</h1>
                <Paragraph text={item.bio} />
                <Link  href={item.link} text={item.link} target={"_blank"}/>
            </StyledWrapperInner>
            </StyledWrapper>
  )
}