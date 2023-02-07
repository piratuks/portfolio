import { PageProps } from 'app/App';
import photo from 'assets/photo.jpg';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { fileDownload } from 'utils/functionUtils';

const StyledListItemElement = styled(ListGroup.Item)`
  color: var(--bs-gray-700);
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));
`;
export const About: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section className={'mt-3'} sectionRef={sectionRef}>
      <Container className="mt-5">
        <Row className="text-center text-md-start">
          <Col md={3}>
            <img className="img-thumbnail mb-4" src={photo} alt="Evaldas Laureckas Software Development" />
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
              <StyledListItemElement>
                Analyzing end user needs and then developing software to meet their needs
              </StyledListItemElement>
              <StyledListItemElement>Developing features across multiple applications</StyledListItemElement>
              <StyledListItemElement>Reviewing code for quality and adherence to standards</StyledListItemElement>
              <StyledListItemElement>Respond promptly to reports of bugs</StyledListItemElement>
              <StyledListItemElement>Service level reporting</StyledListItemElement>
              <StyledListItemElement>Clearly communicating technical concepts</StyledListItemElement>
              <StyledListItemElement>Maintaining proper software configuration management</StyledListItemElement>
              <StyledListItemElement>Ensuring proper source code documentation</StyledListItemElement>
              <StyledListItemElement>Continuous deployment</StyledListItemElement>
              <StyledListItemElement>Have experience in fully remote jobs/positions</StyledListItemElement>
              <StyledListItemElement>Experience in leading the team</StyledListItemElement>
              <StyledListItemElement>Experience in teams within Enterprise / Start-up setup</StyledListItemElement>
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
