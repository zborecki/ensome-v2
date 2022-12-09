import styled from 'styled-components';

export const FeaturesRoot = styled.section`
  background: ${({ theme: { common } }) => common.background};

  .feature {
    &__headline {
      margin-bottom: 45px;
    }

    &__paragraph {
      margin-bottom: 30px;
    }
  }

  .features {
    &__feature {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      align-items: center;
      margin-bottom: 120px;

      &:last-of-type {
        margin-bottom: 0px;

        .feature {
          &__image {
            grid-row: 1;
          }
        }
      }

      @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        margin-bottom: 30px;

        .feature {
          &__image {
            margin-bottom: 30px;
            max-width: 100%;
          }
        }

        &:first-of-type {
          .feature {
            &__image {
              grid-row: 1;
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        .feature {
          &__button {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`;
