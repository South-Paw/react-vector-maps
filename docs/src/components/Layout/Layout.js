import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { uid } from 'react-uid';

import { Container } from '../Container';
import { SEO } from '../SEO';
import { Theme } from '../Theme';

import { Header, Nav, NavInner, Hero, Main, Footer, FooterInner, Item } from './styled';

const items = [
  { label: 'Home', to: '/' },
  { label: 'Props', to: '/props' },
  { label: 'Examples', to: '/examples' },
  { label: 'Maps', to: '/maps' },
  { label: 'Converter', to: '/converter' },
];

const Layout = ({ location, seo, hero, children }) => (
  <Theme>
    <>
      <SEO location={location} basepath="https://react-vector-maps.netlify.com" {...seo} />
      <Header>
        <Nav>
          <Container>
            <NavInner>
              {items.map(item => {
                const { label, ...other } = item;
                return (
                  <Link activeClassName="active" key={uid(item)} {...other}>
                    {label}
                  </Link>
                );
              })}
            </NavInner>
          </Container>
        </Nav>
        <Container>{hero && <Hero>{hero}</Hero>}</Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <Container>
          <FooterInner>
            <Item basis={100}>
              Copyright ©{' '}
              <a href="https://southpaw.co.nz" target="_blank" rel="noopener noreferrer">
                Alex Gabites
              </a>
              , 2019. <a href="https://github.com/South-Paw/react-vector-maps/blob/master/LICENSE">MIT Licensed</a>.
            </Item>
          </FooterInner>
        </Container>
      </Footer>
    </>
  </Theme>
);

Layout.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  seo: PropTypes.shape(SEO.propTypes).isRequired,
  hero: PropTypes.node,
  children: PropTypes.node,
};

Layout.defaultProps = {
  hero: null,
  children: null,
};

export { Layout };
