import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const animationIn = keyframes`
  0% {
    width: 0px;
    background: green;
  }
  100% {
    width: 200px;
    background: blue;
  }
`;
const animationOut = keyframes`
  0% {
    width: 200px;
    background: blue;
  }
  100% {
    width: 0px;
    background: green;
  }
`;

const CoolBox = styled.div`
  display: inline-block;
  background: green;
  height: 100px;
  position: relative;
  animation-name: ${props => props.animationName};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isCool: null };
    this.toggleCoolness = this.toggleCoolness.bind(this);
  }

  toggleCoolness() {
    const cool = false;
    if (this.state.isCool === null) {
      this.setState({ isCool: true });
    } else {
      this.setState({ isCool: !this.state.isCool });
    }
  }
  render() {
    const { isCool } = this.state;
    return (
      <div>
        <h3>Wellcome to home</h3>
        <button onClick={this.toggleCoolness}>Click Me</button>
        {this.state.isCool !== null ? (
          <CoolBox
            animationName={this.state.isCool ? animationIn : animationOut}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Home;
