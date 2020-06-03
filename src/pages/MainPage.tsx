import React, {useEffect} from 'react';
import styled from 'styled-components';

import MainHeader from 'components/MainHeader';
import MainCard, {MainCardProps} from 'components/MainCard';

const breakpoint = '460px';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 3rem;

  @media only screen and (max-width: ${breakpoint}) {
    padding: 3rem 2rem;
  }
`;

const CardsContainer = styled.section`
  margin-top: 4rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  @media only screen and (max-width: ${breakpoint}) {
    margin-top: 3rem;
  }
`;

const CardContainer = styled.div`
  margin: 1.5rem;

  @media only screen and (max-width: ${breakpoint}) {
    margin: 1rem;
  }
`;

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const cardProps: MainCardProps[] = [
    {
      imageUrl: "/illusts/tree.svg",
      cardTitle: "한글의 역사",
      cardDescription: "유구하고 특별한 역사를 가진 한글의 흐름에 대해서 알아봅니다.",
      linkTo: "/history/",
    },
    {
      imageUrl: "/illusts/science.svg",
      cardTitle: "한글의 원리",
      cardDescription: "한글 창제 과정에서 고려된 과학적, 철학적인 요소들을 심도있게 알아봅니다.",
      linkTo: "/principal/",
    },
    {
      imageUrl: "/illusts/people.svg",
      cardTitle: "한글의 인물들",
      cardDescription: "한글이 지금의 자리에 있을 수 있도록 해주신 분들을 기억합니다.",
      linkTo: "/people/",
    },
  ];

  const cards = cardProps.map(props =>
    (<CardContainer key={props.cardDescription}> <MainCard {...props} /> </CardContainer>));

  return (
    <Main>
      <MainHeader />
      <CardsContainer>
        {cards}
      </CardsContainer>
    </Main>
  );
}
