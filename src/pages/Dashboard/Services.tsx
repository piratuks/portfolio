import backend from 'assets/backend.svg';
import frontend from 'assets/frontend.svg';
import fullstack from 'assets/fullstack.svg';
import mobile from 'assets/mobile.svg';
import { StyledSection } from 'components/ui/StyledSection';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { DashboardPageProps } from '.';

const ServiceCard = styled(Card)`
  box-shadow: 2px 3px 10px rgba(206, 212, 218, 0.3);
  position: relative;
  min-height: 230px;
  border: 1px solid #dee2e6;
  overflow: hidden;
  border-radius: 3px;

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
const ServiceCardBody = styled.div`
  padding: 10px;
`;
const StyledCardTitle = styled(Title)`
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
        <SubTitle isContainer={false}>Service</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          What I Do
        </Title>
        <Row>
          <Col sm={6} md={3} className="mb-4">
            <ServiceCard className="border">
              <ServiceCardBody>
                <ServiceImg src={frontend} alt="Frontend development" />
                <StyledCardTitle isContainer={false}>Frontend</StyledCardTitle>
                <StyledCardSubTitle className="subtitle">
                  I am capable to develop solutions with any modern frontend framework. Most knowledge i have with
                  Angular, Vue, Knockout, React
                </StyledCardSubTitle>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <ServiceCard className="border">
              <ServiceCardBody>
                <ServiceImg src={backend} alt="Backend development" />
                <StyledCardTitle isContainer={false}>Backend</StyledCardTitle>
                <StyledCardSubTitle className="subtitle">
                  I am capable to develop BE solutions with microsoft stack, php or node. However i am not limiting
                  myself to only these technologies.
                </StyledCardSubTitle>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <ServiceCard className="border">
              <ServiceCardBody>
                <ServiceImg src={fullstack} alt="Fullstack development" />
                <StyledCardTitle isContainer={false}>Fullstack</StyledCardTitle>
                <StyledCardSubTitle className="subtitle">
                  My whole career i worked on both sides BE and FE. Therefore i am not limited to only FE or BE. I could
                  tackle both sides.
                </StyledCardSubTitle>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <ServiceCard className="border">
              <ServiceCardBody>
                <ServiceImg src={mobile} alt="Mobile development" />
                <StyledCardTitle isContainer={false}>Mobile</StyledCardTitle>
                <StyledCardSubTitle className="subtitle">
                  I worked on multiple mobile applications durring my career. Most knowleged i have with ionic, xamarin
                </StyledCardSubTitle>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
