import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

import Card from 'assets/styles/Card';

interface PeopleCardProps {
  imageUrl: string;
  name: string;
  birth: number;
  death?: number;
  description: string;
}

const CardImage = styled.img`
`;

export default function PeopleCard(props: PeopleCardProps) {
  return (
    <Card>
      <CardImage src={props.imageUrl}/>

    </Card>
  );

}
