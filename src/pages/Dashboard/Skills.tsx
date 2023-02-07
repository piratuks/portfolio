import { Card } from 'components/ui/Card';
import { Section } from 'components/ui/Section';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
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

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
  gap: 15px;
`;
const StyledLink = styled(Link)`
  color: #495057;
  font-size: 54px;
  :hover {
    color: #ff7a57;
  }
`;

export const Skills: FC = () => {
  return (
    <Section>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Skills</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          Why Choose me
        </StyledTitle>
        <Card hasExtras={false} className={'mb-4'}>
          <StyledSubTitle isContainer={false}>
            These are, but not limited to, the tech I use for building client-side applications
          </StyledSubTitle>
          <SkillWrapper>
            <StyledLink to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
              <AiFillHtml5 />
            </StyledLink>
            <StyledLink to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <IoLogoCss3 />
            </StyledLink>
            <StyledLink to="https://sass-lang.com/" target="_blank">
              <IoLogoSass />
            </StyledLink>
            <StyledLink to="https://lesscss.org/" target="_blank">
              <SiLess />
            </StyledLink>
            <StyledLink to="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss />
            </StyledLink>
            <StyledLink to="https://getbootstrap.com/" target="_blank">
              <SiBootstrap />
            </StyledLink>
            <StyledLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <IoLogoJavascript />
            </StyledLink>
            <StyledLink to="https://vuejs.org/" target="_blank">
              <IoLogoVue />
            </StyledLink>
            <StyledLink to="https://reactjs.org/" target="_blank">
              <IoLogoReact />
            </StyledLink>
            <StyledLink to="https://react-redux.js.org/" target="_blank">
              <SiRedux />
            </StyledLink>
            <StyledLink to="https://jquery.com/" target="_blank">
              <SiJquery />
            </StyledLink>
            <StyledLink to="https://www.typescriptlang.org/" target="_blank">
              <SiTypescript />
            </StyledLink>
            <StyledLink to="https://ionicframework.com/" target="_blank">
              <SiIonic />
            </StyledLink>
            <StyledLink to="https://socket.io/" target="_blank">
              <SiSocketdotio />
            </StyledLink>
            <StyledLink to="https://leafletjs.com/" target="_blank">
              <SiLeaflet />
            </StyledLink>
            <StyledLink to="https://www.swift.com/" target="_blank">
              <SiSwift />
            </StyledLink>
            <StyledLink to="https://dotnet.microsoft.com/en-us/apps/xamarin" target="_blank">
              <SiXamarin />
            </StyledLink>
          </SkillWrapper>
        </Card>
        <Card hasExtras={false} className={'mb-4'}>
          <StyledSubTitle isContainer={false}>
            These are, but not limited to, the tech I use for building fast and scalable backend applications
          </StyledSubTitle>
          <SkillWrapper>
            <StyledLink to="https://nodejs.org/en/" target="_blank">
              <IoLogoNodejs />
            </StyledLink>
            <StyledLink to="https://expressjs.com/" target="_blank">
              <SiExpress />
            </StyledLink>
            <StyledLink to="https://www.typescriptlang.org/" target="_blank">
              <SiTypescript />
            </StyledLink>
            <StyledLink to="https://www.java.com/en/" target="_blank">
              <SiJava />
            </StyledLink>
            <StyledLink to="https://www.python.org/" target="_blank">
              <SiPython />
            </StyledLink>
            <StyledLink to="https://www.postgresql.org/" target="_blank">
              <SiPostgresql />
            </StyledLink>
            <StyledLink to="https://www.microsoft.com/en-us/sql-server" target="_blank">
              <SiMicrosoftsqlserver />
            </StyledLink>
            <StyledLink to="https://www.oracle.com/" target="_blank">
              <SiOracle />
            </StyledLink>
            <StyledLink to="https://www.mysql.com/" target="_blank">
              <SiMysql />
            </StyledLink>
            <StyledLink to="https://www.php.net/" target="_blank">
              <SiPhp />
            </StyledLink>
            <StyledLink to="https://laravel.com/" target="_blank">
              <SiLaravel />
            </StyledLink>
            <StyledLink to="https://www.yiiframework.com/" target="_blank">
              <DiYii />
            </StyledLink>
            <StyledLink to="https://wordpress.com" target="_blank">
              <SiWordpress />
            </StyledLink>
            <StyledLink to="https://cakephp.org/" target="_blank">
              <SiCakephp />
            </StyledLink>
          </SkillWrapper>
        </Card>
        <Card hasExtras={false} className={'mb-4'}>
          <StyledSubTitle isContainer={false}>Others...and more!</StyledSubTitle>
          <SkillWrapper>
            <StyledLink to="https://www.selenium.dev/" target="_blank">
              <SiSelenium />
            </StyledLink>
            <StyledLink to="https://www.cypress.io/" target="_blank">
              <SiCypress />
            </StyledLink>
            <StyledLink to="https://js.devexpress.com/" target="_blank">
              <SiDevexpress />
            </StyledLink>
            <StyledLink to="https://gulpjs.com/" target="_blank">
              <SiGulp />
            </StyledLink>
            <StyledLink to="https://slack.com/" target="_blank">
              <SiSlack />
            </StyledLink>
            <StyledLink to="https://teams.microsoft.com/" target="_blank">
              <SiMicrosoftteams />
            </StyledLink>
            <StyledLink to="https://bitbucket.org/" target="_blank">
              <SiBitbucket />
            </StyledLink>
            <StyledLink to="https://github.com/" target="_blank">
              <SiGithub />
            </StyledLink>
            <StyledLink to="https://git-scm.com/" target="_blank">
              <DiGit />
            </StyledLink>
            <StyledLink to="https://www.atlassian.com" target="_blank">
              <SiJira />
            </StyledLink>
            <StyledLink to="https://www.npmjs.com/" target="_blank">
              <SiNpm />
            </StyledLink>
            <StyledLink to="https://firebase.google.com/" target="_blank">
              <SiFirebase />
            </StyledLink>
            <StyledLink to="https://www.bugsnag.com/" target="_blank">
              <SiBugsnag />
            </StyledLink>
            <StyledLink to="https://www.vagrantup.com/" target="_blank">
              <SiVagrant />
            </StyledLink>
            <StyledLink to="https://azure.microsoft.com/en-us/" target="_blank">
              <SiMicrosoftazure />
            </StyledLink>
            <StyledLink to="https://www.docker.com/" target="_blank">
              <SiDocker />
            </StyledLink>
            <StyledLink to="https://www.redhat.com/en/technologies/cloud-computing/openshift" target="_blank">
              <SiRedhatopenshift />
            </StyledLink>
            <StyledLink to="https://www.sonarsource.com/" target="_blank">
              <SiSonarqube />
            </StyledLink>
            <StyledLink to="https://webpack.js.org/" target="_blank">
              <SiWebpack />
            </StyledLink>
            <StyledLink to="https://www.postman.com/" target="_blank">
              <SiPostman />
            </StyledLink>
          </SkillWrapper>
        </Card>
      </Container>
    </Section>
  );
};
