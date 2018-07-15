import React, { Component } from 'react';
import Prueba from './components/prueba';
import Prueba2 from './components/prueba2';
import styled, { ThemeProvider } from 'styled-components';
import {theme1} from './components/theme'

const Wrapper = styled.section`
  background: ${props => props.theme.background};
  height: 100vh;
  padding: 1rem;
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme1}>
        <Wrapper>
          <Prueba />
          <Prueba2 />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
