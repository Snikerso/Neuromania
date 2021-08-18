import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: relative;
    display:grid;
    grid-template-columns: 300px 1fr;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;

    @media  (max-width: ${({ theme }) => theme.media.media700}) {
        grid-template-columns:  1fr;
        width: 100%;
        justify-items: center;
        text-align: center;
    }
`

export const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export const StyledImage = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
`