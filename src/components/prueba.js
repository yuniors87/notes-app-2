import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin: 1rem 0;
  background: ${props => props.theme.background2};
  color: ${props =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`;

class Prueba extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledH1 primary>Esto es la prueba</StyledH1>
        <StyledH1>Esto es la prueba</StyledH1>
        <br />
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </React.Fragment>
    );
  }
}

export default Prueba;
