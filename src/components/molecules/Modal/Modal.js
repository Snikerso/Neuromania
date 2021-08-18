import React from 'react';
import { Overlay, StyledWrapper } from './Styles';
import ReactDOM from 'react-dom';
import ButtonClose from '../../atoms/buttons/ButtonClose/ButtonClose';


const portalDiv = typeof document !== `undefined` ? document.getElementById('portal') : null

const Modal= ({
  children,
  isOpen,
  setIsOpen,
}) => {
  if (isOpen === false) return null;

  return portalDiv
    ? ReactDOM.createPortal(
        <>
          <Overlay  />
          <StyledWrapper >
            <ButtonClose onClick={() => setIsOpen(false)} />
            {children}
          </StyledWrapper>
        </>,
        portalDiv
      )
    : null;
};

export default Modal;
