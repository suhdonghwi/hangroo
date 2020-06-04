import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AnimatedNumber from "animated-number-react";

import styled from 'styled-components';
import colors from 'assets/colors';

import historyData from 'assets/HistoryData';

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
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray1};
  font-size: clamp(5rem, 10vw, 7rem);

  @media only screen and (max-height: 400px) {
    top: 40%;
  }
`;

const Title = styled.h2`
  margin: 0;
  position: fixed;

  left: 50%;
  top: calc(50% - 5.5rem);
  transform: translate(-50%, -50%);

  z-index: 1;

  width: 100%;
  text-align: center;

  color: ${colors.gray5};
  font-size: 2rem;
  font-weight: 500;

  transition: opacity 0.4s ease-in;
  &.hide {
    opacity: 0;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.5rem;
    top: calc(50% - 4rem);
  }

  @media only screen and (max-height: 400px) {
    display: none;
  }
`;

const Description = styled.p`
  width: 45%;
  font-size: 1.2rem;
  color: ${colors.gray5};

  position: relative;
  top: 9rem;

  @media only screen and (max-width: 1200px) {
    width: 60%;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    top: 9rem;
    font-size: 1.1rem;

    width: 90%;
  }

  @media only screen and (max-height: 500px) {
    top: 7rem;
  }

  @media only screen and (max-height: 400px) {
    top: 5rem;
  }
`;

export default function HistoryPage() {
  const [year, setYear] = useState(historyData[0].year);
  const [title, setTitle] = useState(historyData[0].title);
  const [hideTitle, setHideTitle] = useState(false);

  const render = () => {
    return (
      <ReactFullpage.Wrapper>
        {
          historyData.map(props => (
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
    setYear(historyData[dest.index].year);
    setHideTitle(true);

    setTimeout(() => {
      setHideTitle(false);
      setTitle(historyData[dest.index].title);
    }, 500);
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
      <Title className={hideTitle ? 'hide' : ''}>{title},</Title>
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
