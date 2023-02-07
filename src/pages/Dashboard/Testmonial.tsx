import { PageProps } from 'app/App';
import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCarouselElement = styled(Carousel)`
  .carousel-indicators {
    bottom: -60px;
  }
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 10px rgba(var(--bs-dark-rgb), 0.3), inset -1px -1px 7px rgba(var(--bs-dark-rgb), 0.3);
  }
  .carousel-indicators button.active {
    box-shadow: 0 0 5px rgba(var(--bs-dark-rgb), 0.3);
  }
`;
const CardCustomElement = styled(Card)`
  max-width: 700px;
  margin: 10px auto;
  padding: 20px 15px;
`;
const StyledTitleH1Element = styled.h1`
  margin-top: 30px;
  font-size: 20px;
`;

export const Testmonial: FC<PageProps> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef}>
      <Container className="text-center">
        <SubTitle isContainer={false}>Testmonial</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          What People Say About Me
        </Title>
        <p className="mb-5 pb-4">People I&apos;ve worked with have said some nice things...</p>

        <StyledCarouselElement indicators={true}>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                I have managed Evaldas for 3,5 years now, and I can only say that I value him a lot as a person as well
                as a great mentor & developer. As the lead developer, he was the driving force behind our
                industry-standard interface and a technical mentor for the other front-end developers on our team. His
                enthusiasm, energy, motivation, speed & quality of delivery are for me his strongest points.
              </p>
              <StyledTitleH1Element>Dirk Vermeiren</StyledTitleH1Element>
              <SubTitle isContainer={false}>Chief Technology Officer at VaultSpeed</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                I&apos;ve been working with Evaldas for the past year and couldn&apos;t have better opinion about him -
                Evaldas is an excellent person and professional. During this period Evaldas has proved multiple times
                his competence and seniority within his role always acting and performing on high level bringing the
                best outcome to our business and our team. I recall the various video call with shared screens where
                Evaldas had help me and the team to pin point details, troubleshoot issues and quick turn around bugs
                into fixes, ideas into new features and problems into solutions. Talking more into details its easy to
                remind about many FE initiatives lead by Evaldas and successful achieved - for example we are just to
                steps away to release the full new version of our product interface, an amazing revamp and redesigned
                work done by Evaldas and his team mate. Evaldas is not only a Lead Developer shinning within his
                technical tasks but he is also having the needed touch and sense to understand and deal with people.
                I&apos;m truly thankful to have the opportunity to work with such a professional as Evaldas and I&apos;m
                always looking forward to be in touch, doing things together and see him growing and growing
                accomplishing his targets and reaching his goals. Thanks very much Evaldas for all your input, all the
                teachings you been sharing with us and all the nice moments spend together - I&apos;ve no doubt that
                from you only one outcome is possible, the success! Best wishes!
              </p>
              <StyledTitleH1Element>Nuno Santos</StyledTitleH1Element>
              <SubTitle isContainer={false}>VaultSpeed Development Team Manager</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                Having worked with Evaldas for a little more than a year, I must say he is an excellent professional.
                Evaldas is an exceptional developer who possesses all the skills one would want in an excellent
                front-end software developer. He has been a great resource to my company. He did an incredible job on
                the Requirement Management project, making timely deliveries and helping the company deliver on our
                strategic visions. His work is always top-notch, and he is always welcoming to feedback and making
                improvements. Plus, Evaldas is self-motivated and a great team player.
              </p>
              <StyledTitleH1Element>Ravi Sejling</StyledTitleH1Element>
              <SubTitle isContainer={false}>Product Owner at Danske Bank</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                Evaldas is super “responsive” developer. I also appreciate that he is very proactive and really a Team
                player, at the same time Evaldas is able to analyze, understand problems and make solution suggestions.
                Excellent communication with other developers within the project!
              </p>
              <StyledTitleH1Element>Žilvinas Grigonis</StyledTitleH1Element>
              <SubTitle isContainer={false}>Head of Software Engineering | Innovation and Simplicity</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                Evaldas is a hardworking and diligent developer. Always keen to take feedback, take on new challenges
                and work with the team to achieve best results for everyone. Its a pleasure to with with Evaldas.
              </p>
              <StyledTitleH1Element>Animesh Chowdhury</StyledTitleH1Element>
              <SubTitle isContainer={false}>Tech entrepreneur, Seed Investor</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <CardCustomElement hasExtras={false} className={'mb-4'}>
              <p className="pb-4">
                We had the pleasure of working with Evaldas for approximately six months in 2018. Evaldas carried out
                several pieces of work for us including JavaScript coding and C# coding. We were most impressed by his
                output, adaptability, ability to work on his own unattended and his skill in developing innovative
                solutions to problems we posed. We would have no second thoughts about employing Evaldas for future work
                with our company.
              </p>
              <StyledTitleH1Element>Lindsay Adam</StyledTitleH1Element>
              <SubTitle isContainer={false}>Owner, PCByVoice</SubTitle>
            </CardCustomElement>
          </Carousel.Item>
        </StyledCarouselElement>
      </Container>
    </Section>
  );
};
