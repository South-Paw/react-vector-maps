import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: nowrap row;
`;

export const GithubButton = styled.a`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  color: ${p => p.theme.colors.dark};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 1px 2px ${p => rgba(p.theme.colors.black, 0.2)};
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.25;
  position: relative;
  text-decoration: none;

  :hover,
  :focus {
    box-shadow: 0 1px 0 ${p => rgba(p.theme.colors.black, 0.2)}, 0 2px 5px ${p => rgba(p.theme.colors.black, 0.2)};
    color: ${p => p.theme.colors.gray};
    text-decoration: none;
  }

  :active {
    background-color: ${p => p.theme.colors.alt};
    box-shadow: 0 1px 0 ${p => rgba(p.theme.colors.black, 0.2)};
    color: ${p => p.theme.colors.gray};
    bottom: -2px;
  }
`;

export const GithubBadge = styled.a`
  margin-left: 6px;
  padding: 2px 8px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 13px;
  position: relative;
  border-radius: 2px;
  text-decoration: none;

  :hover,
  :focus {
    color: ${p => p.theme.colors.gray};
    text-decoration: none;
  }

  :after {
    content: ' ';
    height: 0px;
    left: -8px;
    margin-top: -4px;
    top: 50%;
    position: absolute;
    width: 0px;
    border-width: 4px;
    border-style: solid;
    border-color: transparent ${p => p.theme.colors.white} transparent transparent;
    border-image: initial;
  }
`;
