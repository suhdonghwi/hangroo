import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import styled from 'styled-components';
import NavBar from 'components/NavBar';

const Section = styled.section`
  background: 
      linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('${props => props.imageUrl}');
  background-size: cover;

`;

export default function HistoryPage() {
  const render = ({state, fullpageApi}) => {
    return (
      <ReactFullpage.Wrapper>
        <Section className="section" imageUrl="/history/한글 창제.jpg">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
            </button>
        </Section>
        <Section className="section">
          <p>Section 2</p>
        </Section>
      </ReactFullpage.Wrapper>
    );
  };

  return (
    <main>
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        render={render}
      />
    </main>
  );
}
