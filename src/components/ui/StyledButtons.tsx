import hexToRgba from 'hex-to-rgba';
import { LightenDarkenColor } from 'lighten-darken-color';
import { FC } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  .btn.w-sm {
    min-width: 100px;
  }
  .btn.w-md {
    min-width: 130px;
  }
  .btn.w-lg {
    min-width: 160px;
  }
  .btn-dark:focus,
  .btn-dark.focus {
    box-shadow: 0 0 0 0.2rem ${hexToRgba('#52585d', '0.5')};
  }
  .btn-dark.disabled,
  .btn-dark:disabled {
    color: #fff;
    background-color: ${LightenDarkenColor('#343a40', 30)};
    border-color: ${LightenDarkenColor('#343a40', 40)};
  }
  .btn-dark:not(:disabled):not(.disabled):active,
  .btn-dark:not(:disabled):not(.disabled).active {
    color: #fff;
    background-color: ${LightenDarkenColor('#343a40', -20)};
    border-color: ${LightenDarkenColor('#343a40', 40)};
  }
  .btn-dark:not(:disabled):not(.disabled):active:focus,
  .btn-dark:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem ${hexToRgba('#52585d', '0.5')};
  }
`;
const StyledButton = styled(Button)`
  border-radius: 50px;
  display: inline-block;
  margin: 0 2px;
  font-size: 14px;
  font-weight: bold;
  padding: 0.65rem 0.9rem;
`;
const StyledPrimaryButton = styled(StyledButton)`
  color: #fff;
  background-color: #ff7a57;
  border-color: #ff7a57;
  :hover {
    color: #fff;
    background-color: ${LightenDarkenColor('#ff7a57', -30)};
    border-color: ${LightenDarkenColor('#ff7a57', -40)};
  }
`;
const StyledDarkButton = styled(StyledButton)`
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  :hover {
    color: #fff;
    background-color: ${LightenDarkenColor('#343a40', -30)};
    border-color: ${LightenDarkenColor('#343a40', -40)};
  }
`;

export enum BtnType {
  primary = 'Primary',
  dark = 'dark'
}
interface Props {
  className: string;
  buttons: Array<{
    handleClick: () => void;
    type: BtnType;
    caption: string;
  }>;
}
export const StyledButtons: FC<Props> = ({ className, buttons }) => {
  return (
    <Wrapper className={className}>
      {buttons.map((button, index) => {
        if (button.type === BtnType.dark)
          return (
            <StyledDarkButton variant="dark" size="lg" onClick={button.handleClick()} key={index}>
              {button.caption}
            </StyledDarkButton>
          );
        else if (button.type === BtnType.primary)
          return (
            <StyledPrimaryButton variant="primary" size="lg" key={index} onClick={button.handleClick()}>
              {button.caption}
            </StyledPrimaryButton>
          );
      })}
    </Wrapper>
  );
};
