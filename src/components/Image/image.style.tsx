import styled from 'styled-components';

export const ImageRoot = styled.div<{
  width: number;
}>`
  max-width: ${({ width }) => `${width}px`};

  .image {
    &__photo {
      width: 100%;
      border-radius: ${({ theme: { common } }) => common.borderRadius};
    }
  }
`;
