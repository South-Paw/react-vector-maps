const { ConvertSVGs } = require('./convert-svgs');

const SVG_MAP_FILES = `${__dirname}\\svg`;
const JSON_MAP_FILES = `${__dirname}\\json`;
const EXPORTS_FILE = `${__dirname}\\..\\src\\maps.js`;

const convertSVGs = new ConvertSVGs({
  inputSvgsPath: SVG_MAP_FILES,
  outputJsonPath: JSON_MAP_FILES,
  generatedExportsFilePath: EXPORTS_FILE,
});
convertSVGs.run();
