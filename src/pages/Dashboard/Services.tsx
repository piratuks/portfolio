import { PageProps } from 'app/App';
import backend from 'assets/backend.svg';
import frontend from 'assets/frontend.svg';
import fullstack from 'assets/fullstack.svg';
import mobile from 'assets/mobile.svg';
import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitleElement = styled(Title)`
  color: var(--bs-primary);
`;
const CardSubTitleElements = styled.div`
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
        <SubTitle isContainer={false}>Service</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          What I Do
        </Title>
        <Row>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={frontend} alt="Frontend development" />
              <CardTitleElement isContainer={false}>Frontend</CardTitleElement>
              <CardSubTitleElements className="subtitle">
                I am capable to develop solutions with any modern frontend framework. Most knowledge i have with
                Angular, Vue, Knockout, React.
              </CardSubTitleElements>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={backend} alt="Backend development" />
              <CardTitleElement isContainer={false}>Backend</CardTitleElement>
              <CardSubTitleElements className="subtitle">
                I am capable to develop BE solutions with Microsoft stack, PHP or Node. However i am not limiting myself
                to only these technologies.
              </CardSubTitleElements>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={fullstack} alt="Fullstack development" />
              <CardTitleElement isContainer={false}>Fullstack</CardTitleElement>
              <CardSubTitleElements className="subtitle">
                My whole career i worked on both sides BE and FE. Therefore i am not limited to only FE or BE. I could
                tackle both sides.
              </CardSubTitleElements>
            </Card>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <Card hasExtras={true}>
              <ServiceImg src={mobile} alt="Mobile development" />
              <CardTitleElement isContainer={false}>Mobile</CardTitleElement>
              <CardSubTitleElements className="subtitle">
                I worked on multiple mobile applications durring my career. Most knowleged i have with Ionic, Xamarin.
              </CardSubTitleElements>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
