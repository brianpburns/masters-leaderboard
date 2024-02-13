const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...moduleNameMapper,
    'package.json': '<rootDir>/package.json',
    '\\.(svg|png|jpg)$': '<rootDir>/test/mocks/file-stub.ts',
  },
  testMatch: ['**/**/?(*.)+(test).(js|jsx|ts|tsx)'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: ['mocks', 'mock-server', 'node_modules'],
};
