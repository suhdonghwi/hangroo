import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavBar from 'components/NavBar';

const MainContainer = styled.main`

`;

export default function PeoplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <MainContainer>
      </MainContainer>
    </>
  );
}
