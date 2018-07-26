import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Navbar from '../components/UI/navbar';
import { theme1 } from '../components/UI/themes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Notes from '../components/Notes';
import Companies from '../components/Companies';
import Systems from '../components/Systems';

injectGlobal`
  @font-face {
    font-family: sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: sans-serif;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
`;
const Container = styled.div`
  background: ${props => props.theme.mainBackground};
  grid-column: 1;
  grid-row: 2 / 3;
`;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme1}>
          <Wrapper>
            <Navbar />
            <Container>
              <Title>Este es el main component!</Title>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/companies" component={Companies} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/systems" component={Systems} />
              </Switch>
            </Container>
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
