const { ConvertSVGs } = require('./convert-svgs');

const SVG_MAP_FILES = `${__dirname}\\svg`;
const JSON_MAP_FILES = `${__dirname}\\json`;

const convertSVGs = new ConvertSVGs({
  inputSvgsPath: SVG_MAP_FILES,
  outputJsonPath: JSON_MAP_FILES,
  outputSummary: true,
});
convertSVGs.run();
