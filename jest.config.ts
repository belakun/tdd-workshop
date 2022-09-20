import type { InitialOptionsTsJest } from 'ts-jest';

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/src/look-here-if-you-feel-stuck/'],
  watchPathIgnorePatterns: ['/src/look-here-if-you-feel-stuck/'],
  modulePathIgnorePatterns: ['/src/look-here-if-you-feel-stuck/'],
};

export default config;
