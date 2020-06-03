import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavBar from 'components/NavBar';

import PeopleCard from 'components/PeopleCard';
import PeopleData from 'assets/PeopleData';

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  padding: 7rem 5rem;
`;

const CardContainer = styled.div`
  margin: 1rem;
  align-self: stretch;
`;

export default function PeoplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar isDark={false}/>
      <MainContainer>
        { PeopleData.map(props => 
          (
            <CardContainer key={props.name}>
              <PeopleCard {...props}/>
            </CardContainer>
          )) }
      </MainContainer>
    </>
  );
}
