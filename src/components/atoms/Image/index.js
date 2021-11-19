import React from 'react';
import NextImage from 'next/image';
import { Wrapper} from "./Styles";


export const Image= ({ cssProps, objectFit="cover",priority, image, ...rest}) => (

  
  <Wrapper cssProps={cssProps}>
    <NextImage title={image.alt} src={image.src}  alt={image.alt} priority={priority} objectFit={objectFit}  layout="fill"/>
  </Wrapper>
)