import { PageProps } from 'app/App';
import { StyledCard } from 'components/ui/StyledCard';
import { StyledSection } from 'components/ui/StyledSection';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCardTitle = styled(StyledTitle)`
  color: #ff7a57;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
`;

export const Resume: FC<PageProps> = ({ sectionRef }) => {
  return (
    <StyledSection sectionRef={sectionRef}>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Experience</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          Roles and Projects i have been part of
        </StyledTitle>
        <Row>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>Chevron Corporation</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract</StyledSubTitle>
              <Badge bg="primary" pill>
                Current
              </Badge>

              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Application Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jan 2021 - Present
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>Danske Bank</StyledCardTitle>
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
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>VaultSpeed</StyledCardTitle>
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
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>Elsis Pro</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 9 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Fullstack Javascript Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2020 - Apr 2021
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>The Good Till Co</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 1 year 2 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>App Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2018 - Jul 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>PCByVoice LTD</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 7 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Aug 2018 - Feb 2019
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>STMCB Limited t/a Inspiratia</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 6 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Fullstack .NET Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2018 - Aug 2018
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>UAB Omega Technology</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Employment, Onsite, 5 years 7 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Software Systems Engineer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Mar 2013 - Jun 2018
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Teh Trainee Programmer / Tester</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jun 2012 - Aug 2012
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>LaunchMen</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Remote, Contract, 2 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Web Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Jan 2015 - Feb 2015
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <StyledCard hasExtras={false} className={'mb-4'}>
              <StyledCardTitle isContainer={false}>VŠĮ Technology and Business School</StyledCardTitle>
              <StyledSubTitle isContainer={false}>Employment, Onsite, 1 months</StyledSubTitle>
              <ListGroup variant="flush" className="pt-4">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <StyledSubTitle isContainer={false}>Web Developer</StyledSubTitle>
                  <Badge bg="secondary" pill>
                    Sep 2012 - Sep 2012
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
