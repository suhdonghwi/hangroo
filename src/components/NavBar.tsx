import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Nav = styled.nav`
  display: flex;
  padding: 1.5rem 2.5rem;
`;

const LogoImage = styled.img`
  width: 6rem;
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
  margin-left: 2rem;
  font-size: 1.3rem;
  color: ${colors.gray6};

  transition: color 0.2s;
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

