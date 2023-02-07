import logoDarkPurple from 'assets/logo-dark-purple.svg';
import logoMint from 'assets/logo-mint.svg';
import logoOrange from 'assets/logo-orange.svg';
import logoPurple from 'assets/logo-purple.svg';
import logoSolar from 'assets/logo-solar.svg';

import { LogoImgElement } from 'components/ui/Logo';
import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import styled from 'styled-components';
import { AppProps } from './App';
import { defaultTheme } from './constant';
import { Theme } from './theme';

const StyledWrapperElement = styled.div`
  .navbar.affix {
    box-shadow: 0 6px 15px rgba(var(--bs-dark-rgb), 0.3);
  }
`;
const StyledNavbarElement = styled(Navbar)`
  padding: 0;
  min-height: 80px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: var(--bs-white);
  @media (max-width: 767.98px) {
    .navbar {
      padding: 0 20px;
    }
  }
`;
const StyledLogoElement = styled(LogoImgElement)`
  width: 90px;
`;
const SyledNavElement = styled(Nav)`
  height: auto;
  .nav-link.active {
    color: var(--bs-primary);
  }
`;
const SyledNavLinkElement = styled(Nav.Link)`
  font-size: 13px;
  font-weight: bold;
  margin: 0 10px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const AppHeader: FC<AppProps> = ({ sectionRefs }) => {
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150
  });
  const navActiveSection = useScrollSpy({
    sectionElementRefs: [sectionRefs[0]],
    offsetPx: 0,
    activeSectionDefault: -1
  });

  let logoImg = logoOrange;
  switch (defaultTheme) {
    case Theme.orange: {
      logoImg = logoOrange;
      break;
    }
    case Theme.mint: {
      logoImg = logoMint;
      break;
    }
    case Theme.purple: {
      logoImg = logoPurple;
      break;
    }
    case Theme.darkPurple: {
      logoImg = logoDarkPurple;
      break;
    }
    case Theme.solar: {
      logoImg = logoSolar;
      break;
    }
    default: {
      logoImg = logoOrange;
      break;
    }
  }

  return (
    <StyledWrapperElement>
      <StyledNavbarElement expand="lg" fixed="top" className={navActiveSection === 0 ? 'affix' : ''}>
        <Container>
          <Navbar.Brand href="#">
            <StyledLogoElement
              src={logoImg}
              alt="Evaldas Laureckas Software Development"
              onClick={() => {
                sectionRefs[0].current?.scrollIntoView();
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <SyledNavElement className="ms-auto">
              <SyledNavLinkElement
                className={activeSection === 0 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[0].current?.scrollIntoView();
                }}
              >
                Home
              </SyledNavLinkElement>
              <SyledNavLinkElement
                className={activeSection === 1 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[1].current?.scrollIntoView();
                }}
              >
                About
              </SyledNavLinkElement>
              <SyledNavLinkElement
                className={activeSection === 2 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[2].current?.scrollIntoView();
                }}
              >
                Services
              </SyledNavLinkElement>
              <SyledNavLinkElement
                className={activeSection === 3 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[3].current?.scrollIntoView();
                }}
              >
                Resume
              </SyledNavLinkElement>
              <SyledNavLinkElement
                className={activeSection === 4 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[4].current?.scrollIntoView();
                }}
              >
                Testmonial
              </SyledNavLinkElement>
              <SyledNavLinkElement
                className={activeSection === 5 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[5].current?.scrollIntoView();
                }}
              >
                Contacts
              </SyledNavLinkElement>
              <SyledNavLinkElement href="#">{/* theme toggle */}</SyledNavLinkElement>
            </SyledNavElement>
          </Navbar.Collapse>
        </Container>
      </StyledNavbarElement>
    </StyledWrapperElement>
  );
};
