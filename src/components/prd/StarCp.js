import React, { useState } from 'react';
import styled, { color, font, media } from '../../style';

const Wrapper = styled.div`
  font-size: 1.25em;
  position: relative;
`;

const DefaultStar = styled.div`
  display: flex;
  color: #bbb;
  & span {
    width: 1em;
    flex-shrink: 0;
  }
`;

const GoldStar = styled(DefaultStar)`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  color: #f58f00;
  width: ${(props) => props.point + 'em'};
`;

const StarCp = ({ point }) => {
  return (
    <Wrapper>
      <DefaultStar>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </DefaultStar>
      <GoldStar point={point}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </GoldStar>
    </Wrapper>
  );
};

export default React.memo(StarCp);
