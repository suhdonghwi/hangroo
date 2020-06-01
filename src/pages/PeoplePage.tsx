import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavBar from 'components/NavBar';

import PeopleCard, {PeopleCardProps} from 'components/PeopleCard';

const MainContainer = styled.main`

`;

export default function PeoplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <MainContainer>
        <PeopleCard
          imageUrl="/people/세종대왕.png"
          name="세종대왕"
          birth={1397}
          death={1450}
          description="조선의 제4대 국왕이자, 한글의 창제자이십니다. 한글을 제외해도 조선 최고의 국왕으로 자주 일컬어지며 존경의 의미로 '대왕'이라는 칭호로 불립니다."
        />
      </MainContainer>
    </>
  );
}
