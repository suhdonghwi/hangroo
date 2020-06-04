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
  margin: 0;
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);

  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray1};
  font-size: clamp(5rem, 10vw, 7rem);
`;

const Description = styled.p`
  width: 45%;
  font-size: 1.2rem;
  color: ${colors.gray5};

  position: relative;
  top: 5rem;

  @media only screen and (max-width: 1200px) {
    width: 60%;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    top: 7rem;
    width: 90%;
  }
`;

export default function HistoryPage() {
  const sectionProps = [
    {
      year: 1444,
      imageUrl: '한글 창제.jpg',
      description: '한글은 서기 1443년 12월 ~ 1444년 1월 중순 (세종 25년 12월) 경에 창제되었다. 정확한 창제 주체에 관해서는 논란이 있지만, 세종대왕 본인이 소수 최측근의 도움만을 받아 창제하였을 것이라는 설이 가장 유력하다.'
    },
    {
      year: 1446,
      imageUrl: '반포.png',
      description: '세종은 직접 창제한 한글을 3년 동안 직접 써보면서 다듬고, 이를 1446년 9월 (세종 27년 경)에 반포하였다. 당시 처음으로 반포한 훈민정음 해례본에는 한글을 창제한 과학적, 철학적 원리가 담겨있고, 현재까지 전해져 내려온다.'
    },
  ];

  const render = () => {
    return (
      <ReactFullpage.Wrapper>
        {
          sectionProps.map(props => (
            <Section className="section" imageUrl={"/history/" + props.imageUrl}>
              <Description>
                {props.description}
              </Description>
            </Section>
          ))
        }
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
