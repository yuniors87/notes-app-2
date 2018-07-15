import React, { Component } from 'react';
import Prueba from './components/prueba';
import { ThemeProvider } from 'styled-components';

const theme1 = {
  primaryColor: 'red',
  secondaryColor: 'green',
  borderColor: '#ccc'
};
// const theme2 = {
//   primaryColor: 'yellow',
//   secondaryColor: 'blue',
//   borderColor: '#ccc'
// };

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme1}>
        <Prueba />
      </ThemeProvider>
    );
  }
}

export default App;
