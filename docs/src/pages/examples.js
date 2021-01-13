import { rgba } from 'polished';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { VectorMap } from '../../../src/VectorMap';
import nzMap from '../../static/maps/new-zealand.json';
import { Example } from '../components/Example';
import { Layout } from '../components/Layout';
import { Markdown } from '../components/Markdown';

const seo = {
  title: 'Examples',
};

const examples = [
  {
    title: 'Simple events',
    scope: { nzMap },
    code: `() => {
  const style = { margin: '1rem auto', width: '300px' };

  const [hovered, setHovered] = React.useState('None');
  const [focused, setFocused] = React.useState('None');
  const [clicked, setClicked] = React.useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  return (
    <div style={style}>
      <VectorMap {...nzMap} layerProps={layerProps} />
      <hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Focused: {focused && <code>{focused}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </div>
  );
}`,
  },
  {
    title: 'Styling a map',
    description: `This example uses [styled-components](https://www.styled-components.com/) for css-in-js styling but you can use any css styling method you want.`,
    scope: { nzMap, styled },
    exampleProps: { noInline: true },
    code: `const Map = styled.div\`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: ${rgba('#a82b2b', 0.83)};
      }

      // When a layer is focused.
      &:focus {
        fill: ${rgba('#a82b2b', 0.6)};
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: ${rgba('#382ba8', 1)};
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: ${rgba('#382ba8', 0.83)};
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: ${rgba('#382ba8', 0.6)};
      }
    }
  }
\`;

render(
  <Map>
    <VectorMap {...nzMap} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']} />
  </Map>
)`,
  },
  {
    title: 'Styling a map with gradients',
    description: `An example of using gradients on the map paths.`,
    scope: { nzMap, styled },
    exampleProps: { noInline: true },
    code: `const Map = styled.div\`
  margin: 1rem auto;
  width: 300px;
\`;

render(
  <Map>
    <VectorMap {...nzMap} layerProps={{ fill: "url(#gradient)" }} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']}>
      <defs>
        <radialGradient id="gradient">
          <stop offset="10%" stop-color="gold" />
          <stop offset="95%" stop-color="red" />
        </radialGradient>
      </defs>
    </VectorMap>
  </Map>
)`,
  },
  {
    title: 'Selecting layers',
    scope: { nzMap },
    code: `() => {
  const style = { margin: '1rem auto', width: '300px' };

  const [selected, setSelected] = React.useState([]);

  const onClick = ({ target }) => {
    const id = target.attributes.id.value;

    // If selected includes the id already, remove it - otherwise add it
    selected.includes(id)
      ? setSelected(selected.filter(sid => sid !== id))
      : setSelected([...selected, id]);
  }

  return (
    <div style={style}>
      <VectorMap {...nzMap} layerProps={{ onClick }} />
      <hr />
      <p>Selected:</p>
      <pre>{JSON.stringify(selected,null,2)}</pre>
    </div>
  );
}`,
  },
  {
    title: 'Highlighting a layer',
    scope: { nzMap, styled },
    exampleProps: { noInline: true },
    code: `const Map = styled.div\`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    path {
      fill: #a82b2b;
      outline: none;

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: #382ba8;
      }
    }
  }
\`;

render(() => {
  const style = { margin: '1rem auto', width: '300px' };

  const [current, setCurrent] = React.useState(null);

  const locations = [
    { id: 'nz-auk', name: 'Auckland' },
    { id: 'nz-wgn', name: 'Wellington' },
    { id: 'nz-can', name: 'Canterbury' },
  ];

  return (
    <div style={style}>
      <Map>
        <VectorMap {...nzMap} currentLayers={[current]} />
      </Map>
      <p>Hover on one of these to see where it is:</p>
      <ul>
        {locations.map(({ id, name }) => (
          <li key={id}>
            <code onMouseOver={() => setCurrent(id)}>{name}</code>
          </li>
        ))}
      </ul>
    </div>
  );
})`,
  },
  {
    title: 'Layer links',
    description: ``,
    scope: { nzMap },
    code: `() => {
  const style = { margin: '1rem auto', width: '300px' };

  const onClick = ({ target }) => {
    const name = target.attributes.name.value;
    window.open(\`https://www.google.com/search?q=\${name}%20nz\`)
  }

  return (
    <div style={style}>
      <VectorMap {...nzMap} layerProps={{ onClick }} />
    </div>
  );
}`,
  },
];

const getId = (anchor) => `${anchor}`.toLowerCase().split(' ').join('-');

const ExamplesPage = ({ ...other }) => (
  <Layout seo={seo} {...other}>
    <h2>Examples</h2>
    <ul>
      {examples.map(({ title }) => (
        <li key={getId(title)}>
          <a href={`#${getId(title)}`}>{title}</a>
        </li>
      ))}
    </ul>
    {examples.map(({ title, description, scope, code, exampleProps }) => (
      <Fragment key={title}>
        <hr />
        <h3 id={getId(title)}>{title}</h3>
        {description && <Markdown source={description} />}
        <Example code={code} scope={{ VectorMap, ...scope }} {...exampleProps} />
      </Fragment>
    ))}
  </Layout>
);

export default ExamplesPage;
