import styled from 'styled-components';

export const HeroRoot = styled.div`
  background: ${({ theme: { hero } }) => hero.background};
`;
