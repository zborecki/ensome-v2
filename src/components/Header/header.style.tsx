import styled from 'styled-components';

export const HeaderRoot = styled.header<{
  isOpened: boolean;
}>`
  background: ${({ theme: { header } }) => header.background};
  border-bottom: 1px solid ${({ theme: { header: { border } } }) => border.bottom};

  .header {
    &__hamburger {
      position: absolute;
      top: 25px;
      right: 20px;
    }

    &__logo {
      @media screen and (max-width: 992px) {
        margin-bottom: ${({ isOpened }) => (isOpened ? '20px' : undefined)};
      }
    }

    &__wrapper {
      position: relative;
      display: flex;
      padding: 40px 0px;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 992px) {
        padding: 20px 16px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: ${({ isOpened }) => (isOpened ? 'calc(100vh - 1px)' : undefined)};
      }
    }
  }
`;

export const Navigation = styled.nav<{
  isOpened: boolean;
}>`
  .navigation {
    &__link {
      position: relative;
      text-decoration: none;
      font-family: ${({ theme: { common } }) => common.headline}, sans-serif;
      color: ${({ theme: { header } }) => header.color};
      font-size: ${({ theme: { header: { font: { desktop } } } }) => desktop.fontSize};
      font-weight: ${({ theme: { header: { font: { desktop } } } }) => desktop.fontWeight};
      line-height: ${({ theme: { header: { font: { desktop } } } }) => desktop.lineHeight};
      letter-spacing: ${({ theme: { header: { font: { desktop } } } }) => desktop.letterSpacing};

      &.active, &:hover {
        &::before {
          width: 100%;
          
          @media screen and (max-width: 992px) {
            background: ${({ theme: { header } }) => header.color};
          }
        }
      }

      &::before {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 0%;
        bottom: -6px;
        transition: width .35s ease-out;
        background: ${({ theme: { header } }) => header.color};

        @media screen and (max-width: 992px) {
          transition: width 0.85s ease-out;
          bottom: -20px;
          width: 100%;
          transition: background .35s ease-out;
          background: ${({ theme: { header: { border } } }) => border.inactive};
        }
      }

      @media screen and (max-width: 992px) {
        display: inline-block;
        width: 100%;
        padding: 8px 0px;
        font-size: ${({ theme: { header: { font: { mobile } } } }) => mobile.fontSize};
        font-weight: ${({ theme: { header: { font: { mobile } } } }) => mobile.fontWeight};
        line-height: ${({ theme: { header: { font: { mobile } } } }) => mobile.lineHeight};
        letter-spacing: ${({ theme: { header: { font: { mobile } } } }) => mobile.letterSpacing};
      }
    }

    &__list {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      gap: 40px;

      @media screen and (max-width: 992px) {
        flex-direction: column;
        gap: 40px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  }
`;
