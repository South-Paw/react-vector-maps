import React from 'react';
import { storiesOf } from '@storybook/react';

import { Example } from '../../.storybook/components';

import { name, description } from '../../package.json';

import VectorMap, { world, usa, newZealand } from '../index';

import SimpleEvents from './SimpleEvents';
import simpleEventsSource from '!raw-loader!./SimpleEvents';

import SelectMultiple from './SelectMultiple';
import selectMultipleSource from '!raw-loader!./SelectMultiple';

import HighlightLayer from './HighlightLayer';
import highlightLayerSource from '!raw-loader!./HighlightLayer';

import LayerLinks from './LayerLinks';
import layerLinksSource from '!raw-loader!./LayerLinks';

import TooltipLayers from './TooltipLayers';
import tooltipLayersSource from '!raw-loader!./TooltipLayers';

import MapStyling from './MapStyling';
import mapStylingSource from '!raw-loader!./MapStyling';

const capitalize = s =>
  s
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const allMaps = require
  .context('../../maps/json', true, /.json$/)
  .keys()
  .map(filename => {
    const cleanFileName = filename.replace(/\.\//, '');

    const nameOnly = cleanFileName
      .replace(/\.json$/, '')
      .split('-')
      .join(' ');

    const temp = capitalize(nameOnly)
      .split(' ')
      .join('');

    const safeName = temp.charAt(0).toLowerCase() + temp.substr(1);

    return {
      filename: cleanFileName,
      path: `../../maps/json/${cleanFileName}`,
      import: safeName,
      json: require(`../../maps/json/${cleanFileName}`),
    };
  });

const basicExample = importName => `import VectorMap, { ${importName} } from '${name}';

export const MyMap = () => <VectorMap {...${importName}} />`;

const documentationStories = storiesOf('Documentation', module);

documentationStories.add('Readme', () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <h1>react-vector-maps</h1>
      <p>🗺️ {description}</p>
      <p>
        <a href="https://github.com/South-Paw/react-vector-maps">
          Check out the Github readme for the getting started guide 🎉
        </a>
      </p>
    </div>
    <div style={{ maxWidth: '500px', margin: '5rem auto' }}>
      <Example title="The World" code={basicExample('world')} isCodeOpen={false}>
        <VectorMap {...world} />
      </Example>
    </div>
    <div style={{ maxWidth: '500px', margin: '5rem auto' }}>
      <Example title="New Zealand" code={basicExample('newZealand')} isCodeOpen={false}>
        <VectorMap {...newZealand} />
      </Example>
    </div>
    <div style={{ maxWidth: '500px', margin: '5rem auto' }}>
      <Example title="USA" code={basicExample('usa')} isCodeOpen={false}>
        <VectorMap {...usa} />
      </Example>
    </div>
    <h4 style={{ textAlign: 'center' }}>and a lot more other maps too, check out the 'Avaliable Maps' story.</h4>
  </>
));

documentationStories.add('Avaliable Maps', () => (
  <>
    <h1>Avaliable Maps</h1>
    <p>
      The <strong>Import Key</strong> is the name to use when importing a map, for example:
      <br />
      <code>
        import {'{'} <strong>newZealand</strong> {'}'} from '{name}';
      </code>
    </p>
    <p>
      Alternatively, you can also import the json file directly with the <strong>Filename</strong> as follows:
      <br />
      <code>
        import newZealand from '{name}/maps/json/<strong>new-zealand.json</strong>';
      </code>
    </p>
    <p>
      Below you'll find a list of all maps exported by the package.
      <br />
      You can also create and use your own maps; see the 'Using your own SVG for a map' story.
    </p>
    <table style={{ width: '100%', margin: '5rem 0' }}>
      <thead>
        <tr>
          <th>Map Name</th>
          <th>Import Key</th>
          <th>Filename</th>
        </tr>
      </thead>
      <tbody>
        {allMaps.map(map => (
          <tr key={map.filename}>
            <td>{map.json.name}</td>
            <td>
              <code>{map.import}</code>
            </td>
            <td>
              <code>{map.filename}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
));

documentationStories.add('Using your own SVG for a map', () => <div>todo</div>);

const liveExampleStories = storiesOf('Live Examples', module);

liveExampleStories.add('Simple events', () => (
  <Example title="Simple example" code={simpleEventsSource}>
    <SimpleEvents map={newZealand} />
  </Example>
));

liveExampleStories.add('Select multiple', () => (
  <Example title="Select multiple example" code={selectMultipleSource}>
    <SelectMultiple map={newZealand} />
  </Example>
));

liveExampleStories.add('Highlight layer', () => (
  <Example title="Highlight layer example" code={highlightLayerSource}>
    <HighlightLayer map={newZealand} />
  </Example>
));

liveExampleStories.add('Layers as links', () => (
  <Example title="Layers as links example" code={layerLinksSource}>
    <LayerLinks map={newZealand} />
  </Example>
));

liveExampleStories.add('Tooltips for layers', () => (
  <Example title="Tooltips for layers example" code={tooltipLayersSource}>
    <TooltipLayers map={newZealand} />
  </Example>
));

liveExampleStories.add('Styling maps', () => (
  <Example title="Styling maps example" code={mapStylingSource}>
    <MapStyling map={newZealand} />
  </Example>
));

const mapStories = storiesOf('Maps', module);

allMaps.forEach(map => {
  mapStories.add(map.json.name, () => <VectorMap {...map.json} />);
});
