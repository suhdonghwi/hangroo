import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import styled from 'styled-components';
import colors from 'assets/colors';

const Section = styled.section`
  background: 
      linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('${props => props.imageUrl}');
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Year = styled.h1`
  position: fixed;
  left: 50%;
  top: 25vh;
  transform: translateX(-50%);
  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray1};
  font-size: 7rem;
`;

const Description = styled.p`
  width: 50%;
  font-size: 1.2rem;
  color: ${colors.gray2};

  position: relative;
  top: 7rem;
`;

export default function HistoryPage() {
  const render = () => {
    return (
      <ReactFullpage.Wrapper>
        <Section className="section" imageUrl="/history/한글 창제.jpg">
          <Description>
            한글은 서기 1443년 12월 ~ 1444년 1월 중순 (세종 25년 12월) 경에 창제되었다. 정확한 창제 주체에 관해서는 논란이 있지만, 세종대왕 본인이 소수 최측근의 도움만을 받아 창제하였을 것이라는 설이 가장 유력하다.
            </Description>
        </Section>
        <Section className="section">
          <p>Section 2</p>
        </Section>
      </ReactFullpage.Wrapper>
    );
  };

  return (
    <main>
      <Year>1443년</Year>
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        render={render}
        verticalCentered={false}
      />
    </main>
  );
}
