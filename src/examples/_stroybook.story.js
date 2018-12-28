import React from 'react';
import { storiesOf } from '@storybook/react';

import { Example } from '../../.storybook/components';

import { description } from '../../package.json';

import VectorMap from '../index';
import { world, usa, newZealand } from '../maps';

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
      <hr />
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h3>The World</h3>
        <VectorMap {...world} />
      </div>
      <hr />
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h3>New Zealand</h3>
        <VectorMap {...newZealand} />
      </div>
      <hr />
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h3>USA</h3>
        <VectorMap {...usa} />
      </div>
    </div>
  </>
));

documentationStories.add('Avaliable Maps', () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <p>
        The <strong>Import Key</strong> is the name to use when importing a map, for example:
      </p>
      <p>
        <code>
          import {'{'} <strong>newZealand</strong> {'}'} from '@south-paw/react-vector-maps';
        </code>
      </p>
      <p>
        Alternatively, you can also import the json file directly with the <strong>Filename</strong> as follows:
      </p>
      <p>
        <code>
          import newZealand from '@south-paw/react-vector-maps/maps/json/<strong>new-zealand.json</strong>';
        </code>
      </p>
    </div>
    <table style={{ width: '100%' }}>
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
