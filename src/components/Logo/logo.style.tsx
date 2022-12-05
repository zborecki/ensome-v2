import styled from 'styled-components';

export const LogoRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .logo {
    &__companyName {
      text-transform: uppercase;
      font-family: 'Manrope', sans-serif;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 0.3em;
      color: ${({ theme: { logo } }) => logo.color};
    }
  }
`;
