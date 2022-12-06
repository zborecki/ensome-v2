/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonRootProps } from '../../types/props';

export const ButtonRoot = styled(Link)<ButtonRootProps>`
  // Common settings
  display: inline-block;
  text-decoration: none;
  border-radius: ${({ theme: { common } }) => common.borderRadius};
  font-family: ${({ theme: { button: { font } } }) => `${font.fontFamily}, sans-serif`};
  transition: background .3s ease-out, color .3s ease-out;

  // Variants
  background: ${({ variant, type, theme: { button: { background, color } } }) => (
    ((variant === 'secondary' && type === 'outlined') && color.secondary.enabled)
    || ((variant === 'secondary' && (!type || type === 'filled')) && background.secondary.enabled)
  )};
  color:  ${({ variant, type, theme: { button: { color, background } } }) => (
    ((variant === 'secondary' && type === 'outlined') && background.secondary.enabled)
    || ((variant === 'secondary' && (!type || type === 'filled')) && color.secondary.enabled)
  )};
  border: ${({ type }) => (type === 'outlined' ? '1px solid' : undefined)};

  // With an icon
  display: ${({ icon }) => (icon ? 'flex' : undefined)};
  align-items: ${({ icon }) => (icon ? 'center' : undefined)};
  width: ${({ icon }) => (icon ? 'fit-content' : undefined)};
  gap: ${({ icon }) => (icon ? '10px' : undefined)};

  // Sizes
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

  &:hover {
    background: ${({ variant, type, theme: { button: { background: { secondary } } } }) => (
    ((variant === 'secondary' && (!type || type === 'filled')) && secondary.hovered)
  )};
    color: ${({ variant, type, theme: { button: { color, background } } }) => (
    ((variant === 'secondary' && type === 'outlined') && background.secondary.hovered)
      || ((variant === 'secondary' && (!type || type === 'filled')) && color.secondary.hovered)
  )};
  }

  .button {
    &__icon {
      path {
        transition: color .3s ease-out;
      }
    }
  }
`;
