import React from 'react';
import styled, { Container } from '../style';

import HeaderCp from '../components/inc/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';
import NoticeWrapperCp from '../components/main/NoticeWrapperCp';

const Wrapper = styled(Container)`
  margin: auto;
  height: 10000px;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <BannerWrapperCp />
      <NoticeWrapperCp />
    </Wrapper>
  );
};

export default Main;
