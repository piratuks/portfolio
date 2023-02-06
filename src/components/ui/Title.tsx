import { ContainerProps } from 'pages/Dashboard';
import { FC } from 'react';
import styled from 'styled-components';

const TitleElement = styled.h6`
  font-size: calc(18px + (25 - 18) * ((100vw - 320px) / (1200 - 320)));

  @media (min-width: 992px) {
    font-size: 28px;
  }
`;
const TitleElementContainer = styled(TitleElement)`
  margin-bottom: 0px;
  font-size: 74px;
  font-weight: bold;
`;
export const Title: FC<ContainerProps> = ({ isContainer, children }) => {
  let StyledTitleElement = TitleElement;
  if (isContainer) StyledTitleElement = TitleElementContainer;
  return <StyledTitleElement>{children}</StyledTitleElement>;
};
