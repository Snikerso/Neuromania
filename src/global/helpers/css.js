import { css, CSSProp } from 'styled-components';

export const minMaxResponsive = ({ valueMin, valueMax, endpointMin, endpointMax }) => `calc(${valueMin}px + (${valueMax} - ${valueMin}) * ((100vw - ${endpointMin}px) / (${endpointMax} - ${endpointMin})))`;
export const mediaMinScreen = ({ endpoint, cssProp }) => `

    @media only screen  ${endpoint && ` and (min-width: ${endpoint}) `}  {
        ${cssProp}
    }
`;
export const mediaMinMaxScreen = ({ endpoint, endpointMax, cssProp }) => `

    @media only screen and (min-width: ${endpoint}) and (max-width: ${endpointMax})  {
        ${cssProp}
    }
`;
export const mediaMaxScreen = ({ endpoint, cssProp }) => `

    @media only screen  ${endpoint && ` and (max-width: ${endpoint}) `}  {
        ${cssProp}
    }
`;