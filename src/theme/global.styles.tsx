import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme: { common: { paragraph } } }) => paragraph.fontFamily}, sans-serif;
    background: ${({ theme: { common } }) => common.background};
  }

  section {
    padding: 120px 0px;

    @media screen and (max-width: 992px) {
      padding: 50px 0px;
    }
  }

  .home-hero {
    &__button {
      .button {
        &__label {
          font-size: 18px;
          line-height: 32px;
          letter-spacing: -0.025em;
        }
      }

      &--filled {
        padding: 11px 46px !important;
      }
    }
  }
`;
