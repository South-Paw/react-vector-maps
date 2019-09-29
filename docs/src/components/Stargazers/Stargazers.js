/*  eslint-env browser */

import React, { PureComponent } from 'react';

import { GithubIcon } from './GithubIcon';
import { Wrapper, GithubButton, GithubBadge } from './styled';

class Stargazers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { count: null };
  }

  componentDidMount = () => {
    fetch('//api.github.com/repos/south-paw/react-vector-maps')
      .then(data => data.json())
      .then(json => this.setState({ count: json.stargazers_count }))
      .catch(error => console.error(error));
  };

  render = () => {
    const { count } = this.state;

    if (!count) {
      return null;
    }

    return (
      <Wrapper {...this.props}>
        <GithubButton href="https://github.com/South-Paw/react-vector-maps" target="_blank">
          <GithubIcon style={{ marginRight: '8px' }} /> Star
        </GithubButton>
        <GithubBadge href="https://github.com/South-Paw/react-vector-maps/stargazers" target="_blank">
          {count.toLocaleString()}
        </GithubBadge>
      </Wrapper>
    );
  };
}

export { Stargazers };
