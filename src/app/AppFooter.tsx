import logoWhite from 'assets/logo-white.svg';
import { StyledSocialLinks } from 'components/ui/StyledSocialLinks';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';
import { PageProps } from './App';

const StyledFooterWrapper = styled.footer`
  background: #ff7a57;
  min-height: 450px;
  @media (max-width: 767.98px) {
    .page-footer {
      padding: 20px 0;
    }
  }
`;
const StyledLogoImg = styled.img`
  width: 300px;
  -webkit-filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
  filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
  cursor: pointer;
`;
const StyledTitleH1 = styled.h1`
  color: white;
  font-size: 20px;
  opacity: 0.8;
`;
const StyledNewSocialLinks = styled(StyledSocialLinks)`
  justify-content: center;
  align-items: center;
`;

export const AppFooter: FC<PageProps> = ({ sectionRef }) => {
  return (
    <StyledFooterWrapper>
      <Container>
        <Row>
          <Col className="text-center">
            <StyledLogoImg
              src={logoWhite}
              alt="Evaldas Laureckas Software Development"
              onClick={() => {
                sectionRef?.current?.scrollIntoView();
              }}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <StyledTitleH1>Let&apos;s tackle challenges together!!!</StyledTitleH1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <StyledNewSocialLinks switchColors={true} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <StyledTitleH1>
              Copyright 2023 <FaRegCopyright /> and Handcrafted by me &quot;Evaldas Laureckas&quot;
            </StyledTitleH1>
          </Col>
        </Row>
      </Container>
    </StyledFooterWrapper>
  );
};
