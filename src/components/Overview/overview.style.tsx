import styled from 'styled-components';

export const OverviewRoot = styled.section`
  background: ${({ theme: { overview } }) => overview.background};

  .overview {
    &__containers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 98px;
      text-align: center;

      @media screen and (max-width: 992px) {
        gap: 50px;
      }

      @media screen and (max-width: 768px) {
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__headline {
      margin-bottom: 68px;
    }

    &__value {
      margin: 4px 0px 0px 0px;
      font-size: ${({ theme: { overview: { value } } }) => value.fontSize};
      font-weight: ${({ theme: { overview: { value } } }) => value.fontWeight};
      line-height: ${({ theme: { overview: { value } } }) => value.lineHeight};
      letter-spacing: ${({ theme: { overview: { value } } }) => value.letterSpacing};
      color: ${({ theme: { overview: { value } } }) => value.color};

      @media screen and (max-width: 992px) {
        font-size: 55px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    padding: 50px 16px;
  }
`;
