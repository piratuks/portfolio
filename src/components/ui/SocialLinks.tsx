import { FC } from 'react';
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
const ColorSwitcherStyledLink = styled(StyledLink)`
  border: 2px solid white;
  color: white;
  :hover {
    background: #fff;
    color: #ff7a57;
  }
`;

interface Props {
  className?: string;
  switchColors: boolean;
}
export const SocialLinks: FC<Props> = ({ switchColors, className }) => {
  const LinkElement = switchColors ? ColorSwitcherStyledLink : StyledLink;
  return (
    <Socials className={className ?? ''}>
      <LinkElement to="https://www.facebook.com/evaldas.laureckas/" target="_blank">
        <Facebook />
      </LinkElement>
      <LinkElement to="https://www.instagram.com/laureckas.evaldas/" target="_blank">
        <Instagram />
      </LinkElement>
      <LinkElement to="https://github.com/piratuks/" target="_blank">
        <Github />
      </LinkElement>
      <LinkElement to="https://twitter.com/ELaureckas/" target="_blank">
        <Twitter />
      </LinkElement>
      <LinkElement to="https://www.linkedin.com/in/evaldas123456/" target="_blank">
        <Linkedin />
      </LinkElement>
      {/* <LinkElement to="https://www.linkedin.com/in/evaldas123456/" target="_blank">
        <Linkedin /> MAil
      </LinkElement> */}
    </Socials>
  );
};
