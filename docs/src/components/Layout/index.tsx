import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link } from 'gatsby';
import React, { PropsWithChildren, ReactNode } from 'react';
import { uid } from 'react-uid';
import { Container } from '../Container';
import { Theme } from '../Theme';
import { Footer, FooterInner, Header, Hero, Item, Main, Nav, NavInner } from './styled';

const items = [
  { label: 'Home', to: '/' },
  { label: 'Examples', to: '/examples' },
  { label: 'Props', to: '/component-props' },
  { label: 'Maps', to: '/maps' },
  { label: 'Converter', to: '/converter' },
];

const client = new QueryClient();

export interface LayoutProps extends PropsWithChildren {
  hero?: ReactNode;
}

export function Layout({ hero, children }: LayoutProps) {
  return (
    <QueryClientProvider client={client}>
      <Theme>
        <Header>
          <Nav>
            <Container>
              <NavInner>
                {items.map((item) => (
                  <Link activeClassName="active" key={uid(item)} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </NavInner>
            </Container>
          </Nav>
          {hero && (
            <Container>
              <Hero>{hero}</Hero>
            </Container>
          )}
        </Header>
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer>
          <Container>
            <FooterInner>
              <Item basis={100}>
                Copyright &copy;{' '}
                <a href="https://southpaw.co.nz" target="_blank" rel="noopener noreferrer">
                  Alex Gabites
                </a>
                , 2019. <a href="https://github.com/South-Paw/react-vector-maps/blob/master/LICENSE">MIT Licensed</a>.
              </Item>
            </FooterInner>
          </Container>
        </Footer>
      </Theme>
    </QueryClientProvider>
  );
}
