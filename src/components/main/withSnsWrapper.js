import React from 'react';

const sns = {
  ride: [
    {
      id: 1,
      src: '/img/201206_1222.jpg',
      title: 'Viet Nam',
      content: 'Next trip: 10 May 2021 / 2 - 4 Weeks',
    },
    {
      id: 2,
      src: '/img/201206_1223.jpg',
      title: 'Thailand ',
      content: 'Next trip: 10 May 2021 / 2 - 4 Weeks',
    },
    {
      id: 3,
      src: '/img/201206_1225.jpg',
      title: 'Indonesia',
      content: 'Next trip: 10 May 2021 / 2 - 4 Weeks',
    },
  ],
  insta: [
    {
      id: 1,
      src: '/img/201206_2333.jpg',
      star: 4.5,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      writer: '- John Smith, @john_smith97, Australia',
    },
    {
      id: 2,
      src: '/img/201206_2334.jpg',
      star: 4.8,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      writer: '- John Smith, @john_smith97, Australia',
    },
    {
      id: 3,
      src: '/img/201206_2335.jpg',
      star: 3.7,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      writer: '- John Smith, @john_smith97, Australia',
    },
  ],
};

const slideConfig = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const withSnsWrapper = (OriginComponent) => {
  const Component = (props) => {
    const combineProps = { ...props, list: sns[props.id], slideConfig };
    return <OriginComponent {...combineProps} />;
  };
  return Component;
};

export default withSnsWrapper;
