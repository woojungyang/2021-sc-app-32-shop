import React, { useEffect } from 'react';
import axios from 'axios';

import BannerCp from './BannerCp';

const ParallaxCp = () => {

  useEffect(() => {
    axios.get(process.env.)
    
  }, [])

  return <BannerCp />;
};

export default React.memo(ParallaxCp);
