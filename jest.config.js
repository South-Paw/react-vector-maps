module.exports = {
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/src/maps/index.js',
    '.story.js',
    'jest.config.js',
  ],
};
