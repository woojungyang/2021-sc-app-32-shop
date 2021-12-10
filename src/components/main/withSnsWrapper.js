import React, { useEffect, useState } from 'react';
import { rideApi, instaApi } from '../../modules/api';

const slideConfig = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dotsClass: 'slick-dots-sns',
};

const withSnsWrapper = (OriginComponent) => {
  const Component = (props) => {
    const [list, setList] = useState([]);
    useEffect(() => {
      (async () => {
        const data =
          props.model === 'ride' ? await rideApi(props.id) : await instaApi(props.id);
        setList(data);
      })();
    }, [props]);
    const combineProps = { ...props, list, slideConfig };
    return <OriginComponent {...combineProps} />;
  };
  return Component;
};

export default withSnsWrapper;
