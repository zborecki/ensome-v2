import styled from 'styled-components';

export const ErrorRoot = styled.section`
  .error {
    &__code {
      color: ${({ theme: { error } }) => error.code};
      font-size: 145px;
      line-height: 100%;
    }

    &__description {
      max-width: 540px;
      text-align: center;
    }

    &__information {
      color: ${({ theme: { error } }) => error.information};
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
`;
