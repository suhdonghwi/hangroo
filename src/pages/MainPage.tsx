import React from 'react';

import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
`;

const IntroTitle = styled.h1`
  font-weight: normal;
`;

const IntroParagraph = styled.p`

`;

export default function MainPage() {
  return (
    <main>
      <IntroContainer>
        <div>
          <IntroTitle>
            한글 제대로 알기, <strong>한그루</strong>
          </IntroTitle>

          <IntroParagraph>
            대단한건 알겠는데, 이유는 잘 모르겠는 우리의 고유하고 특별한 문자 한글. 한국인인 우리부터라도 제대로 알고 있어야하지 않을까요?
          </IntroParagraph>
        </div>

      </IntroContainer>
    </main>
  );
}
