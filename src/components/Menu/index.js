import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Nav = styled.nav`
  border-top: 2px solid var(--dark);
  border-bottom: 2px solid var(--dark);

  max-width: 600px;
  display: inline-block;
  margin: 0 auto 1em auto;
  font-size: 1.5em;

  @media (max-width: 540px) {
    color: white;
    border: none;
  }
`

const MobileMenuToggle = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--dark);
  display: none;
  width: 100%;
  padding: 0.5em;
  color: inherit;
  border: none;
  font-size: 1em;
  text-transform: uppercase;
  font-family: inherit;
  z-index: 1000;

  @media (max-width: 540px) {
    display: block;
  }
`

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  @media (max-width: 540px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(100vh)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)};
    background-color: #292e34ee;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    flex-direction: column;
    transition: all ease-in-out 250ms;
  }
`

const MenuItem = styled.li`
  margin: 0;
  &:not(:last-child)::after {
    content: "•";
    display: inline-block;
    margin: 0 0.5em;
  }
  @media (max-width: 540px) {
    &::after {
      display: none !important;
    }
  }
`
const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: inline-block;
  padding: 0.5em 0.25em;
  margin-bottom: -0.4em;

  &:hover {
    color: hotpink;
  }
`

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Nav>
      <MobileMenuToggle onClick={toggleMenu}>
        {isOpen ? "Close" : "Menu"}
      </MobileMenuToggle>
      <MenuList isOpen={isOpen}>
        <MenuItem>
          <NavLink to="/donuts">Our Donuts</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/orders">Orders</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">About Us</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/more">More</NavLink>
        </MenuItem>
      </MenuList>
    </Nav>
  )
}
