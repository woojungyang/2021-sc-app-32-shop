import React from 'react';
import styled from '@emotion/styled';

import HeaderCp from '../components/inc/HeaderCp';
// import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1632px;
  padding: 0 1em;
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <h1>Main</h1>
    </Wrapper>
  );
};

export default Main;
