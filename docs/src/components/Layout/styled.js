import { rgba } from 'polished';
import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  background-image: linear-gradient(
    135deg,
    ${(p) => p.theme.colors.primary} 0%,
    ${(p) => p.theme.colors.secondary} 100%
  );
  color: ${(p) => p.theme.colors.white};
`;

export const Nav = styled.div`
  background-color: ${(p) => rgba(p.theme.colors.dark, 0.13)};
`;

export const NavInner = styled.div`
  margin: 0 -16px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  overflow-x: auto;

  a {
    padding: 16px;
    color: ${(p) => p.theme.colors.white};
    font-weight: 500;
    opacity: 0.7;
    text-decoration: none;

    &.active {
      opacity: 1;
    }

    :hover,
    :focus {
      opacity: 1;
    }
  }

  @media (max-width: 48em) {
    a {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
`;

export const Hero = styled.div`
  padding: 32px 0;
`;

export const Main = styled.div`
  padding: 32px 0;
  min-height: 500px;
  background-color: ${(p) => p.theme.colors.white};
  border-top: 4px solid ${(p) => rgba(p.theme.colors.dark, 0.13)};
`;

export const Footer = styled.div`
  padding: 32px 0;
  border-top: 1px solid ${(p) => rgba(p.theme.colors.dark, 0.13)};
  font-size: 14px;
  color: #4a4d50;
`;

export const FooterInner = styled.div`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 48em) {
    flex-flow: nowrap column;
  }
`;

export const Item = styled.div`
  margin: 0 8px;
  flex: 1 1 ${(p) => p.basis}%;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 48em) {
    margin: 0;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
