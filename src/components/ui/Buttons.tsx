import { FC } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledWrapperElement = styled.div`
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
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary.disabled,
  .btn-primary:disabled,
  .btn-dark:not(:disabled):not(.disabled):active,
  .btn-dark:not(:disabled):not(.disabled).active,
  .btn-dark.disabled,
  .btn-dark:disabled,
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .btn-outline-primary.disabled,
  .btn-outline-primary:disabled {
    color: var(--bs-white);
  }
  .btn-primary:focus,
  .btn-primary.focus,
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .btn-outline-primary:focus,
  .btn-outline-primary.focus,
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.5);
  }
  .btn-dark:focus,
  .btn-dark.focus,
  .btn-dark:not(:disabled):not(.disabled):active:focus,
  .btn-dark:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem rgba(var(--bs-dark-rgb), 0.5);
  }
  .btn-outline-primary {
    color: var(--bs-primary);
  }
`;
const StyledButtonElement = styled(Button)`
  border-radius: 50px;
  display: inline-block;
  margin: 0 2px;
  font-size: 14px;
  font-weight: bold;
  padding: 0.65rem 0.9rem;
  color: var(--bs-white);
  :hover {
    color: var(--bs-white);
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
    isDisabled?: () => boolean;
  }>;
}
export const Buttons: FC<Props> = ({ className, buttons }) => {
  return (
    <StyledWrapperElement className={className ?? ''}>
      {buttons.map((button, index) => {
        return (
          <StyledButtonElement
            className={button.className ?? ''}
            variant={button.type}
            size="lg"
            onClick={button.isSubmit ? () => {} : button.handleClick()}
            key={index}
            disabled={button.isDisabled ? button.isDisabled() : false}
            type={button.isSubmit ? 'submit' : 'button'}
          >
            {button.caption}
          </StyledButtonElement>
        );
      })}
    </StyledWrapperElement>
  );
};
