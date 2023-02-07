import { PageProps } from 'app/App';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { Section } from 'components/ui/Section';
import { StyledSubTitle } from 'components/ui/StyledSubTitle';
import { StyledTitle } from 'components/ui/StyledTitle';
import { FC } from 'react';
import { Container, Form } from 'react-bootstrap';
import { SlLocationPin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import styled from 'styled-components';

const StyledContactBlock = styled.div`
  position: relative;
  border-radius: 0.3rem;
  border: 1px solid 1px;
  box-shadow: 1px 2px 6px rgba(173, 181, 189, 0.5);
  padding: 0 25px 0 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  max-width: 1000px;
  margin: 0 auto 150px;
  z-index: 99;
  background: #fff;

  @media (max-width: 991.98px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 20px;
  }
`;
const StyledFormBlock = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-right: 1px solid #dee2e6;
  padding: 25px 25px 25px 0;

  @media (max-width: 991.98px) {
    margin: 0 0 20px 0;
    padding: 0;
    border-right: 0;
  }
`;
const StyledContactsBlock = styled.div`
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  margin-left: 30px;
  min-width: 350px;

  @media (max-width: 991.98px) {
    display: none;
  }
`;
const StyledContactsItem = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const StyledContactsItemInfo = styled.div`
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 25px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;
const StyledH5 = styled.h5`
  margin-bottom: 10px;
  opacity: 0.9;
`;
const StyledParagraph = styled.p`
  opacity: 0.7;
  font-size: 15px;
  margin-bottom: 4px;
`;
const StyledIcons = styled.div`
  display: block;
  width: 40px;
  font-size: 16px;
  color: primary;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid #ff7a57;
  line-height: 34px;
  text-align: center;
  padding: 0 !important;
  color: #ff7a57;
  margin-right: 15px;
`;
const StyledFormGroup = styled(Form.Group)`
  .form-control {
    color: #495057;
    font-size: 1rem;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #ffdfd7;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 122, 87, 0.25);
  }
`;

export const Contacts: FC<PageProps> = ({ sectionRef }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.formBasicEmail.value);
  };

  return (
    <Section sectionRef={sectionRef}>
      <Container className="text-center">
        <StyledSubTitle isContainer={false}>Contact</StyledSubTitle>
        <StyledTitle isContainer={false} className={'mb-4'}>
          Get In Touch With Me
        </StyledTitle>
        <p className="mb-5 pb-4">Thanks for taking the time to reach out. How can I help you today?</p>

        <StyledContactBlock className="text-start">
          <StyledFormBlock>
            <Form onSubmit={handleSubmit}>
              <StyledFormGroup className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" size="lg" />
              </StyledFormGroup>
              <StyledFormGroup className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" size="lg" />
              </StyledFormGroup>
              <StyledFormGroup className="mb-3" controlId="formBasicMessage">
                <Form.Control as="textarea" rows={5} type="text" placeholder="Message" size="lg" />
              </StyledFormGroup>
              <Buttons
                buttons={[
                  {
                    className: 'w-lg btn-block',
                    handleClick: () => () => console.log,
                    type: BtnType.primary,
                    caption: 'Send Message',
                    isSubmit: true
                  }
                ]}
              />
            </Form>
          </StyledFormBlock>
          <StyledContactsBlock>
            <StyledContactsItem>
              <StyledIcons>
                <SlLocationPin />
              </StyledIcons>
              <StyledContactsItemInfo>
                <StyledH5>Location</StyledH5>
                <StyledParagraph>Klaipėda, Lithuania</StyledParagraph>
              </StyledContactsItemInfo>
            </StyledContactsItem>
            <StyledContactsItem>
              <StyledIcons>
                <TfiEmail />
              </StyledIcons>
              <StyledContactsItemInfo>
                <StyledH5>Email Address</StyledH5>
                <StyledParagraph>evaldas.laureckas@gmail.com</StyledParagraph>
              </StyledContactsItemInfo>
            </StyledContactsItem>
          </StyledContactsBlock>
        </StyledContactBlock>
      </Container>
    </Section>
  );
};
