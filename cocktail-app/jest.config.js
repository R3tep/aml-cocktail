module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',

      },
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1',
      '@environments/(.*)': '<rootDir>/src/environments/$1',
    },
  };
  