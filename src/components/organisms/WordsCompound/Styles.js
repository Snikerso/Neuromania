import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  width:80%;
  border: 2px solid ${({theme})=>theme.colours.accent.default};
  border-radius:10px;

  :hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colours.accent.default};
  }
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align:center;
  padding:10px 20px;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  font-size:18px;
  padding:10px 5px;
`;

export const StyledArrow = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -1px;
  right: -30px;
`;
