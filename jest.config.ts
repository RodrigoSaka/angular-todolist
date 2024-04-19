const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('jest').Config} */
const config = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  collectCoverageFrom: ['src/app/**/*.ts', '!**/node_modules/**', '!**/vendor/**', '!**/index.ts'],
  coveragePathIgnorePatterns: ['src/app/app.config.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};

module.exports = config;
