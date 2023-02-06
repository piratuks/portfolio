import hexToRgba from 'hex-to-rgba';
import { LightenDarkenColor } from 'lighten-darken-color';
import { FC } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .btn.w-sm {
    min-width: 100px;
  }
  .btn.w-md {
    min-width: 130px;
  }
  .btn.w-lg {
    min-width: 160px;
  }
  .btn.btn-block {
    display: block;
    width: 100%;
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

  .btn-primary:focus,
  .btn-primary.focus {
    box-shadow: 0 0 0 0.2rem ${hexToRgba('#DE6D50', '0.5')};
  }
  .btn-primary.disabled,
  .btn-primary:disabled {
    color: #fff;
    background-color: ${LightenDarkenColor('#ff7a57', 30)};
    border-color: ${LightenDarkenColor('#ff7a57', 40)};
  }
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active {
    color: #fff;
    background-color: ${LightenDarkenColor('#ff7a57', -20)};
    border-color: ${LightenDarkenColor('#ff7a57', 40)};
  }
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem ${hexToRgba('#DE6D50 ', '0.5')};
  }

  .btn-outline-primary:focus,
  .btn-outline-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 122, 87, 0.5);
  }
  .btn-outline-primary.disabled,
  .btn-outline-primary:disabled {
    color: #ff7a57;
    background-color: transparent;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active {
    color: white;
    background-color: #ff7a57;
    border-color: #ff7a57;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 122, 87, 0.5);
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
const StyledPrimaryOutlineButton = styled(StyledButton)`
  color: #ff7a57;
  border-color: #ff7a57;
  :hover {
    color: white;
    background-color: #ff7a57;
    border-color: #ff7a57;
  }
`;

export enum BtnType {
  primary = 'primary',
  primaryOutline = 'outline-primary',
  dark = 'dark'
}
interface Props {
  className?: string;
  buttons: Array<{
    className?: string;
    handleClick: () => void;
    type: BtnType;
    caption: string;
    isSubmit?: boolean;
  }>;
}
export const StyledButtons: FC<Props> = ({ className, buttons }) => {
  return (
    <StyledWrapper className={className ?? ''}>
      {buttons.map((button, index) => {
        if (button.type === BtnType.dark)
          return (
            <StyledDarkButton
              className={button.className ?? ''}
              variant={button.type}
              size="lg"
              onClick={button.isSubmit ? () => {} : button.handleClick()}
              key={index}
              type={button.isSubmit ? 'submit' : 'button'}
            >
              {button.caption}
            </StyledDarkButton>
          );
        else if (button.type === BtnType.primary)
          return (
            <StyledPrimaryButton
              className={button.className ?? ''}
              variant={button.type}
              size="lg"
              key={index}
              type={button.isSubmit ? 'submit' : 'button'}
              onClick={button.isSubmit ? () => {} : button.handleClick()}
            >
              {button.caption}
            </StyledPrimaryButton>
          );
        else if (button.type === BtnType.primaryOutline)
          return (
            <StyledPrimaryOutlineButton
              className={button.className ?? ''}
              variant={button.type}
              size="lg"
              key={index}
              type={button.isSubmit ? 'submit' : 'button'}
              onClick={button.isSubmit ? () => {} : button.handleClick()}
            >
              {button.caption}
            </StyledPrimaryOutlineButton>
          );
      })}
    </StyledWrapper>
  );
};
