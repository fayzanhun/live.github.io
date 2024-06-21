import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="Navbar">
          <img className="logo" src="./images/fayzan.png" alt="my logo" />
        </div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) =>
    theme.colors.bg}; /* Fix the syntax error here */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Fix the typo here */

  .logo {
    height: 5rem;
    width: 15rem;
  }
`;

export default Header;
