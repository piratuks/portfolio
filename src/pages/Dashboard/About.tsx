import { PageProps } from 'app/App';
import { scope } from 'app/constant';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { Section } from 'components/ui/Section';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { fileDownload } from 'utils/functionUtils';

const StyledListItem = styled(ListGroup.Item)`
  color: #495057;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));
`;
export const About: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section className={'mt-3'} sectionRef={sectionRef}>
      <Container className="mt-5">
        <Row className="text-center text-md-start">
          <Col md={3}>
            <img
              className="img-thumbnail mb-4"
              src={`${scope}/photo.jpg`}
              alt="Evaldas Laureckas Software Development"
            />
          </Col>
          <Col md={9} className="ps-md-4">
            <StyledTitle isContainer={false}>Evaldas Laureckas</StyledTitle>
            <StyledSubTitle isContainer={false}>Software Developer</StyledSubTitle>
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
              <StyledListItem>Respond promptly to reports of bugs</StyledListItem>
              <StyledListItem>Service level reporting</StyledListItem>
              <StyledListItem>Clearly communicating technical concepts</StyledListItem>
              <StyledListItem>Maintaining proper software configuration management</StyledListItem>
              <StyledListItem>Ensuring proper source code documentation</StyledListItem>
              <StyledListItem>Continuous deployment</StyledListItem>
              <StyledListItem>Have experience in fully remote jobs/positions</StyledListItem>
              <StyledListItem>Experience in leading the team</StyledListItem>
              <StyledListItem>Experience in teams within Enterprise / Start-up setup</StyledListItem>
            </ListGroup>

            <Buttons
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
    </Section>
  );
};
