import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => (
  <NavBar>
    <NavLink exact activeStyle={styles.active} to="/">
     <NavL>
       Home
     </NavL>
     </NavLink>

     <NavLink exact activeStyle={styles.active} to="/about">
      <NavL>
       About
      </NavL>
     </NavLink>

     <NavLink exact activeStyle={styles.active} to="/departments">
      <NavL>
       Departments
      </NavL>
     </NavLink>
  </NavBar>
);

export default Navbar;

//STYLES 

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #111;
  color: white;
`;

const NavL = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  height: 100px;
  min-width: 200px;
  font-size: 1.5rem;
  transition: background-color 0.25s ease;

  &:hover {
    background: #444;
  }
`;

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
  }
};