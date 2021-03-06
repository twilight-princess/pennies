import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//CSS
import './PennyNav.css';

class PennyNav extends Component {
  state = {collapsed: true}

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  
  render() {
    return (
      <div className="PennyNav">
        <Navbar color="light" light>
          <NavbarBrand href="/" className="mr-auto">Penny</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default PennyNav;