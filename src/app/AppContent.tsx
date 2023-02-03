import { FC } from 'react';
import styled from 'styled-components';
import { AppRoutes } from './AppRoutes';

const AppContentWrapper = styled.div`
  padding: 20px;
  background-color: white;
  height: calc(100% - 72px);
`;

export const AppContent: FC = () => {
  return (
    <AppContentWrapper>
      <AppRoutes />
    </AppContentWrapper>
  );
};
