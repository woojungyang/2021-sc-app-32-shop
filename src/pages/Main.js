import React from 'react';
import styled, { Container, css } from '../style';

import HeaderCp from '../components/header/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';
import NoticeWrapperCp from '../components/main/NoticeWrapperCp';
import ParallaxCp from '../components/main/ParallaxCp';
import PrdWrapperCp from '../components/prd/PrdWrapperCp';

const Wrapper = styled(Container)`
  margin: auto;
  height: 10000px;
`;

const BottomParallax = styled(ParallaxCp)`
  margin-top: 2em;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <BannerWrapperCp />
      <NoticeWrapperCp />
      <ParallaxCp id="242" />
      <PrdWrapperCp />
      <BottomParallax id="243" />
    </Wrapper>
  );
};

export default React.memo(Main);
