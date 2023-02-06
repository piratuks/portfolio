import backend from 'assets/backend.svg';
import frontend from 'assets/frontend.svg';
import fullstack from 'assets/fullstack.svg';
import mobile from 'assets/mobile.svg';
import { StyledCard } from 'components/ui/StyledCard';
import { StyledSection } from 'components/ui/StyledSection';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { DashboardPageProps } from '.';

const StyledCardTitle = styled(StyledTitle)`
  color: #ff7a57;
`;
const StyledCardSubTitle = styled.div`
  font-size: calc(13px + (15 - 13) * ((100vw - 300px) / (1300 - 300)));
  position: absolute;
  bottom: -100%;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
`;
const ServiceImg = styled.img`
  margin-top: 40px;
  width: 55px;
  margin-bottom: 25px;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
`;

export const Services: FC<DashboardPageProps> = ({ sectionRef }) => {
  return (
    <StyledSection sectionRef={sectionRef}>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Service</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          What I Do
        </StyledTitle>
        <Row>
          <Col sm={6} md={3} className="mb-4">
            <StyledCard hasExtras={true}>
              <ServiceImg src={frontend} alt="Frontend development" />
              <StyledCardTitle isContainer={false}>Frontend</StyledCardTitle>
              <StyledCardSubTitle className="subtitle">
                I am capable to develop solutions with any modern frontend framework. Most knowledge i have with
                Angular, Vue, Knockout, React
              </StyledCardSubTitle>
            </StyledCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <StyledCard hasExtras={true}>
              <ServiceImg src={backend} alt="Backend development" />
              <StyledCardTitle isContainer={false}>Backend</StyledCardTitle>
              <StyledCardSubTitle className="subtitle">
                I am capable to develop BE solutions with microsoft stack, php or node. However i am not limiting myself
                to only these technologies.
              </StyledCardSubTitle>
            </StyledCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <StyledCard hasExtras={true}>
              <ServiceImg src={fullstack} alt="Fullstack development" />
              <StyledCardTitle isContainer={false}>Fullstack</StyledCardTitle>
              <StyledCardSubTitle className="subtitle">
                My whole career i worked on both sides BE and FE. Therefore i am not limited to only FE or BE. I could
                tackle both sides.
              </StyledCardSubTitle>
            </StyledCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <StyledCard hasExtras={true}>
              <ServiceImg src={mobile} alt="Mobile development" />
              <StyledCardTitle isContainer={false}>Mobile</StyledCardTitle>
              <StyledCardSubTitle className="subtitle">
                I worked on multiple mobile applications durring my career. Most knowleged i have with ionic, xamarin
              </StyledCardSubTitle>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
