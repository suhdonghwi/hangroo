import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import colors from 'assets/colors';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  box-shadow: 1px 0 15px ${colors.gray5};
`;

const LogoLink = styled(Link)`
  margin-right: auto;
`;

const LogoImage = styled.img`
  width: 4.7rem;
  height: 1.5rem;

  margin-top: 5px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  margin: 0;
  padding: 0;

`;

const MenuItem = styled(Link)`
  cursor: pointer;

  font-size: 1.2rem;
  color: ${colors.gray6};

  transition: color 0.2s;
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover {
    color: ${colors.gray8};
    font-weight: bold;
  }
`;

export default function NavBar() {
  const menu = [
    {
      title: "역사",
      linkTo: "/history",
    },
    {
      title: "원리",
      linkTo: "/principal",
    },
    {
      title: "인물",
      linkTo: "/people",
    },
  ];

  const menuItems = menu.map(
    props => (
      <MenuItem to={props.linkTo}>
        {props.title}
      </MenuItem>
    )
  );

  return (
    <Nav>
      <LogoLink to="/">
        <LogoImage src="/logo.png" />
      </LogoLink>

      <MenuList>
        {menuItems}
      </MenuList>
    </Nav>
  );
}

