import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  color: ${props => props.theme.primaryColor};
`;
const Parrafo = styled.p`
  color: ${props => props.theme.fontColor};
  background: ${props => props.theme.background2};
  padding: 10px;
  border-radius: 10px;
`;
const StyledButton = styled.button`
  border: 2px solid
    ${props =>
      props.primary ? props.theme.primaryColor : props.theme.defaultColor};
  background: ${props =>
    props.primary
      ? props.theme.primaryColor
      : props.theme.defaultBackgroundColor};
  color: ${props => props.theme.defaultColor};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  &:hover {
    background: ${props => props.theme.primaryColor};
  }
`;

const Prueba2 = () => {
  return (
    <div>
      <Titulo>Esto es prueba 2</Titulo>
      <Parrafo>
        Bacon ipsum dolor amet pork loin andouille pancetta capicola spare ribs
        beef ribs drumstick. Jerky bresaola beef ribs, shoulder turducken
        meatball kielbasa rump meatloaf salami pork loin short loin beef filet
        mignon pig. Salami ham hock alcatra filet mignon jowl, beef ribs sirloin
        turducken meatball biltong tenderloin capicola hamburger strip steak.
        Brisket alcatra sausage drumstick chicken sirloin ball tip pork. Cupim
        beef ribs jerky leberkas turkey, ham hock frankfurter burgdoggen. Strip
        steak shoulder fatback short ribs. Beef ribs chicken biltong corned beef
        rump t-bone, capicola pork belly tongue short loin sirloin andouille
        short ribs bacon.
      </Parrafo>
      <Parrafo>
        Bacon ipsum dolor amet pork loin andouille pancetta capicola spare ribs
        beef ribs drumstick. Jerky bresaola beef ribs, shoulder turducken
        meatball kielbasa rump meatloaf salami pork loin short loin beef filet
        mignon pig. Salami ham hock alcatra filet mignon jowl, beef ribs sirloin
        turducken meatball biltong tenderloin capicola hamburger strip steak.
        Brisket alcatra sausage drumstick chicken sirloin ball tip pork. Cupim
        beef ribs jerky leberkas turkey, ham hock frankfurter burgdoggen. Strip
        steak shoulder fatback short ribs. Beef ribs chicken biltong corned beef
        rump t-bone, capicola pork belly tongue short loin sirloin andouille
        short ribs bacon.
      </Parrafo>
      <Parrafo>
        Bacon ipsum dolor amet pork loin andouille pancetta capicola spare ribs
        beef ribs drumstick. Jerky bresaola beef ribs, shoulder turducken
        meatball kielbasa rump meatloaf salami pork loin short loin beef filet
        mignon pig. Salami ham hock alcatra filet mignon jowl, beef ribs sirloin
        turducken meatball biltong tenderloin capicola hamburger strip steak.
        Brisket alcatra sausage drumstick chicken sirloin ball tip pork. Cupim
        beef ribs jerky leberkas turkey, ham hock frankfurter burgdoggen. Strip
        steak shoulder fatback short ribs. Beef ribs chicken biltong corned beef
        rump t-bone, capicola pork belly tongue short loin sirloin andouille
        short ribs bacon.
      </Parrafo>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Default Button</StyledButton>
    </div>
  );
};

export default Prueba2;
