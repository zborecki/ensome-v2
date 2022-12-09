import styled from 'styled-components';

export const ReviewsRoot = styled.section`
  background: ${({ theme: { common } }) => common.background};

  .review {
    &__fullName {
      margin-bottom: 4px;
    }

    &__occupation {
      color: ${({ theme: { common: { paragraph } } }) => paragraph.color};
    }

    &__image {
      img {
        border-radius: 50%;
      }
    }

    &__person {
      display: flex;
      align-items: center;
      gap: 26px;
      margin-bottom: 25px;
    }

    &__wrapper {
      border-radius: ${({ theme: { common } }) => common.borderRadius};
      padding: 35px;
      background-color: ${({ theme: { review } }) => review.background};
    }
  }

  .reviews {
    &__headline {
      margin-bottom: 65px;
    }

    &__containers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
