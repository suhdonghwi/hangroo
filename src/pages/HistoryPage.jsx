import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import styled from 'styled-components';
import NavBar from 'components/NavBar';

export default function HistoryPage() {
  const render = ({state, fullpageApi}) => {
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
            </button>
        </div>
        <div className="section">
          <p>Section 2</p>
        </div>
      </ReactFullpage.Wrapper>
    );
  };

  return (
    <>
      <NavBar />
      <main>
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          render={render}
        />
      </main>
    </>
  );
}
