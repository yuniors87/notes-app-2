import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin: 1rem;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
`;
const Wrapper = styled.section`
  background: ${(props) => props.theme.secondaryColor};
  height: 100vh;
  padding: 1rem;
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

class Prueba extends Component {
  render() {
    return (
      <Wrapper>
        <StyledH1>Esto es la prueba</StyledH1>
        <StyledH1 primary>Esto es la prueba</StyledH1>
        <br />
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </Wrapper>
    );
  }
}

export default Prueba;
