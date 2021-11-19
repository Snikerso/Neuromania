import React from 'react';
import styled, { css, CSSProp } from 'styled-components';


export const WrapperComponent = styled.div`
    ${({cssProp})=> css`${cssProp}`}
`
