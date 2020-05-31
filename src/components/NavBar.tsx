import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  box-shadow: 1px 0 15px ${colors.gray5};
`;

const LogoImage = styled.img`
  width: 4.7rem;
  height: 1.5rem;

  cursor: pointer;
  margin-right: auto;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  margin: 0;
  padding: 0;

`;

const MenuItem = styled.li`
  cursor: pointer;

  font-size: 1.2rem;
  color: ${colors.gray6};

  transition: color 0.2s;

  &:not(:first-child) {
    margin-left: 1.7rem;
  }

  &:hover {
    color: ${colors.gray8};
    font-weight: bold;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <LogoImage src="/logo.png" />
      <MenuList>
        <MenuItem>
          역사
        </MenuItem>
        <MenuItem>
          원리
        </MenuItem>
        <MenuItem>
          인물
        </MenuItem>
      </MenuList>
    </Nav>
  );
}

