import React from 'react';
import styled from 'styled-components';

import MainHeader from 'components/MainHeader';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem 3rem;
`;

export default function MainPage() {
  return (
    <Main>
      <MainHeader />
    </Main>
  );
}
