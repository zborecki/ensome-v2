import styled from 'styled-components';

export const FooterRoot = styled.footer`
  background: ${({ theme: { footer } }) => footer.background};

  .footer {
    &__logo {
      margin-bottom: 20px;
    }

    &__upper {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    &__company {
      max-width: 285px;
    }

    &__bottom {
      padding-top: 30px;
      border-top: 1px solid ${({ theme: { footer } }) => footer.border};
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 576px) {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__links {
      display: flex;
      gap: 95px;

      @media screen and (max-width: 768px) {
        gap: 30px;
      }
    }

    &__wrapper {
      display: grid;
      grid-template-rows: repeat(2, auto);
      gap: 200px;

      @media screen and (max-width: 768px) {
        gap: 50px;
      }
    }
  }

  .contact {
    &__headline {
      margin-bottom: 30px;

      @media screen and (max-width: 768px) {
        margin-top: 60px;
      }
    }

    &__email {
      margin-bottom: 12px;
    }
  }
`;
