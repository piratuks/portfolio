import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiGit, DiYii } from 'react-icons/di';
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { IoLogoNodejs, IoLogoReact, IoLogoVue } from 'react-icons/io5';
import {
  SiBitbucket,
  SiBootstrap,
  SiBugsnag,
  SiCakephp,
  SiCypress,
  SiDevexpress,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGulp,
  SiIonic,
  SiJava,
  SiJira,
  SiJquery,
  SiLaravel,
  SiLeaflet,
  SiLess,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMicrosoftteams,
  SiMysql,
  SiNpm,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRedhatopenshift,
  SiRedux,
  SiSelenium,
  SiSlack,
  SiSocketdotio,
  SiSonarqube,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVagrant,
  SiWebpack,
  SiWordpress,
  SiXamarin
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SkillWrapperElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
  gap: 15px;
`;
const StyledLinkElement = styled(Link)`
  color: var(--bs-gray-700);
  font-size: 54px;
  :hover {
    color: var(--bs-primary);
  }
`;

export const Skills: FC = () => {
  return (
    <Section>
      <Container className="text-center">
        <SubTitle isContainer={false}>Skills</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          Why Choose me
        </Title>
        <Card hasExtras={false} className={'mb-4'}>
          <SubTitle isContainer={false}>
            These are, but not limited to, the tech I use for building client-side applications
          </SubTitle>
          <SkillWrapperElement>
            <StyledLinkElement to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
              <AiFillHtml5 />
            </StyledLinkElement>
            <StyledLinkElement to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <IoLogoCss3 />
            </StyledLinkElement>
            <StyledLinkElement to="https://sass-lang.com/" target="_blank">
              <IoLogoSass />
            </StyledLinkElement>
            <StyledLinkElement to="https://lesscss.org/" target="_blank">
              <SiLess />
            </StyledLinkElement>
            <StyledLinkElement to="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss />
            </StyledLinkElement>
            <StyledLinkElement to="https://getbootstrap.com/" target="_blank">
              <SiBootstrap />
            </StyledLinkElement>
            <StyledLinkElement to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <IoLogoJavascript />
            </StyledLinkElement>
            <StyledLinkElement to="https://vuejs.org/" target="_blank">
              <IoLogoVue />
            </StyledLinkElement>
            <StyledLinkElement to="https://reactjs.org/" target="_blank">
              <IoLogoReact />
            </StyledLinkElement>
            <StyledLinkElement to="https://react-redux.js.org/" target="_blank">
              <SiRedux />
            </StyledLinkElement>
            <StyledLinkElement to="https://jquery.com/" target="_blank">
              <SiJquery />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.typescriptlang.org/" target="_blank">
              <SiTypescript />
            </StyledLinkElement>
            <StyledLinkElement to="https://ionicframework.com/" target="_blank">
              <SiIonic />
            </StyledLinkElement>
            <StyledLinkElement to="https://socket.io/" target="_blank">
              <SiSocketdotio />
            </StyledLinkElement>
            <StyledLinkElement to="https://leafletjs.com/" target="_blank">
              <SiLeaflet />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.swift.com/" target="_blank">
              <SiSwift />
            </StyledLinkElement>
            <StyledLinkElement to="https://dotnet.microsoft.com/en-us/apps/xamarin" target="_blank">
              <SiXamarin />
            </StyledLinkElement>
          </SkillWrapperElement>
        </Card>
        <Card hasExtras={false} className={'mb-4'}>
          <SubTitle isContainer={false}>
            These are, but not limited to, the tech I use for building fast and scalable backend applications
          </SubTitle>
          <SkillWrapperElement>
            <StyledLinkElement to="https://nodejs.org/en/" target="_blank">
              <IoLogoNodejs />
            </StyledLinkElement>
            <StyledLinkElement to="https://expressjs.com/" target="_blank">
              <SiExpress />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.typescriptlang.org/" target="_blank">
              <SiTypescript />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.java.com/en/" target="_blank">
              <SiJava />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.python.org/" target="_blank">
              <SiPython />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.postgresql.org/" target="_blank">
              <SiPostgresql />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.microsoft.com/en-us/sql-server" target="_blank">
              <SiMicrosoftsqlserver />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.oracle.com/" target="_blank">
              <SiOracle />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.mysql.com/" target="_blank">
              <SiMysql />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.php.net/" target="_blank">
              <SiPhp />
            </StyledLinkElement>
            <StyledLinkElement to="https://laravel.com/" target="_blank">
              <SiLaravel />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.yiiframework.com/" target="_blank">
              <DiYii />
            </StyledLinkElement>
            <StyledLinkElement to="https://wordpress.com" target="_blank">
              <SiWordpress />
            </StyledLinkElement>
            <StyledLinkElement to="https://cakephp.org/" target="_blank">
              <SiCakephp />
            </StyledLinkElement>
          </SkillWrapperElement>
        </Card>
        <Card hasExtras={false} className={'mb-4'}>
          <SubTitle isContainer={false}>Others...and more!</SubTitle>
          <SkillWrapperElement>
            <StyledLinkElement to="https://www.selenium.dev/" target="_blank">
              <SiSelenium />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.cypress.io/" target="_blank">
              <SiCypress />
            </StyledLinkElement>
            <StyledLinkElement to="https://js.devexpress.com/" target="_blank">
              <SiDevexpress />
            </StyledLinkElement>
            <StyledLinkElement to="https://gulpjs.com/" target="_blank">
              <SiGulp />
            </StyledLinkElement>
            <StyledLinkElement to="https://slack.com/" target="_blank">
              <SiSlack />
            </StyledLinkElement>
            <StyledLinkElement to="https://teams.microsoft.com/" target="_blank">
              <SiMicrosoftteams />
            </StyledLinkElement>
            <StyledLinkElement to="https://bitbucket.org/" target="_blank">
              <SiBitbucket />
            </StyledLinkElement>
            <StyledLinkElement to="https://github.com/" target="_blank">
              <SiGithub />
            </StyledLinkElement>
            <StyledLinkElement to="https://git-scm.com/" target="_blank">
              <DiGit />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.atlassian.com" target="_blank">
              <SiJira />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.npmjs.com/" target="_blank">
              <SiNpm />
            </StyledLinkElement>
            <StyledLinkElement to="https://firebase.google.com/" target="_blank">
              <SiFirebase />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.bugsnag.com/" target="_blank">
              <SiBugsnag />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.vagrantup.com/" target="_blank">
              <SiVagrant />
            </StyledLinkElement>
            <StyledLinkElement to="https://azure.microsoft.com/en-us/" target="_blank">
              <SiMicrosoftazure />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.docker.com/" target="_blank">
              <SiDocker />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.redhat.com/en/technologies/cloud-computing/openshift" target="_blank">
              <SiRedhatopenshift />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.sonarsource.com/" target="_blank">
              <SiSonarqube />
            </StyledLinkElement>
            <StyledLinkElement to="https://webpack.js.org/" target="_blank">
              <SiWebpack />
            </StyledLinkElement>
            <StyledLinkElement to="https://www.postman.com/" target="_blank">
              <SiPostman />
            </StyledLinkElement>
          </SkillWrapperElement>
        </Card>
      </Container>
    </Section>
  );
};
