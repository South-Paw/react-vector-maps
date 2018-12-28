const { name } = require('../package.json');
const { asyncForEach, capitalize, stringify } = require('./utils');

describe(name, () => {
  describe('convert-svgs', () => {
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
  });
});
