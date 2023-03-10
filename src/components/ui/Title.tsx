import { ContainerProps } from 'pages/Dashboard';
import { FC } from 'react';
import styled from 'styled-components';

const StyledTitleElement = styled.h6`
  font-size: calc(18px + (25 - 18) * ((100vw - 320px) / (1200 - 320)));

  @media (min-width: 992px) {
    font-size: 28px;
  }
`;
const StyledTitleElementContainer = styled(StyledTitleElement)`
  margin-bottom: 0px;
  font-size: 74px;
  font-weight: bold;
`;

interface Props extends ContainerProps {
  className?: string;
}
export const Title: FC<Props> = ({ isContainer, children, className }) => {
  let StyledElement = StyledTitleElement;
  if (isContainer) StyledElement = StyledTitleElementContainer;
  return <StyledElement className={className ?? ''}>{children}</StyledElement>;
};
