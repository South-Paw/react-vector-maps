import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { GithubIcon } from './GithubIcon';
import { GithubBadge, GithubButton, Wrapper } from './styled';

async function getStargazers(): Promise<number> {
  const res = await fetch('//api.github.com/repos/south-paw/react-vector-maps');
  const json = await res.json();
  return json.stargazers_count;
}

export interface StargazersProps {
  style: React.CSSProperties;
}

export function Stargazers({ style }: StargazersProps) {
  const { data } = useQuery(['stargazers'], getStargazers);

  if (data === undefined) {
    return null;
  }

  return (
    <Wrapper style={style}>
      <GithubButton href="https://github.com/South-Paw/react-vector-maps" target="_blank">
        <GithubIcon style={{ marginRight: '8px' }} /> Star
      </GithubButton>
      <GithubBadge href="https://github.com/South-Paw/react-vector-maps/stargazers" target="_blank">
        {data}
      </GithubBadge>
    </Wrapper>
  );
}
