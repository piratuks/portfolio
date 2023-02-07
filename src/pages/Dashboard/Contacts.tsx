import { PageProps } from 'app/App';
import { BtnType, Buttons } from 'components/ui/Buttons';
import { Section } from 'components/ui/Section';
import { SubTitle } from 'components/ui/SubTitle';
import { Title } from 'components/ui/Title';
import { FC } from 'react';
import { Container, Form } from 'react-bootstrap';
import { SlLocationPin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import styled from 'styled-components';

const StyledContactBlockEElement = styled.div`
  position: relative;
  border-radius: 0.3rem;
  border: 1px solid 1px;
  box-shadow: 1px 2px 6px rgba(var(--bs-dark-rgb), 0.3);
  padding: 0 25px 0 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  max-width: 1000px;
  margin: 0 auto 150px;
  z-index: 99;
  background: var(--bs-white);

  @media (max-width: 991.98px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 20px;
  }
`;
const StyledFormBlockElement = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-right: 1px solid var(--bs-gray-300);
  padding: 25px 25px 25px 0;

  @media (max-width: 991.98px) {
    margin: 0 0 20px 0;
    padding: 0;
    border-right: 0;
  }
`;
const StyledContactsBlockElement = styled.div`
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  margin-left: 30px;
  min-width: 350px;

  @media (max-width: 991.98px) {
    display: none;
  }
`;
const StyledContactsItemElement = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const StyledContactsItemInfoElement = styled.div`
  border-bottom: 1px solid var(--bs-gray-300);
  margin-bottom: 25px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;
const StyledH5Element = styled.h5`
  margin-bottom: 10px;
  opacity: 0.9;
`;
const StyledParagraphElement = styled.p`
  opacity: 0.7;
  font-size: 15px;
  margin-bottom: 4px;
`;
const StyledIconsElement = styled.div`
  display: block;
  width: 40px;
  font-size: 16px;
  color: var(--bs-primary);
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid var(--bs-primary);
  line-height: 34px;
  text-align: center;
  padding: 0 !important;
  color: var(--bs-primary);
  margin-right: 15px;
`;
const StyledFormGroupElement = styled(Form.Group)`
  .form-control {
    color: var(--bs-gray-700);
    font-size: 1rem;
  }
  .form-control:focus {
    color: var(--bs-gray-700);
    outline: 0;
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
        <SubTitle isContainer={false}>Contact</SubTitle>
        <Title isContainer={false} className={'mb-4'}>
          Get In Touch With Me
        </Title>
        <p className="mb-5 pb-4">Thanks for taking the time to reach out. How can I help you today?</p>

        <StyledContactBlockEElement className="text-start">
          <StyledFormBlockElement>
            <Form onSubmit={handleSubmit}>
              <StyledFormGroupElement className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" size="lg" />
              </StyledFormGroupElement>
              <StyledFormGroupElement className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" size="lg" />
              </StyledFormGroupElement>
              <StyledFormGroupElement className="mb-3" controlId="formBasicMessage">
                <Form.Control as="textarea" rows={5} type="text" placeholder="Message" size="lg" />
              </StyledFormGroupElement>
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
          </StyledFormBlockElement>
          <StyledContactsBlockElement>
            <StyledContactsItemElement>
              <StyledIconsElement>
                <SlLocationPin />
              </StyledIconsElement>
              <StyledContactsItemInfoElement>
                <StyledH5Element>Location</StyledH5Element>
                <StyledParagraphElement>Klaipėda, Lithuania</StyledParagraphElement>
              </StyledContactsItemInfoElement>
            </StyledContactsItemElement>
            <StyledContactsItemElement>
              <StyledIconsElement>
                <TfiEmail />
              </StyledIconsElement>
              <StyledContactsItemInfoElement>
                <StyledH5Element>Email Address</StyledH5Element>
                <StyledParagraphElement>evaldas.laureckas@gmail.com</StyledParagraphElement>
              </StyledContactsItemInfoElement>
            </StyledContactsItemElement>
          </StyledContactsBlockElement>
        </StyledContactBlockEElement>
      </Container>
    </Section>
  );
};
