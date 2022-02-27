import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Item = styled.li``;

const NavBarLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px 0 10px;
  font-size: 1.1em;
  transition: 0.1s ease;
  &:hover {
    font-weight: bold;
    font-size: 1.2em;
    cursor:pointer;
  }
  &.${(props) => props.activeClassName} {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Centered = styled.div`
  display: ${(props) => !props.isOverlay && "flex"};
  align-items: ${(props) => !props.isOverlay && "center"};
  align-content: ${(props) => !props.isOverlay && "space-space-around"};
`;

const NavbarItems = ({ onClick, user, isOverlay = false, toggleNav }) => {
  return (
    <>
      <Item>
        <NavBarLink
          onClick={() => toggleNav(false)}
          activeClassName="active"
          href="/"
          exact={true}
        >
          Hotels
        </NavBarLink>
      </Item>
      {user ? (
        <Centered isOverlay={isOverlay}>
          <Item>
            <div
              style={{
                padding: "5px",
                border: "2px solid #ffffff",
                margin: "5px",
                // color: "white",
              }}
            >
              Hello, <strong>{user.name}</strong>
            </div>
          </Item>
          <Item>
            <btn onClick={onClick}>Logout</btn>
          </Item>
        </Centered>
      ) : (
        <>
          <Item>
            <NavBarLink
              onClick={() => toggleNav(false)}
              activeClassName="active"
              href="/login"
            >
              Login
            </NavBarLink>
          </Item>
          <Item>
            <NavBarLink
              onClick={() => toggleNav(false)}
              activeClassName="active"
              href="/register"
            >
              Register
            </NavBarLink>
          </Item>
        </>
      )}
    </>
  );
};

export default NavbarItems;