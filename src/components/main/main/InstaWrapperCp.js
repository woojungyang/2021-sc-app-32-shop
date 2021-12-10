import React from 'react';
import Slider from 'react-slick';
import withSnsWrapper from './withSnsWrapper';
import styled, { Container } from '../../style';

import InstaCp from './InstaCp';

const Wrapper = styled.section``;

const InstaWrapperCp = ({ list, slideConfig }) => {
  return (
    <Wrapper>
      <Container>
        <Slider {...slideConfig}>
          {list.map((v, i) => (
            <InstaCp {...v} key={i} />
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default withSnsWrapper(React.memo(InstaWrapperCp));
