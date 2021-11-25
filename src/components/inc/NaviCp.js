import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';

const Wrapper = styled.div``;

const NaviCp = () => {
  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get('http://127.0.0.1:3100/json/tree.json');
      console.log(data);
    };
    console.log('컴포넌트가 시작');
    return () => {
      console.log('화면에서 사라짐');
    };
  }, []);

  return <Wrapper></Wrapper>;
};

export default React.memo(NaviCp);
