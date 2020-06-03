import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import colors from 'assets/colors';

const breakpoint = '400px';

interface Darkable {
  isDark: boolean;
}

const Nav = styled.nav<Darkable>`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  transition: all 0.3s;
  box-shadow: 1px 0 15px ${props => props.isDark ? colors.gray9 : colors.gray5};
  background-color: ${props => props.isDark ? colors.gray9 : 'white'};
  z-index: 99;

  position: fixed;
  width: 100vw;
  box-sizing: border-box;

  @media only screen and (max-width: ${breakpoint}) {
    padding: 1rem 1.5rem;
  }
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

const MenuItem = styled(Link)<Darkable>`
  cursor: pointer;

  font-size: 1.2rem;
  transition: all 0.3s;
  color: ${props => props.isDark ? colors.gray2 : colors.gray6};

  transition: color 0.2s;
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 2rem;

    @media only screen and (max-width: ${breakpoint}) {
      margin-left: 1rem;
    }
  }

  &:hover {
    color: ${props => props.isDark ? colors.indigo3 : colors.gray7};
  }

  &.current {
    color: ${props => props.isDark ? colors.indigo4 : colors.gray8};
    font-weight: bold;
  }
`;

interface NavBarProps {
  isDark: boolean;
  currentPath: string;
}

export default function NavBar({isDark, currentPath}: NavBarProps) {
  const menu = [
    {
      title: "역사",
      linkTo: "/history/",
    },
    {
      title: "원리",
      linkTo: "/principal/",
    },
    {
      title: "인물",
      linkTo: "/people/",
    },
  ];

  const menuItems = menu.map(
    props => (
      <MenuItem 
        key={props.title} 
        to={props.linkTo} 
        isDark={isDark}
        className={currentPath === props.linkTo ? "current" : ""}
      >
        {props.title}
      </MenuItem>
    )
  );

  return (
    <Nav isDark={isDark}>
      <LogoLink to="/">
        <LogoImage src={isDark ? "/logoWhite.png" : "/logoBlack.png"} />
      </LogoLink>

      <MenuList>
        {menuItems}
      </MenuList>
    </Nav>
  );
}

