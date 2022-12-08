import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonRootProps } from '../../types/props';

const ButtonHoverState = css<ButtonRootProps>`
  background: ${({ variant, type, theme: { button: { background: { secondary, primary } } } }) => (
    (variant === 'primary' && primary.hovered)
    || ((variant === 'secondary' && (!type || type === 'filled')) && secondary.hovered)
  )};
  color: ${({ variant, type, theme: { button: { color, background } } }) => (
    (variant === 'primary' && color.primary.hovered)
      || ((variant === 'secondary' && type === 'outlined') && background.secondary.hovered)
      || ((variant === 'secondary' && (!type || type === 'filled')) && color.secondary.hovered)
  )};
`;

const ButtonIconSettings = css<ButtonRootProps>`
  display: ${({ icon }) => (icon ? 'flex' : undefined)};
  align-items: ${({ icon }) => (icon ? 'center' : undefined)};
  width: ${({ icon }) => (icon ? 'fit-content' : undefined)};
  gap: ${({ icon }) => (icon ? '10px' : undefined)};
`;

const ButtonSizes = css<ButtonRootProps>`
  padding: ${({ size, icon, theme: { button: { padding } } }) => (
    (icon && padding.small)
    || ((size === 'standard' || !size) && padding.standard)
  )};
  font-size: ${({ size, theme: { button: { font: { standard } } } }) => (
    ((size === 'standard' || !size) && standard.fontSize)
  )};
  font-weight: ${({ size, theme: { button: { font: { standard } } } }) => (
    ((size === 'standard' || !size) && standard.fontWeight)
  )};
  line-height: ${({ size, theme: { button: { font: { standard } } } }) => (
    ((size === 'standard' || !size) && standard.lineHeight)
  )};
  letter-spacing: ${({ size, theme: { button: { font: { standard } } } }) => (
    ((size === 'standard' || !size) && standard.letterSpacing)
  )};
`;

const ButtonVariants = css<ButtonRootProps>`
  background: ${({ variant, type, theme: { button: { background, color } } }) => (
    ((variant === 'secondary' && type === 'outlined') && color.secondary.enabled)
    || (variant === 'primary' && background.primary.enabled)
    || ((variant === 'secondary' && (!type || type === 'filled')) && background.secondary.enabled)
  )};
  color:  ${({ variant, type, theme: { button: { color, background } } }) => (
    (variant === 'primary' && color.primary.enabled)
    || ((variant === 'secondary' && type === 'outlined') && background.secondary.enabled)
    || ((variant === 'secondary' && (!type || type === 'filled')) && color.secondary.enabled)
  )};
  border: ${({ type }) => (type === 'outlined' ? '1px solid' : undefined)};
  box-shadow: ${({ shadow, theme: { button } }) => (shadow ? `0px 12px 30px 0px ${button.shadow}` : undefined)};
`;

export const ButtonRoot = styled(Link)<ButtonRootProps>`
  // Common settings
  display: inline-block;
  text-decoration: none;
  border-radius: ${({ theme: { common } }) => common.borderRadius};
  font-family: ${({ theme: { button: { font } } }) => `${font.fontFamily}, sans-serif`};
  transition: background .3s ease-out, color .3s ease-out;

  // Other settings
  ${ButtonVariants}
  ${ButtonIconSettings}
  ${ButtonSizes}

  &:hover {
    ${ButtonHoverState}
  }

  .button {
    &__icon {
      path {
        transition: color .3s ease-out;
      }
    }
  }
`;
