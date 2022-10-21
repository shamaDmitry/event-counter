import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Text } from "@nextui-org/react";


const Navigation = () => {

  return (
    <nav>
      <Navbar>
        <Navbar.Brand>
          <NavLink to="/">
            <Text b color="inherit">
              EventCounter
            </Text>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Content>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/events">List of events</NavLink>
        </Navbar.Content>
      </Navbar>
    </nav>
  )
}

export default Navigation;
