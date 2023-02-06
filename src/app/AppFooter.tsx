import logoWhite from 'assets/logo-white.svg';
import { BtnType, StyledButtons } from 'components/ui/StyledButtons';
import { StyledSocialLinks } from 'components/ui/StyledSocialLinks';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { SectionWithContactsProps } from 'pages/Dashboard/Header';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooterWrapper = styled.footer`
  background: #ff7a57;
  min-height: 500px;
  padding-top: 10rem;
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
const StyledHireMeContainer = styled(Container)`
  position: absolute;
  max-width: 1000px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;
const StyledHireMeBox = styled.div`
  padding: 3.5rem 1.25rem;
  margin-top: -5rem;
  background-color: #343a40;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
  border-radius: 12px;
  color: white;
  display: block;
`;
const StyledTitleCustomized = styled(StyledTitle)`
  font-weight: 800;
`;

export const AppFooter: FC<SectionWithContactsProps> = ({ sectionRef, contactsRef }) => {
  return (
    <>
      <StyledHireMeContainer>
        <StyledHireMeBox>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} md={3}>
              <StyledTitleCustomized isContainer={false}>Start a projects</StyledTitleCustomized>
            </Col>
            <Col sm={6} md={4}>
              <StyledSubTitle isContainer={false}>
                Interested in working together? We should queue up a time to chat.
              </StyledSubTitle>
            </Col>
            <Col sm={6} md={3}>
              <StyledButtons
                className={'pt-3'}
                buttons={[
                  {
                    className: 'w-lg',
                    handleClick: () => () => contactsRef.current?.scrollIntoView(),
                    type: BtnType.primaryOutline,
                    caption: `Let's do this`
                  }
                ]}
              />
            </Col>
          </Row>
        </StyledHireMeBox>
      </StyledHireMeContainer>
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
    </>
  );
};
