import { scope } from 'app/constant';
import avatar from 'assets/avatar.svg';
import { SocialLinks } from 'components/ui/SocialLinks';
import { BtnType, StyledButtons } from 'components/ui/StyledButtons';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardPageProps } from '.';

const HeaderWrapper = styled.header`
  color: #495057;
  height: 94vh;
  min-height: 650px;
  border-bottom: 1px solid #dee2e6;
`;
const StyledContainer = styled(Container)`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  p {
    margin-top: -5px;
    font-size: 22px;
  }

  @media (max-width: 991.98px) {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;
const ImgWrapper = styled.div`
  height: 100%;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  padding-left: 0px;
  @media (max-width: 991.98px) {
    display: none;
  }
`;
const AvatarImg = styled.img`
  width: 100%;
  max-width: 620px;
  -webkit-filter: drop-shadow(0 -4px 20px rgba(206, 212, 218, 0.4));
  filter: drop-shadow(0 -4px 20px rgba(206, 212, 218, 0.4));
  margin-left: auto;
  margin-right: -2rem;
`;
const InfoWrapper = styled.div`
  margin-top: 120px;
  @media (max-width: 991.98px) {
    margin-top: 0;
  }
`;
const Widget = styled.div`
  position: relative;
  max-width: 650px;
  width: 95%;
  margin: 0 auto;
  border-radius: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  border: 1px solid #dee2e6;
  padding: 20px 0;
  margin-top: -50px;
  z-index: 999;
  background: #fff;
  box-shadow: 0 0 30px rgba(173, 181, 189, 0.4);
  @media (max-width: 767.98px) {
    padding: 10px;
    margin-top: -32px;
  }
`;
const WidgetItem = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-basis: 0;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  text-align: center;
  border-right: 1px solid #dee2e6;
  :last-child {
    border-right: 0;
  }
  h2,
  p {
    margin: 0;
  }
  p {
    opacity: 0.7;
    font-size: 14px;
  }
  @media (max-width: 767.98px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
  }
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

export const Header: FC<DashboardPageProps> = ({ sectionRef }) => {
  const fileDownload = () => {
    console.log('sadasd');
    const link = document.createElement('a');
    link.href = `${scope}/CV Evaldas Laureckas.pdf`;
    link.target = 'blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeaderWrapper ref={sectionRef}>
      <StyledContainer>
        <InfoWrapper>
          <SubTitle isContainer={true}>hello, I&apos;m</SubTitle>
          <Title isContainer={true}>Evaldas Laureckas</Title>
          <p>Software Developer</p>

          <StyledButtons
            className={'pt-3'}
            buttons={[
              { handleClick: () => () => {}, type: BtnType.primary, caption: 'HIRE ME' },
              {
                handleClick: () => () => fileDownload(),
                type: BtnType.dark,
                caption: 'DOWNLOAD CV'
              }
            ]}
          />

          <SocialLinks />
        </InfoWrapper>
        <ImgWrapper>
          <AvatarImg src={avatar} alt="Evaldas Laureckas" />
        </ImgWrapper>
      </StyledContainer>

      <Widget>
        <WidgetItem className="widget-item">
          <h2>10</h2>
          <p>Years of Working Experience</p>
        </WidgetItem>
        <WidgetItem className="widget-item">
          <h2>6</h2>
          <p>Recommendations</p>
        </WidgetItem>
      </Widget>
    </HeaderWrapper>
  );
};
