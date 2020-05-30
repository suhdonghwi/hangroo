import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 1100px;
`;

const IntroContainer = styled.div`
  width: 60%;
`;

const IntroTitle = styled.h1`
  font-weight: normal;
  font-size: 3rem;
  margin: 0;

  color: ${colors.gray9};

  word-break: keep-all;
`;

const IntroParagraph = styled.p`
  margin: 2rem 0;

  color: ${colors.gray6};
  font-size: 1.3rem;
  width: 90%;
`;

const IntroButton = styled.button`
  background-color: ${colors.indigo6};
  color: white;
  font-size: 1.1rem;
  font-weight: bold;

  padding: 0.5rem 1.5rem;

  border: none;
  border-radius: 30px;

  outline: none;
  cursor: pointer;
`;

const MainIllust = styled.img`
  width: 40%;
`;

export default function MainHeader() {
  return (
    <HeaderContainer>
      <IntroContainer>
        <IntroTitle>
          한글 제대로 알기, <strong>한그루</strong>
        </IntroTitle>

        <IntroParagraph>
          대단한 문화 유산인 것은 알겠는데, 이유는 잘 모르겠는 우리의 고유하고 특별한 문자 한글. 한국인인 우리부터라도 그 이유를 제대로 알고 있어야하지 않을까요?
          </IntroParagraph>

        <IntroButton>
          더 알아보기
        </IntroButton>
      </IntroContainer>
      <MainIllust src="/illusts/pointing.svg" />
    </HeaderContainer>
  );
}
