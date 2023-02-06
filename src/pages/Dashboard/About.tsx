import { scope } from 'app/constant';
import { BtnType, StyledButtons } from 'components/ui/StyledButtons';
import { StyledSection } from 'components/ui/StyledSection';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { fileDownload } from 'utils/functionUtils';
import { DashboardPageProps } from '.';

const StyledListItem = styled(ListGroup.Item)`
  color: #495057;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));
`;

export const About: FC<DashboardPageProps> = ({ sectionRef }) => {
  return (
    <StyledSection className={'mt-3'}>
      <Container className="mt-5" ref={sectionRef}>
        <Row className="text-center text-md-start">
          <Col md={3}>
            <img
              className="img-thumbnail mb-4"
              src={`${scope}/photo.jpg`}
              alt="Evaldas Laureckas Software Development"
            />
          </Col>
          <Col md={9} className="ps-md-4">
            <Title isContainer={false}>Evaldas Laureckas</Title>
            <SubTitle isContainer={false}>Software Developer</SubTitle>
            <p>
              Master’s degree within marine engineering and bachelor’s degree from faculty of natural science,
              mathematics computer science department. I am an Innovative software engineer offering over ten years of
              experience in the entire software development lifecycle – from concept through delivery of applications
              and customizable solutions. I have been developing in-house business system, small and large enterprise I
              can analyse code and engineer well-researched, cost-effective, and responsive solutions. I have ability to
              quickly acquire the knowledge you need for the task at hand
            </p>

            <ListGroup variant="flush">
              <StyledListItem>Analyzing end user needs and then developing software to meet their needs</StyledListItem>
              <StyledListItem>Developing features across multiple applications</StyledListItem>
              <StyledListItem>Reviewing code for quality and adherence to standards</StyledListItem>
              <StyledListItem>Responding promptly to reports of bugs</StyledListItem>
              <StyledListItem>Service level reporting</StyledListItem>
              <StyledListItem>Clearly communicating technical concepts</StyledListItem>
              <StyledListItem>Maintaining proper software configuration management</StyledListItem>
              <StyledListItem>Ensuring proper source code documentation</StyledListItem>
              <StyledListItem>Continuous deployment</StyledListItem>
              <StyledListItem>Have experience in fully remote job/positions</StyledListItem>
              <StyledListItem>Experience in leading the team</StyledListItem>
              <StyledListItem> Experience in teams within Enterprise / Start-up setup</StyledListItem>
            </ListGroup>

            <StyledButtons
              buttons={[
                {
                  className: 'mt-3',
                  handleClick: () => () => fileDownload(),
                  type: BtnType.primary,
                  caption: 'DOWNLOAD CV'
                }
              ]}
            />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
