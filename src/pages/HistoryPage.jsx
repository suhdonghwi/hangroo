import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AnimatedNumber from "animated-number-react";

import styled from 'styled-components';
import colors from 'assets/colors';

const Section = styled.section`
  background: 
      linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('${props => props.imageUrl}');
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Year = styled.h1`
  margin: 0;
  position: fixed;

  left: 50%;
  top: 55%;
  transform: translate(-50%, -80%);

  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray1};
  font-size: clamp(5rem, 10vw, 7rem);
`;

const Title = styled.h2`
  margin: 0;
  position: fixed;

  left: 50%;
  top: 35%;
  transform: translateX(-50%);

  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray5};
  font-size: 2rem;
  font-weight: 500;
`;

const Description = styled.p`
  width: 45%;
  font-size: 1.2rem;
  color: ${colors.gray5};

  position: relative;
  top: 7rem;

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
      imageUrl: '세종.png',
      description: '한글은 서기 1443년 12월 ~ 1444년 1월 중순 (세종 25년 12월) 경에 창제되었다. 정확한 창제 주체에 관해서는 논란이 있지만, 세종대왕 본인이 소수 최측근의 도움만을 받아 창제하였을 것이라는 설이 가장 유력하다.'
    },
    {
      year: 1446,
      imageUrl: '훈민정음.jpg',
      description: '세종은 직접 창제한 한글을 3년 동안 직접 써보면서 다듬고, 이를 1446년 9월 (세종 27년 경)에 반포하였다. 당시 처음으로 반포한 훈민정음 해례본에는 한글을 창제한 과학적, 철학적 원리가 담겨있고, 현재까지 전해져 내려온다.'
    },
    {
      year: 1447,
      imageUrl: '용비어천가.jpg',
      description: '세종은 한글을 시험해보기 위해 권제 등을 1447년 (세종 28년) 경 용비어천가를 편찬했다. 한글로 쓰인 최초의 책이라는 의의가 있으며, 조선 왕조를 찬양하는 내용으로 되어있다. 세종의 명을 받아 편찬한 책인만큼 초기 국어의 특징을 제대로 담고있다.'
    },
    {
      year: 1504,
      imageUrl: '연산군.jpg',
      description: '1504년 (연산 10년) 에 연산군이 투서를 받았는데, 그 속에는 한글로 자신을 비방하는 글이 쓰여져있었다. 분노한 연산군은 한글을 사용하는 자는 체포하라는 명령을 내렸다. 하지만 연산군도 한글의 유용함을 잘 알고있었고, 이 탄압 정책은 오래가지 못했다.'
    },
  ];

  const [year, setYear] = useState(sectionProps[0].year);

  const render = () => {
    return (
      <ReactFullpage.Wrapper>
        {
          sectionProps.map(props => (
            <Section key={props.imageUrl} className="section" imageUrl={"/history/" + props.imageUrl}>
              <Description>
                {props.description}
              </Description>
            </Section>
          ))
        }
      </ReactFullpage.Wrapper>
    );
  };

  const onLeave = (_, dest) => {
    setYear(sectionProps[dest.index].year);
  };

  return (
    <main>
      <Year>
        <AnimatedNumber
          value={year}
          formatValue={Number.parseInt}
          easing='linear'
          duration={700}
        />년
      </Year>
      <Title>한글을 창제하다,</Title>
      <ReactFullpage
        licenseKey={'B8776DD7-A6754E48-B09D3F31-2EF2023F'}
        render={render}
        verticalCentered={false}
        scrollingSpeed={1000}
        onLeave={onLeave}
      />
    </main>
  );
}
