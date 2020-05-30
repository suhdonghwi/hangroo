import React from 'react';
import styled from 'styled-components';

import MainHeader from 'components/MainHeader';

const breakpoint = '460px';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem 3rem;

  @media only screen and (max-width: ${breakpoint}) {
    padding: 3rem 2rem;
  }
`;

export default function MainPage() {
  return (
    <Main>
      <MainHeader />
    </Main>
  );
}
