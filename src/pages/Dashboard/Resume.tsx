import { PageProps } from 'app/App';
import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitleElement = styled(Title)`
  color: var(--bs-primary);
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
`;

export const Resume: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef}>
      <Container className="text-center">
        <SubTitle isContainer={false}>Experience</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          Roles and Projects i have been part of
        </Title>
        <Row>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>Chevron Corporation</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract</SubTitle>
              <Badge bg="primary" pill>
                Current
              </Badge>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Application Engineer</SubTitle>
                  <Badge bg="secondary" pill>
                    Dec 2022 - Present
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>Danske Bank</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 2 year 1 month</SubTitle>
              {/* <Badge bg="primary" pill>
                Current
              </Badge> */}
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Senior Frontend Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Feb 2021 - Feb 2023
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>VaultSpeed</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 3 years 7 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Lead Frontend Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Nov 2020 - Feb 2023
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Fullstack Javascript Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2019 - Nov 2020
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>Elsis Pro</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 9 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Fullstack Javascript Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2020 - Apr 2021
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>The Good Till Co</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 1 year 2 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>App Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2018 - Jul 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>PCByVoice LTD</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 7 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2018 - Feb 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>STMCB Limited t/a Inspiratia</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 6 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Fullstack .NET Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2018 - Aug 2018
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>UAB Omega Technology</CardTitleElement>
              <SubTitle isContainer={false}>Employment, Onsite, 5 years 7 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Software Systems Engineer</SubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2013 - Jun 2018
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>The Trainee Programmer / Tester</SubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2012 - Aug 2012
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>LaunchMen</CardTitleElement>
              <SubTitle isContainer={false}>Remote, Contract, 2 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Web Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Jan 2015 - Feb 2015
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitleElement isContainer={false}>VŠĮ Technology and Business School</CardTitleElement>
              <SubTitle isContainer={false}>Employment, Onsite, 1 months</SubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <SubTitle isContainer={false}>Web Developer</SubTitle>
                  <Badge bg="secondary" pill>
                    Sep 2012 - Sep 2012
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
