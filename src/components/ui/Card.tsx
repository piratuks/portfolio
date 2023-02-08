import { FC, PropsWithChildren } from 'react';
import { Card as BoostrapCard } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCardElement = styled(BoostrapCard)`
  box-shadow: 2px 3px 10px rgba(var(--bs-dark-rgb), 0.3);
  position: relative;
  border: 1px solid var(--bs-gray-300);
  overflow: hidden;
  border-radius: 3px;
`;
const StyledCardElementExtra = styled(StyledCardElement)`
  min-height: 250px;
  :hover img {
    margin-top: 5px;
    width: 45px;
    margin-bottom: 15px;
  }
  :hover .subtitle {
    bottom: 7px;
    opacity: 1;
    visibility: visible;
  }
`;
const StyledCardBodyElement = styled.div`
  padding: 10px;
`;

interface Props extends PropsWithChildren {
  hasExtras: boolean;
  className?: string;
}
export const Card: FC<Props> = ({ className, hasExtras, children }) => {
  let FinalCardElement = StyledCardElement;
  if (hasExtras) FinalCardElement = StyledCardElementExtra;
  return (
    <FinalCardElement className={`border ${className}`}>
      <StyledCardBodyElement>{children}</StyledCardBodyElement>
    </FinalCardElement>
  );
};
