import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import NavbarItems from "./NavbarItems";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  position: ${(props) => props.toggle && "sticky"};
  top: 0;
  z-index: 9999;
  box-shadow: 0 1px 4px 0px black;
  background-color:#fff03e;
`;

const NavContainer = styled.div`
  display: flex;
  height: 100%;
  position: ${(props) => props.toggle && "sticky"};
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  padding-left:30px;
  padding-right:30px;
  align-items: center;
`;

const NavBrand = styled(Link)`
  text-decoration: none;
  color: #000;
    `;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  align-content: space-space-around;
  li:nth-child(2) {
    margin: 0px 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "90vh" : 0)};
  width: 100vw;
  position: fixed;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  transition: height 0.4s ease-in-out;
  z-index: 9999;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 20px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const NavBar = () => {
  const onClick = () => {
    // dispatch(userActions.logoutUser());
  };
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav toggle={toggle}>
        <NavContainer toggle={toggle} >
          <NavBrand href="/">
            <h3>Hotel Booker</h3>
          </NavBrand>
          <Menu>
            <NavbarItems user={null} onClick={onClick} toggleNav={toggleNav} />
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </NavContainer>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <NavbarItems
            user={null}
            onClick={onClick}
            toggleNav={toggleNav}
            isOverlay={true}
          />
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default NavBar;