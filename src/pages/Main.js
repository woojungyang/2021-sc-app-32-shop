import React from 'react';
import styled, { Container } from '../style';

import HeaderCp from '../components/inc/HeaderCp';
import BannerCp from '../components/main/BannerCp';

const Wrapper = styled(Container)`
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <BannerCp />
    </Wrapper>
  );
};

export default Main;
