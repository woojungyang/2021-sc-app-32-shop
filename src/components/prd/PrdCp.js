import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled, { color, font, media } from '../../style';
import { filePath } from '../../modules/util';

import ImageCp from '../common/ImageCp';
import VideoCp from '../common/VideoCp';
import ButtonCp from '../common/ButtonCp';
import FavoriteCp from '../common/FavoriteCp';
import LocationCp from './LocationCp';
import TitleCp from './TitleCp';
import PriceCp from './PriceCp';
import ColorCp from './ColorCp';
import ColorNameCp from './ColorNameCp';

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
  font-family: ${font.en};
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
  }
`;

const HoverImg = styled.div`
  display: block;
  transition: opacity 0.5s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0.5em;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s;
  opacity: ${(props) => props.isEnter};
`;

const PrdCp = ({
  title,
  star: starData,
  priceSale,
  priceOrigin,
  Cates,
  Colors,
  Sections,
  ProductFiles,
}) => {
  /* state ********/
  const [location, setLocation] = useState('Shop');
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('');
  // const [section, setSection] = useState([]);
  const [isEnter, setIsEnter] = useState(0);
  const trees = useSelector((state) => state.tree.allTree);

  /* 데이터 가공 ********/
  useEffect(() => {
    // location
    console.log(Cates, Colors);
    let _location = 'Shop';
    if (Cates.length) {
      let cates = Cates[0].parents ? Cates[0].parents.split(',') : [];
      let data = trees.filter((v) => v.id === cates[0]);
      if (data.length) _location += ' - ' + data[0].title;
    }
    _location += ' - ' + Cates[0].name;
    setLocation(_location);
    // colorName/Code
    if (Colors.length) setColorName(Colors[0].name);
    if (Colors.length) setColorCode(Colors[0].code);
  }, [Cates, trees, Colors]);

  /* Event ********/
  const listenClick = useCallback((_name, _color) => {
    setColorName(_name);
    setColorCode(_color);
  }, []);

  const onEnter = useCallback((e) => {
    setIsEnter(1);
  }, []);

  const onLeave = useCallback((e) => {
    setIsEnter(0);
  }, []);

  /* render ********/
  return (
    <Wrapper onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <ImageWrapper>
        <ImageCp alt={title} src={filePath(ProductFiles[0].saveName)} width="100%" />
        <HoverImg>
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
        </HoverImg>
        <ButtonWrapper isEnter={isEnter}>
          <ButtonCp
            txt="ADD TO CART"
            width="100%"
            colorHover={color.info}
            bgHover={color.dark}
            bold="bold"
          />
        </ButtonWrapper>
      </ImageWrapper>
      <Favorite size="1em" />
      <InfoWrap>
        <LocationCp title={location} />
        <div className="w-100 d-flex justify-content-between align-items-center">
          <TitleCp title={title} />
          {Colors.length ? <ColorNameCp name={colorName} code={colorCode} /> : ''}
        </div>
        <PriceCp price={priceSale} />
        {Colors.length ? <ColorCp colors={Colors} listenClick={listenClick} /> : ''}
      </InfoWrap>
    </Wrapper>
  );
};

export default React.memo(PrdCp);
