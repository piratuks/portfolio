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
const StyledSubTitleElementContainer = styled(StyledSubTitleElement)`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 500;
`;
export const StyledSubTitle: FC<ContainerProps> = ({ isContainer, children }) => {
  let StyledNewSubTitleElement = StyledSubTitleElement;
  if (isContainer) StyledNewSubTitleElement = StyledSubTitleElementContainer;
  return <StyledNewSubTitleElement className="subtitle">{children}</StyledNewSubTitleElement>;
};
