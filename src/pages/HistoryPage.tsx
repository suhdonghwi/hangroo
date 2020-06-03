import React from 'react';

import styled from 'styled-components';
import NavBar from 'components/NavBar';

const MainContainer = styled.main`
  scroll-snap-type: y mandatory;
  height: calc(100vh - 65px);
  overflow: scroll;
`;

interface SectionProps {
  imageUrl: string;
}

const Section = styled.section<SectionProps>`
  scroll-snap-align: start;

  height: 100vh;
  background-image: url('${props => props.imageUrl}');
`;

export default function HistoryPage() {

  return (
    <>
      <NavBar />
      <MainContainer>
        <Section imageUrl="wow">
          wow
        </Section>
        <Section imageUrl="wow">
          wow2
        </Section>
      </MainContainer>
    </>
  );
}
