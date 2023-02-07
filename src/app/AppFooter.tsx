import logoWhite from 'assets/logo-white.svg';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { LogoImgElement } from 'components/ui/Logo';
import { StyledSocialLinks } from 'components/ui/StyledSocialLinks';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { SectionWithContactsProps } from 'pages/Dashboard/Header';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooterWrapperElement = styled.footer`
  background: var(--bs-primary);
  min-height: 550px;
  padding-top: 10rem;
  @media (max-width: 767.98px) {
    .page-footer {
      padding: 20px 0;
    }
  }
`;
const StyledLogoElement = styled(LogoImgElement)`
  width: 300px;
`;
const StyledTitleH1Element = styled.h1`
  color: var(--bs-white);
  font-size: 20px;
  opacity: 0.8;
`;
const StyledNewSocialLinksElement = styled(StyledSocialLinks)`
  justify-content: center;
  align-items: center;
`;
const StyledHireMeContainerElement = styled(Container)`
  position: absolute;
  max-width: 1000px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;
const StyledHireMeBoxElement = styled.div`
  padding: 3.5rem 1.25rem;
  margin-top: -5rem;
  background-color: var(--bs-dark);
  box-shadow: 0 5px 5px 0 rgba(var(--bs-dark-rgb), 0.2), 0 0 0 1px var(--bs-dark);
  border-radius: 12px;
  color: var(--bs-white);
  display: block;
`;
const StyledTitleCustomizedElement = styled(StyledTitle)`
  font-weight: 800;
`;
export const AppFooter: FC<SectionWithContactsProps> = ({ sectionRef, contactsRef }) => {
  return (
    <>
      <StyledHireMeContainerElement>
        <StyledHireMeBoxElement>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} md={3}>
              <StyledTitleCustomizedElement isContainer={false}>Start a projects</StyledTitleCustomizedElement>
            </Col>
            <Col sm={6} md={4}>
              <StyledSubTitle isContainer={false}>
                Interested in working together? We should queue up a time to chat.
              </StyledSubTitle>
            </Col>
            <Col sm={6} md={3}>
              <Buttons
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
        </StyledHireMeBoxElement>
      </StyledHireMeContainerElement>
      <StyledFooterWrapperElement>
        <Container>
          <Row>
            <Col className="text-center">
              <StyledLogoElement
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
              <StyledTitleH1Element>Let&apos;s tackle challenges together!!!</StyledTitleH1Element>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="text-center">
              <StyledNewSocialLinksElement switchColors={true} />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="text-center">
              <StyledTitleH1Element>
                Copyright 2023 <FaRegCopyright /> and Handcrafted by me &quot;Evaldas Laureckas&quot;
              </StyledTitleH1Element>
            </Col>
          </Row>
        </Container>
      </StyledFooterWrapperElement>
    </>
  );
};
