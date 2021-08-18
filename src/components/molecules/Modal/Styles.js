import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  background-color: rgba(0, 0, 0, 0.7);
  width:100vw;
  height:100vh;
`;

export const StyledWrapper = styled.div`
  position: fixed;
  color: black;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colours.black};
  box-shadow: 10px 10px 20px  rgba(0, 0, 0, 0.7);
  border-radius:10px;
  width: 100%;
  height:100%;
  overflow-y:scroll;
  top: 0;
  left: 0;
  color: white;
  padding:70px 20px 20px 20px;

  @media(min-width: ${({theme})=>theme.media.media700}){
    width:80%;
    height:70%;
    top:15%;
    left:50%;
    transform:translate(-50% );
  }
  @media(min-width: ${({theme})=>theme.media.media1000}){
    width:60%;
    padding:70px 100px 20px 50px;
  }
`;
