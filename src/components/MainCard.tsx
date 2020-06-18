import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from 'assets/colors';

import CardStyle from 'assets/styles/Card';

export interface MainCardProps {
  imageUrl: string;
  cardTitle: string;
  cardDescription: string;
  linkTo: string;
}

const Card = styled(CardStyle)`
  padding: 1.3rem 1.8rem;

  width: 250px;

  @media only screen and (max-width: 1000px) {
    width: 230px;
  }

  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 240px;
`;

const CardTitle = styled.h2`
  color: ${colors.gray7};
  font-size: 1.8rem;

  margin: 1rem 0 0 0;
`;

const CardDescription = styled.p`
  color: ${colors.gray5};
  margin: 1.2rem 0 1.5rem 0;
`;

const CardLearnMore = styled.div`
  background: none;
  border: none;

  color: ${colors.indigo7};
  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export default function MainCard(props: MainCardProps) {
  return (
    <LinkContainer to={props.linkTo}>
      <Card>
        <CardImage src={props.imageUrl} />
        <CardTitle>{props.cardTitle}</CardTitle>
        <CardDescription>{props.cardDescription}</CardDescription>

        <CardLearnMore>
          더 알아보기 {'>'}
        </CardLearnMore>
      </Card>
    </LinkContainer>
  );
}
