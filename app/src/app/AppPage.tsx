import { FC } from 'react';
import styled from 'styled-components';
import { AppContent } from './AppContent';
import { AppHeader } from './AppHeader';

const AppPageWrapper = styled.div`
  position: relative;
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  ::before {
    content: '';
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
  }
`;
const InnerWrapper = styled.div`
  min-width: 800px;
  max-width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
  margin: auto;
`;

export const AppPage: FC = () => {
  return (
    <AppPageWrapper>
      <InnerWrapper>
        <AppHeader />
        <AppContent />
      </InnerWrapper>
    </AppPageWrapper>
  );
};
