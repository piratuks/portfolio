import { Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRowElement = styled(Row)`
  height: 100%;
  width: 100%;
`;
const StyledSpinnerElement = styled(Spinner)`
  background: var(--bs-primary);
`;

export const Loader = () => {
  return (
    <StyledRowElement className="d-flex align-items-center ">
      <Col className="d-flex justify-content-center">
        <StyledSpinnerElement animation="grow" />
      </Col>
    </StyledRowElement>
  );
};
