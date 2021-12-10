import React from 'react';
import Slider from 'react-slick';
import withSnsWrapper from './withSnsWrapper';
import styled, { SmallContainer } from '../../style';

import RideCp from './RideCp';

const Wrapper = styled.section``;

const RideWrapperCp = ({ list, slideConfig }) => {
  return (
    <Wrapper>
      <SmallContainer>
        <Slider {...slideConfig}>
          {list.map((v, i) => (
            <RideCp {...v} key={i} />
          ))}
        </Slider>
      </SmallContainer>
    </Wrapper>
  );
};

export default withSnsWrapper(React.memo(RideWrapperCp));
