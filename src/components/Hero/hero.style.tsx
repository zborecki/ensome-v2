import styled from 'styled-components';

export const HeroRoot = styled.div`
  background: ${({ theme: { hero } }) => hero.background};

  .hero {
    &__interaction {
      margin-top: 38px;
      display: flex;
      gap: 28px;

      @media screen and (max-width: 576px) {
        margin-top: 30px;
        flex-direction: column;
        gap: 20px;

        > a {
          width: 100%;
          text-align: center;
          justify-content: center;
        }
      }
    }

    &__headline {
      max-width: 540px;

      @media screen and (max-width: 992px) {
        max-width: 445px;
      }
    }

    &__panel {
      max-width: 445px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      padding: 80px 0px;
      justify-content: space-between; 

      @media screen and (max-width: 1200px) {
        padding: 80px 16px;
      }

      @media screen and (max-width: 992px) {
        gap: 30px;
      }

      @media screen and (max-width: 854px) {
        flex-direction: column;
      }

      @media screen and (max-width: 854px) {
        padding: 24px 16px;
      }

      @media screen and (max-width: 576px) {
        gap: 20px;
      }
    }
  }
`;
