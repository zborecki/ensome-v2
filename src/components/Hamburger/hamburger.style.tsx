import styled, { css } from 'styled-components';

const hamburgerLine = css`
  width: 100%;
  height: 3px;
  position: absolute;
  border-radius: 6px;
  background: ${({ theme: { hamburger } }) => hamburger.background};
  transition: transform .25s ease-out, background .25s ease-out;
`;

export const HamburgerRoot = styled.button<{
  isOpened: boolean;
}>`
  border: none;
  cursor: pointer;
  display: none;
  padding: 0px;
  background: transparent;

  .hamburger {
    &__line {
      ${hamburgerLine};
      top: 12px;
      background: ${({ isOpened }) => (isOpened ? 'transparent' : undefined)};

      &::after, &::before {
        ${hamburgerLine};
        display: block;
        content: '';
      }

      &::after {
        top: 10px;
        transform: ${({ isOpened }) => (isOpened ? 'translateY(-10px) rotate(-45deg)' : undefined)};
      }

      &::before {
        top: -10px;
        transform: ${({ isOpened }) => (isOpened ? 'translateY(10px) rotate(45deg)' : undefined)};
      }
    }

    &__wrapper {
      width: 30px;
      height: 27px;
      position: relative;
    }
  }

  @media screen and (max-width: 992px) {
    display: inline-block;
  }
`;
