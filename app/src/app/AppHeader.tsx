import { FC } from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  background: ${theme.palette.primary.main};
  height: 72px;
  z-index: 2;
  width: 100%;
`;
const InnerWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
`;
const LogoWrapper = styled.div`
  width: 200px;
  height: 100%;
`;

export const AppHeader: FC = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <LogoWrapper></LogoWrapper>
      </InnerWrapper>
    </HeaderWrapper>
  );
};
