import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

export interface MainCardProps {
  imageUrl: string;
  cardTitle: string;
  cardDescription: string;
}

const breakpoint = '400px';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.16);
  border-radius: 20px;

  padding: 1.3rem 1.8rem;

  width: 280px;

  @media only screen and (max-width: ${breakpoint}) {
    width: 230px;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.h2`
  color: ${colors.gray7};
  font-size: 1.8rem;

  margin: 0;
`;

const CardDescription = styled.p`
  color: ${colors.gray5};
  margin: 1.2rem 0 1.5rem 0;
`;

const CardLearnMore = styled.button`
  background: none;
  border: none;

  color: ${colors.indigo7};
  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;
  outline: none;
`;

export default function MainCard(props: MainCardProps) {
  return (
    <Card>
      <CardImage src={props.imageUrl} />
      <CardTitle>{props.cardTitle}</CardTitle>
      <CardDescription>{props.cardDescription}</CardDescription>

      <CardLearnMore>더 알아보기 > </CardLearnMore>
    </Card>
  );
}
