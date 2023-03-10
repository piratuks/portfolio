import { ContainerProps } from 'pages/Dashboard';
import { FC } from 'react';
import styled from 'styled-components';

const StyledSubTitleElement = styled.h6`
  font-size: calc(13px + (15 - 13) * ((100vw - 320px) / (1200 - 320)));
  opacity: 0.8;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;
const StyledSubTitleElementContainerElement = styled(StyledSubTitleElement)`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 500;
`;
export const SubTitle: FC<ContainerProps> = ({ isContainer, children }) => {
  let StyledElement = StyledSubTitleElement;
  if (isContainer) StyledElement = StyledSubTitleElementContainerElement;
  return <StyledElement className="subtitle">{children}</StyledElement>;
};
