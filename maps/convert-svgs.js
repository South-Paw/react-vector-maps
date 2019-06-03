const fs = require('fs');
const rimraf = require('rimraf');
const svgson = require('svgson');

const asyncForEach = async (a, cb) => {
  for (let i = 0; i < a.length; i += 1) {
    await cb(a[i], i, a);
  }
};

const capitalize = s =>
  s
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

// Human readable json stringify where simple arrays use only one line.
// https://gist.github.com/nrkn/c7a89bb7039182314415
const stringify = object => {
  const isPrimitive = obj => obj === null || ['string', 'number', 'boolean'].includes(typeof obj);
  const isArrayOfPrimitive = obj => Array.isArray(obj) && obj.every(isPrimitive);
  const format = arr => `^^^[ ${arr.map(val => JSON.stringify(val)).join(', ')} ]`;
  const replacer = (key, value) => (isArrayOfPrimitive(value) ? format(value) : value);
  const expand = str => str.replace(/(?:"\^\^\^)(\[ .* \])(?:")/g, (match, a) => a.replace(/\\"/g, '"'));
  return expand(JSON.stringify(object, replacer, 2));
};

class ConvertSVGs {
  constructor(config) {
    const { inputSvgsPath, outputJsonPath, outputSummary = false } = config;

    this.inputSvgsPath = inputSvgsPath;
    this.outputJsonPath = outputJsonPath;
    this.outputSummary = outputSummary;
  }

  async cleanAndCreateFolder(path) {
    await rimraf.sync(path);

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }

  async run() {
    await this.cleanAndCreateFolder(this.outputJsonPath);

    const files = fs.readdirSync(this.inputSvgsPath);

    const output = [];

    await asyncForEach(files, async filename => {
      const path = `${this.inputSvgsPath}\\${filename}`;
      const svg = fs.readFileSync(path, 'utf8');

      svgson.parse(svg).then(json => {
        const name = filename.split('.')[0];

        const layers = json.children
          .filter(({ name }) => name === 'path')
          .map(({ attributes }) => ({
            id: attributes.id.toLowerCase(),
            name: attributes.title || capitalize(attributes.id),
            d: attributes.d,
          }));

        const map = {
          id: name,
          name: capitalize(name.split('-').join(' ')),
          viewBox: `0 0 ${parseFloat(json.attributes.width)} ${parseFloat(json.attributes.height)}`,
          layers,
        };

        output.push({
          name: capitalize(name.split('-').join(' ')),
          filename,
        });

        fs.writeFileSync(`${this.outputJsonPath}\\${name}.json`, stringify(map));
      });
    });

    if (this.outputSummary) {
      fs.writeFileSync(`${this.outputJsonPath}\\..\\summary.json`, stringify(output));
    }
  }
}

module.exports = {
  ConvertSVGs,
  asyncForEach,
  capitalize,
  stringify,
};
