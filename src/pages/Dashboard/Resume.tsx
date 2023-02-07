import { PageProps } from 'app/App';
import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitle = styled(StyledTitle)`
  color: #ff7a57;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
`;

export const Resume: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef}>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Experience</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          Roles and Projects i have been part of
        </StyledTitle>
        <Row>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>Chevron Corporation</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract</StyledSubTitle>
              <Badge bg="primary" pill>
                Current
              </Badge>

              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Application Engineer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Dec 2022 - Present
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>Danske Bank</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 2 year 1 months</StyledSubTitle>
              {/* <Badge bg="primary" pill>
                Current
              </Badge> */}

              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Senior Frontend Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Feb 2021 - Feb 2023
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>VaultSpeed</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 2 years 4 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Lead Frontend Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Nov 2020 - Feb 2023
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Fullstack Javascript Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2019 - Nov 2020
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>Elsis Pro</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 9 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Fullstack Javascript Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2020 - Apr 2021
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>The Good Till Co</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 1 year 2 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>App Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2018 - Jul 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>PCByVoice LTD</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 7 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2018 - Feb 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>STMCB Limited t/a Inspiratia</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 6 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Fullstack .NET Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2018 - Aug 2018
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>UAB Omega Technology</CardTitle>
              <StyledSubTitle isContainer={false}>Employment, Onsite, 5 years 7 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Software Systems Engineer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2013 - Jun 2018
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>The Trainee Programmer / Tester</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2012 - Aug 2012
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>LaunchMen</CardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 2 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Web Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jan 2015 - Feb 2015
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <Card hasExtras={false} className={'mb-4'}>
              <CardTitle isContainer={false}>VŠĮ Technology and Business School</CardTitle>
              <StyledSubTitle isContainer={false}>Employment, Onsite, 1 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Web Developer</StyledSubTitle>
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
