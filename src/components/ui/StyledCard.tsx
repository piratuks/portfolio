import { FC, PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCardElement = styled(Card)`
  box-shadow: 2px 3px 10px rgba(206, 212, 218, 0.3);
  position: relative;
  border: 1px solid #dee2e6;
  overflow: hidden;
  border-radius: 3px;
`;
const StyledCardElementExtra = styled(StyledCardElement)`
  min-height: 230px;
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
const StyledCardBody = styled.div`
  padding: 10px;
`;

interface Props extends PropsWithChildren {
  hasExtras: boolean;
  className?: string;
}
export const StyledCard: FC<Props> = ({ className, hasExtras, children }) => {
  let FinalStyledCardElement = StyledCardElement;
  if (hasExtras) FinalStyledCardElement = StyledCardElementExtra;
  return (
    <FinalStyledCardElement className={`border ${className}`}>
      <StyledCardBody>{children}</StyledCardBody>
    </FinalStyledCardElement>
  );
};
