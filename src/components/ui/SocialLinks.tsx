import { FC } from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSocialsElement = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;
const StyledLinkElement = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  border: 2px solid var(--bs-primary);
  text-align: center;
  line-height: 40px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
  :hover {
    background: var(--bs-primary);
    color: var(--bs-white);
  }
`;
const ColorSwitcherStyledLink = styled(StyledLinkElement)`
  border: 2px solid var(--bs-white);
  color: var(--bs-white);
  :hover {
    background: var(--bs-white);
    color: var(--bs-primary);
  }
`;

interface Props {
  className?: string;
  switchColors: boolean;
}
export const SocialLinks: FC<Props> = ({ switchColors, className }) => {
  const LinkElement = switchColors ? ColorSwitcherStyledLink : StyledLinkElement;
  return (
    <StyledSocialsElement className={className ?? ''}>
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
      <LinkElement
        to="#"
        onClick={e => {
          window.location.href = 'mailto:evaldas.laureckas@gmail.com';
          e.preventDefault();
        }}
      >
        <TfiEmail />
      </LinkElement>
    </StyledSocialsElement>
  );
};
