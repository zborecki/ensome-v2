import styled from 'styled-components';

export const BlogRoot = styled.section`
  background: ${({ theme: { blog } }) => blog.background};

  .blog {
    &__headline {
      margin-bottom: 65px;
    }

    &__posts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .post {
    &__image {
      margin-bottom: 20px;

      @media screen and (max-width: 992px) {
        max-width: 100%;
      }
    }

    &__link {
      padding: 16px;
      border-radius: ${({ theme: { common } }) => common.borderRadius};
      text-decoration: none;
      transition: background .35s ease-out;
      
      &:hover {
        background: ${({ theme: { common } }) => common.background};
      }
    }
  }
`;
