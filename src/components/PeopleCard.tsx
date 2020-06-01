import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

import CardStyle from 'assets/styles/Card';

export interface PeopleCardProps {
  imageUrl: string;
  name: string;
  birth: number;
  death?: number;
  description: string;
}

const Card = styled(CardStyle)`
  width: 330px;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 1.8rem;

  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

const CardImage = styled.img`
  width: 230px;
  height: 230px;

  border-radius: 10px;
  box-shadow: 2px 2px 20px ${colors.gray5};
`;

const CardTitle = styled.h1`
  color: ${colors.gray8};
  margin: 1rem 0 0 0;

  font-size: 2rem;
`;

const CardBirthDeath = styled.div`
  color: ${colors.gray6};
  font-size: 1rem;
  font-weight: bold;

  margin: 0;
`;

const CardDescription = styled.p`
  color: ${colors.gray6};
  margin-bottom: 0;
`;

export default function PeopleCard(props: PeopleCardProps) {
  return (
    <Card>
      <CardImage src={props.imageUrl}/>
      <CardTitle>{props.name}</CardTitle>
      <CardBirthDeath>{props.birth} ~ {props.death}</CardBirthDeath>
      <CardDescription>{props.description}</CardDescription>
    </Card>
  );

}
