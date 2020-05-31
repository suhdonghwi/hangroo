import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

import NavBar from 'components/NavBar';

const MainContainer = styled.main`
  padding: 1rem 0 5rem 0;
  max-width: 55%;
  margin: 0 auto;
`;

const ContentList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

const ContentItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
`;

const Numbering = styled.span`
  color: ${colors.indigo7};
  font-weight: 600;
`;


interface ReferenceImageProps {
  size: string;
}

const ReferenceImage = styled.img`
  width: ${(props: ReferenceImageProps) => props.size};
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  color: ${colors.gray6};
  font-size: 1.2rem;
`;

export default function PrincipalPage() {
  const contents = [
    {
      number: "하나",
      title: "조음 기관의 형상을 본따서 만든 자음",
      image: "sc1.svg",
      size: "80%",
      description: "한글에서 ㄱ, ㄴ, ㅁ 와 같은 기본 자음은 조음 기관의 형상을 본따서 만들었습니다. 이 원리는 훈민정음 해례본에 명시되어있으며, 이 특징 덕분에 한글은 굉장히 단순하고 직관적인 문자 체계를 이룰 수 있었습니다."
    },
    {
      number: "둘",
      title: "하늘, 땅, 사람을 기본으로 한 모음",
      image: "sc2.svg",
      size: "60%",
      description: "한글의 모음 또한 상형의 원리로 만들어졌습니다. 아래아(ㆍ), 'ㅡ', 'ㅣ' 모음은 각각 천지인(하늘, 땅, 사람)을 기본으로 하여 만들어졌습니다. 그리고 나머지 모음은 이 기본 모음을 조합하는 형태로 구성되어있습니다."
    },
    {
      number: "셋",
      title: "기본 자음으로부터 파생된 자음들",
      image: "sc3.svg",
      size: "40%",
      description: "한글에서 기본 자음이 아닌 다른 문자들은, 리을(ㄹ)을 제외하면 모두 기본자에 획을 더한 형태를 가지고 있습니다. 이를 통해서 적은 수의 기본 자음만 알아도 다른 자음을 자연스럽게 유도해낼 수 있으며, 효율적인 학습이 가능합니다."
    },
  ];

  const contentElements = contents.map(
    data => (
      <ContentItem key={data.number}>
        <Title>
          <Numbering>{data.number}. </Numbering>
          {data.title}
        </Title>
        <ReferenceImage src={"/sc/" + data.image} size={data.size} />
        <Paragraph>
          {data.description}
        </Paragraph>
      </ContentItem>
    )
  )
  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentList>
          {contentElements}
        </ContentList>
      </MainContainer>
    </>
  );
}
