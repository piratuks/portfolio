import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Socials = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  border: 2px solid #ff7a57;
  color: #ff7a57;
  text-align: center;
  line-height: 40px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
  :hover {
    background: #ff7a57;
    color: #fff;
  }
`;

export const SocialLinks = () => {
  return (
    <Socials className="mt-4">
      <StyledLink to="https://www.facebook.com/evaldas.laureckas/" target={'blank'}>
        <Facebook />
      </StyledLink>
      <StyledLink to="https://www.instagram.com/laureckas.evaldas/" target={'blank'}>
        <Instagram />
      </StyledLink>
      <StyledLink to="https://github.com/piratuks/" target={'blank'}>
        <Github />
      </StyledLink>
      <StyledLink to="https://twitter.com/ELaureckas/" target={'blank'}>
        <Twitter />
      </StyledLink>
      <StyledLink to="https://www.linkedin.com/in/evaldas123456/" target={'blank'}>
        <Linkedin />
      </StyledLink>
    </Socials>
  );
};
