import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

export const ExampleHeader = styled.div`
  display: flex;
  flex-flow: nowrap row;
`;

export const ExampleTitle = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

export const ExampleShowCode = styled.div`
  margin-left: auto;
  padding: 0 0.35rem;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba('#000', 0.15)};
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  user-select: none;
  line-height: 1;
`;

const ExampleWrapper = styled.div`
  ${p => p.hasCode ? 'margin-bottom: 2rem;' : ''}
  padding: 1rem;
  border: 0.2rem solid ${rgba('#000', 0.15)};
`;

const ExampleCode = styled.pre`
  margin: 0;
  margin-bottom: 2rem;
  display: ${p => p.isVisible ? 'block' : 'none'};
  overflow-y: auto;
`;

class Example extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { codeOpen: props.isCodeOpen };
  }

  toggleCode = () => this.setState({ codeOpen: !this.state.codeOpen });

  render() {
    const { title, code, children } = this.props;
    const { codeOpen } = this.state;

    return (
      <>
        <ExampleHeader>
          <ExampleTitle>{title}</ExampleTitle>
          {code && <ExampleShowCode onClick={this.toggleCode}>{codeOpen ? 'Hide Code' : 'Show Code'}</ExampleShowCode>}
        </ExampleHeader>
        <ExampleWrapper hasCode={!codeOpen}>{children}</ExampleWrapper>
        <ExampleCode isVisible={codeOpen}>{code}</ExampleCode>
      </>
    );
  }
}

Example.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  code: PropTypes.string,
  isCodeOpen: PropTypes.bool,
};

Example.defaultProps = {
  title: null,
  children: null,
  code: null,
  isCodeOpen: true,
};

export default Example;
