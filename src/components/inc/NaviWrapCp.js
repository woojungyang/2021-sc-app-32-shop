import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  display: flex;
`;

const NaviWrapCp = () => {
  const { allTree } = useSelector((state) => state.tree);
  return (
    <Wrapper>
      {allTree.map((v, i) => (
        <NaviCp data={v} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(NaviWrapCp);
