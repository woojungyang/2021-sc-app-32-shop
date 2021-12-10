import React from 'react';
import BannerCp from './BannerCp';
import withBannerWrapper from './withBannerWrapper';
import styled from '../../style';

const Wrapper = styled.section`
  margin-top: 1em;
  border: 10px solid red;
`;

const CenterParallaxCp = ({ banner, id }) => {
  return (
    <Wrapper>
      <BannerCp {...banner} />;
    </Wrapper>
  );
};

export default withBannerWrapper(CenterParallaxCp);
