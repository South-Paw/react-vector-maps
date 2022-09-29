/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setupJest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/docs/'],
};
