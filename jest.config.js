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
  coveragePathIgnorePatterns: ['mocks', 'mock-server', 'node_modules'],
};
