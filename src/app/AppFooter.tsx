import logoWhite from 'assets/logo-white.svg';
import { SocialLinks } from 'components/ui/SocialLinks';
import { DashboardPageProps } from 'pages/Dashboard';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #ff7a57;
  min-height: 450px;
  @media (max-width: 767.98px) {
    .page-footer {
      padding: 20px 0;
    }
  }
`;
const LogoImg = styled.img`
  width: 300px;
  -webkit-filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
  filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
  cursor: pointer;
`;
const StyledTitle = styled.h1`
  color: white;
  font-size: 20px;
  opacity: 0.8;
`;
const StyledSocialLinks = styled(SocialLinks)`
  justify-content: center;
  align-items: center;
`;

export const AppFooter: FC<DashboardPageProps> = ({ sectionRef }) => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col className="text-center">
            <LogoImg
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
            <StyledTitle>Let&apos;s tackle challenges together!!!</StyledTitle>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <StyledSocialLinks switchColors={true} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <StyledTitle>
              Copyright 2023 <FaRegCopyright /> and Handcrafted by me &quot;Evaldas Laureckas&quot;
            </StyledTitle>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
