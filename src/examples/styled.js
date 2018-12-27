import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 600px) {
    flex-flow: nowrap column;
  }
`;

export const Output = styled.div`
  padding-right: 1rem;
  flex: 1 1 0;
  border-right: 0.2rem solid ${rgba('#000', 0.15)};

  @media (max-width: 600px) {
    padding-right: 0;
    padding-bottom: 1rem;
    border-right: none;
    border-bottom: 0.2rem solid ${rgba('#000', 0.15)};
  }
`;

export const MapWrapper = styled.div`
  padding-left: 1rem;
  flex: 1 1 auto;

  @media (max-width: 600px) {
    padding-left: 0;
    padding-top: 1rem;
  }

  svg {
    stroke: #fff;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;

    path {
      :focus {
        outline: 0;
      }
    }
  }
`;
