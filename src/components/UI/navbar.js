import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div`
  background: ${props => props.theme.navbarBackround};
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  grid-column: 1;
  grid-row: 1 / 2;
  @media screen and (max-width: 640px) {
    padding: 0 0.5rem;
  }
`;
const StyledTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 2rem;
  cursor: pointer;
`;
const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style-type: none;
  font-size: 16px;
  @media screen and (max-width: 640px) {
    opacity: ${props => props.display};
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
    right: 0;
    top: 50px;
    position: absolute;
    margin: 0;
    padding: 0;
    transition: visibility 0s linear 0.15s, opacity 0.15s linear;
  }
`;
const StyledListItem = styled.li`
  @media screen and (max-width: 640px) {
    display: flex;
    border-top: 1px ${props => props.theme.navbarColor} solid;
    background: ${props => props.theme.navbarBackround};
    height: 2.2rem;
  }
`;

const StyledLink = styled(NavLink)`
  :hover {
    border-bottom: solid 2px ${props => props.theme.navbarColor};
  }
  color: ${props => props.theme.navbarColor};
  text-decoration: none;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: solid 2px ${props => props.theme.navbarBackround};
  @media screen and (max-width: 640px) {
    border-bottom: none;
    width: 100%;
    &:hover {
      border-bottom: 0;
    }
  }
`;

const Trigger = styled.div`
  color: ${props => props.theme.navbarColor};
  display: none;
  cursor: pointer;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const estado = this.state.mostrarMenu;
    this.setState({ mostrarMenu: !estado });
  }

  render() {
    return (
      <StyledNavBar>
        <StyledTitle>
          <StyledLink to="/">Notes-App</StyledLink>
        </StyledTitle>
        <Trigger onClick={this.handleClick}>Menu</Trigger>
        <StyledList display={this.state.mostrarMenu ? '1' : '0'}>
          <StyledListItem onClick={this.handleClick}>
            <StyledLink to="/notes">Notes</StyledLink>
          </StyledListItem>
          <StyledListItem onClick={this.handleClick}>
            <StyledLink to="/systems">Systems</StyledLink>
          </StyledListItem>
          <StyledListItem onClick={this.handleClick}>
            <StyledLink to="/companies">Companies</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNavBar>
    );
  }
}
export default Navbar;
