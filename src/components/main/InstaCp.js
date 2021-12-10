import React from 'react';
import styled, { media, color, font } from '../../style';

const Insta = styled.div`
  margin: 0 1em;
  background-color: #fff;
  text-align: center;
  font-family: ${font.en};
`;
const Img = styled.div`
  & img {
    width: 100%;
  }
`;
const InfoWrap = styled.div`
  padding: 2em 0;
`;
const Writer = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;
const Content = styled.p``;

const InstaCp = ({ src, content, writer, star }) => {
  return (
    <Insta>
      <Img>
        <img src={src} alt={src} />
      </Img>
      <InfoWrap>
        <Content>{content}</Content>
        <Writer>{writer}</Writer>
      </InfoWrap>
    </Insta>
  );
};

export default React.memo(InstaCp);
