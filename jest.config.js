module.exports = {
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/.storybook/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/maps/run.js',
    '<rootDir>/src/examples/',
    '<rootDir>/src/maps.js',
    '.story.js',
    'jest.config.js',
  ],
};
