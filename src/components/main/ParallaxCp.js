import React from 'react';
import BannerCp from './BannerCp';
import withBannerWrapper from './withBannerWrapper';
import styled from '../../style';

const Wrapper = styled.section`
  margin-top: 1em;
`;

const ParallaxCp = ({ banner, id }) => {
  return (
    <Wrapper>
      <BannerCp {...banner} />;
    </Wrapper>
  );
};

export default withBannerWrapper(ParallaxCp);
