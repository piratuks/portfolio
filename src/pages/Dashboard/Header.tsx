import { PageProps } from 'app/App';
import avatar from 'assets/avatar.svg';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { SocialLinks } from 'components/ui/SocialLinks';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { fileDownload } from 'utils/functionUtils';

const HeaderWrapperElement = styled.header`
  color: var(--bs-gray-700);
  height: 94vh;
  min-height: 650px;
  border-bottom: 1px solid var(--bs-gray-300);
`;
const StyledContainerElement = styled(Container)`
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
const ImgWrapperElement = styled.div`
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
const StyledAvatarImgElement = styled.img`
  width: 100%;
  max-width: 620px;
  -webkit-filter: drop-shadow(0 -4px 20px rgba(var(--bs-dark-rgb), 0.4));
  filter: drop-shadow(0 -4px 20px rgba(var(--bs-dark-rgb), 0.4));
  margin-left: auto;
  margin-right: -2rem;
`;
const InfoWrapperElement = styled.div`
  margin-top: 120px;
  @media (max-width: 991.98px) {
    margin-top: 0;
  }
`;
const WidgetElement = styled.div`
  position: relative;
  max-width: 650px;
  width: 95%;
  margin: 0 auto;
  border-radius: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  border: 1px solid var(--bs-gray-300);
  padding: 20px 0;
  margin-top: -50px;
  z-index: 999;
  background: var(--bs-white);
  box-shadow: 0 0 30px rgba(var(--bs-dark-rgb), 0.4);
  @media (max-width: 767.98px) {
    padding: 10px;
    margin-top: -32px;
  }
`;
const WidgetItemElement = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-basis: 0;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  text-align: center;
  border-right: 1px solid var(--bs-gray-300);
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

export interface SectionWithContactsProps extends PageProps {
  contactsRef: React.MutableRefObject<null | HTMLDivElement>;
}
export const Header: FC<SectionWithContactsProps> = ({ sectionRef, contactsRef }) => {
  return (
    <HeaderWrapperElement ref={sectionRef}>
      <StyledContainerElement>
        <InfoWrapperElement>
          <SubTitle isContainer={true}>hello, I&apos;m</SubTitle>
          <Title isContainer={true}>Evaldas Laureckas</Title>
          <p>Software Developer</p>

          <Buttons
            className={'pt-3'}
            buttons={[
              {
                handleClick: () => () => contactsRef.current?.scrollIntoView(),
                type: BtnType.primary,
                caption: 'HIRE ME'
              },
              {
                handleClick: () => () => fileDownload(),
                type: BtnType.dark,
                caption: 'DOWNLOAD CV'
              }
            ]}
          />

          <SocialLinks switchColors={false} className={'mt-4'} />
        </InfoWrapperElement>
        <ImgWrapperElement>
          <StyledAvatarImgElement src={avatar} alt="Evaldas Laureckas" />
        </ImgWrapperElement>
      </StyledContainerElement>

      <WidgetElement>
        <WidgetItemElement className="widget-item">
          <h2>10</h2>
          <p>Years of Working Experience</p>
        </WidgetItemElement>
        <WidgetItemElement className="widget-item">
          <h2>6</h2>
          <p>Recommendations</p>
        </WidgetItemElement>
      </WidgetElement>
    </HeaderWrapperElement>
  );
};
