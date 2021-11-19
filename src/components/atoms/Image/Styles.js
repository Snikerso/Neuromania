import styled, {  css, CSSProp } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    ${({cssProps}) => cssProps};
`