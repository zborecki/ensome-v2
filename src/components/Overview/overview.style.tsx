import styled from 'styled-components';

export const OverviewRoot = styled.section`
  background: ${({ theme: { overview } }) => overview.background};

  .overview {
    &__containers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 98px;

      @media screen and (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
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
    }
  }

  @media screen and (max-width: 992px) {
    padding: 50px 16px;
  }
`;
