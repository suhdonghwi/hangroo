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
  padding: 1.75rem 1.5rem;
  width: 250px;
`;

const CardImage = styled.img`
  width: 230px;
  height: 230px;

  border-radius: 10px;
  border: 2px solid ${colors.gray8};
`;

const CardTitle = styled.h1`
  color: ${colors.gray7};
  margin: 0.75rem 0;

  font-size: 2rem;
`;

export default function PeopleCard(props: PeopleCardProps) {
  return (
    <Card>
      <CardImage src={props.imageUrl}/>
      <CardTitle>{props.name}</CardTitle>

    </Card>
  );

}
