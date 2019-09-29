import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledExample = styled.div`
  border: 4px solid ${p => rgba(p.theme.colors.dark, 0.13)};
  border-top: none;
`;

export const Toolbar = styled.div`
  padding: 8px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  background-color: ${p => rgba(p.theme.colors.dark, 0.13)};
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 2px 6px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px ${p => rgba(p.theme.colors.black, 0.2)};
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  font-weight: 500;
  font-size: 12px

  :hover,
  :focus {
    box-shadow: 0 1px 0 ${p => rgba(p.theme.colors.black, 0.2)}, 0 2px 5px ${p => rgba(p.theme.colors.black, 0.2)};
    color: ${p => p.theme.colors.gray};
    text-decoration: none;
  }

  svg {
    margin-right: 4px;
  }
`;

export const Editor = styled.div`
  background-color: ${p => p.theme.colors.dark};
  height: auto;
  max-height: ${p => (p.isOpen ? '400px' : '0')};
  caret-color: ${p => p.theme.colors.white};
  opacity: ${p => (p.isOpen ? '1' : '0')};
  overflow: auto;
  transition: max-height 0.6s ease-in-out, opacity 0.6s ease-in-out;
`;

export const Error = styled.div`
  background-color: #960e0e;
  color: ${p => p.theme.colors.white};
`;

export const Preview = styled.div`
  border-top: 4px solid ${p => rgba(p.theme.colors.dark, 0.13)};
`;
