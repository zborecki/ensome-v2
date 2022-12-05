import styled from 'styled-components';

export const HeaderRoot = styled.header`
  background: ${({ theme: { header } }) => header.background};
  border-bottom: 1px solid ${({ theme: { header } }) => header.border};

  .header {
    &__navigation {
      .navigation {
        &__link {
          position: relative;
          text-decoration: none;
          color: ${({ theme: { header } }) => header.color};
          font-size: ${({ theme: { header: { font } } }) => font.fontSize};
          font-weight: ${({ theme: { header: { font } } }) => font.fontWeight};
          line-height: ${({ theme: { header: { font } } }) => font.lineHeight};
          letter-spacing: ${({ theme: { header: { font } } }) => font.letterSpacing};

          &.active, &:hover {
            &::before {
              width: 100%;
            }
          }

          &::before {
            content: '';
            display: block;
            height: 2px;
            position: absolute;
            width: 0%;
            bottom: -6px;
            transition: width .35s ease-out;
            background: ${({ theme: { header } }) => header.color};
          }
        }

        &__list {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          gap: 40px;
        }
      }
    }

    &__wrapper {
      display: flex;
      padding: 40px;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
