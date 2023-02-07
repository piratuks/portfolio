import { PageProps } from 'app/App';
import backend from 'assets/backend.svg';
import frontend from 'assets/frontend.svg';
import fullstack from 'assets/fullstack.svg';
import mobile from 'assets/mobile.svg';
import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitle = styled(StyledTitle)`
  color: #ff7a57;
`;
const CardSubTitle = styled.div`
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

export const Services: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef}>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Service</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          What I Do
        </StyledTitle>
        <Row>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={frontend} alt="Frontend development" />
              <CardTitle isContainer={false}>Frontend</CardTitle>
              <CardSubTitle className="subtitle">
                I am capable to develop solutions with any modern frontend framework. Most knowledge i have with
                Angular, Vue, Knockout, React.
              </CardSubTitle>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={backend} alt="Backend development" />
              <CardTitle isContainer={false}>Backend</CardTitle>
              <CardSubTitle className="subtitle">
                I am capable to develop BE solutions with Microsoft stack, PHP or Node. However i am not limiting myself
                to only these technologies.
              </CardSubTitle>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={fullstack} alt="Fullstack development" />
              <CardTitle isContainer={false}>Fullstack</CardTitle>
              <CardSubTitle className="subtitle">
                My whole career i worked on both sides BE and FE. Therefore i am not limited to only FE or BE. I could
                tackle both sides.
              </CardSubTitle>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={mobile} alt="Mobile development" />
              <CardTitle isContainer={false}>Mobile</CardTitle>
              <CardSubTitle className="subtitle">
                I worked on multiple mobile applications durring my career. Most knowleged i have with Ionic, Xamarin.
              </CardSubTitle>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
