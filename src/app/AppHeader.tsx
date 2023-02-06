import logo from 'assets/logo.svg';
import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import styled from 'styled-components';
import { AppProps } from './App';

const Wrapper = styled.div`
  .navbar.affix {
    box-shadow: 0 6px 15px rgba(206, 212, 218, 0.3);
  }
`;
const StyledNavbar = styled(Navbar)`
  padding: 0;
  min-height: 80px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: #fff;
  @media (max-width: 767.98px) {
    .navbar {
      padding: 0 20px;
    }
  }
`;
const LogoImg = styled.img`
  width: 90px;
  -webkit-filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
  filter: drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9));
`;
const SyledNav = styled(Nav)`
  height: auto;
  .nav-link.active {
    color: #ff7a57;
  }
`;
const SyledNavLink = styled(Nav.Link)`
  font-size: 13px;
  font-weight: bold;
  margin: 0 10px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const AppHeader: FC<AppProps> = ({ sectionRefs }) => {
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -500
  });
  const navActiveSection = useScrollSpy({
    sectionElementRefs: [sectionRefs[0]],
    offsetPx: 0,
    activeSectionDefault: -1
  });

  return (
    <Wrapper>
      <StyledNavbar expand="lg" fixed="top" className={navActiveSection === 0 ? 'affix' : ''}>
        <Container>
          <Navbar.Brand href="#home">
            <LogoImg
              src={logo}
              alt="Evaldas Laureckas Software Development"
              onClick={() => {
                sectionRefs[0].current?.scrollIntoView();
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <SyledNav className="ms-auto">
              <SyledNavLink
                className={activeSection === 0 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[0].current?.scrollIntoView();
                }}
              >
                Home
              </SyledNavLink>
              <SyledNavLink
                className={activeSection === 1 ? 'active' : ''}
                onClick={() => {
                  sectionRefs[1].current?.scrollIntoView();
                }}
              >
                About
              </SyledNavLink>
              <SyledNavLink href="#services" className={activeSection === 2 ? 'active' : ''}>
                Services
              </SyledNavLink>
              <SyledNavLink href="#resume" className={activeSection === 3 ? 'active' : ''}>
                Resume
              </SyledNavLink>
              <SyledNavLink href="#portfolio" className={activeSection === 4 ? 'active' : ''}>
                Portfolio
              </SyledNavLink>
              <SyledNavLink href="#testmonial" className={activeSection === 5 ? 'active' : ''}>
                Testmonial
              </SyledNavLink>
              <SyledNavLink href="#contacts" className={activeSection === 6 ? 'active' : ''}>
                Contacts
              </SyledNavLink>
              <SyledNavLink href="#">{/* theme toggle */}</SyledNavLink>
            </SyledNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </Wrapper>
  );
};
