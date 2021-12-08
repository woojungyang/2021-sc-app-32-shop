import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled, { color, media } from '../../style';

import ImageCp from '../common/ImageCp';
import VideoCp from '../common/VideoCp';
import ButtonCp from '../common/ButtonCp';
import FavoriteCp from '../common/FavoriteCp';
import LocationCp from './LocationCp';
import { filePath } from '../../modules/util';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  width: 19%;
  margin: 0 1% 1% 0;
  @media ${media.lg} {
    width: 24%;
  }
  @media ${media.md} {
    width: 31.8333%;
    margin: 0 1.5% 1.5% 0;
  }
  @media ${media.sm} {
    width: 48%;
    margin: 0 2% 2% 0;
  }
  @media ${media.xs} {
    width: 97.5%;
    margin: 0 2.5% 2.5% 0;
  }
`;

const InfoWrap = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Favorite = styled(FavoriteCp)`
  position: absolute;
  top: 1em;
  left: 1em;
`;

const ImageWrapper = styled.div`
  position: relative;
  & > :nth-of-type(2) {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover {
    & > :nth-of-type(2) {
      opacity: 1;
    }
  }
`;

const ButtonWrapper = styled.div`
  padding: 0.5em;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PrdCp = ({
  title,
  star: starData,
  price,
  priceOrigin,
  Cates,
  Color,
  Section,
  ProductFiles,
}) => {
  /* state ********/
  const [location, setLocation] = useState('Shop');
  const [color, setColor] = useState([]);
  const [section, setSection] = useState([]);
  const [star, setStar] = useState(0.0);
  const colors = useSelector((state) => state.color.allColor);
  const sections = useSelector((state) => state.color.allSection);

  /* 데이터 가공 ********/
  useEffect(() => {
    // 복잡한 곳
    // let myColor = colors.filter(v => { })
  }, [colors, sections, Cates]);

  /* render ********/
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageCp alt={title} src={filePath(ProductFiles[0].saveName)} width="100%" />
        <div>
          {ProductFiles[1].saveName.includes('.mp4') ? (
            <VideoCp
              alt={title}
              src={filePath(ProductFiles[1].saveName)}
              width="100%"
            />
          ) : (
            <ImageCp
              alt={title}
              src={filePath(ProductFiles[1].saveName)}
              width="100%"
            />
          )}
          <ButtonWrapper>
            <ButtonCp
              txt="ADD TO CART"
              width="100%"
              colorHover={color.info}
              bgHover={color.dark}
              bold="bold"
            />
          </ButtonWrapper>
        </div>
      </ImageWrapper>
      <Favorite size="1em" />
      <InfoWrap>
        <LocationCp />
      </InfoWrap>
    </Wrapper>
  );
};

export default React.memo(PrdCp);
