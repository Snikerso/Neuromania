import React, { Children, useState } from 'react';
import { AccordionProvider, useAccordionContext } from './context';

import {
  StyledWrapper,
  StyledSummary,
  StyledDetails,
} from './Styles';

const Item= (props) => {
  const {
    index,
    isActive,
    item,
  } = props;

  const { currentElement, setCurrentElement } = useAccordionContext();

  const handleToogleDetail = (index) => {
    if (index != currentElement) {
      setCurrentElement(index);
    } else {
      setCurrentElement(null);
    }
  };


    return (
      <>
        <StyledWrapper onClick={() => handleToogleDetail(index)}>

            <StyledSummary >
              <h4>{item.title}</h4>
               </StyledSummary>
            {isActive ? (
              <StyledDetails>
                <h5>{item.subtitle}</h5>
                <div>{item.description}</div>
              </StyledDetails>
            ) : null}

        </StyledWrapper>
      </>
    );
  } 


const Wizzard = ({ children }) => {
  const [currentElement, setCurrentElement] = useState(0);

  const childrenWithProps = Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      isActive: index === currentElement,
    });
  }); 

  return (
    <AccordionProvider
      value={{ currentElement, setCurrentElement }}>
      {childrenWithProps}
    </AccordionProvider>
  );
};

export { Item, Wizzard };
