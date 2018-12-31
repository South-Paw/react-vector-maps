const { name } = require('../package.json');
const { asyncForEach, capitalize, stringify } = require('./convert-svgs');

describe(name, () => {
  describe('convert-svgs', () => {
    // TODO
    describe('asyncForEach', () => {
      xtest('that given a parameter and an async function, it will loop through them as a forEach would.', () => {});
    });

    describe('capitalize', () => {
      test('that given a word, the word is capitalized', () => {
        const given = 'apples';
        const expected = 'Apples';

        expect(capitalize(given)).toBe(expected);
      });

      test('that given a sentence, each word is capitalized', () => {
        const given = 'the quick brown fox jumped over the lazy dog.';
        const expected = 'The Quick Brown Fox Jumped Over The Lazy Dog.';

        expect(capitalize(given)).toBe(expected);
      });
    });

    describe('stringify', () => {
      test('that given a javascript array, the stringify function will return a formatted string of the array', () => {
        const object = [
          { key: 1, items: ['a', 'b', 'c'] },
          { key: 2, items: ['d', 'e', 'f'] },
          { key: 3, items: ['g', 'h', 'i'] },
        ];

        const expected = `[
  {
    "key": 1,
    "items": [ "a", "b", "c" ]
  },
  {
    "key": 2,
    "items": [ "d", "e", "f" ]
  },
  {
    "key": 3,
    "items": [ "g", "h", "i" ]
  }
]`;

        expect(stringify(object)).toBe(expected);
      });
    });

    // TODO
    describe('ConvertSVGs', () => {
      test('constructor', () => {});

      test('cleanAndCreateFolder', () => {});

      test('cleanAndCreateFile', () => {});

      describe('run', () => {
        test('todo', () => {});
      });
    });
  });
});
