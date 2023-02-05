import { Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

export const Loader = () => {
  const StyledRow = styled(Row)`
    height: 100%;
    width: 100%;
  `;
  return (
    <StyledRow className="d-flex align-items-center ">
      <Col className="d-flex justify-content-center">
        <Spinner animation="grow" />
      </Col>
    </StyledRow>
  );
};
