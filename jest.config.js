module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**',
    '!src/styles/**',
    '!src/interfaces/*',
    '!src/**/stories.tsx',
    '!src/*/.stories.tsx',
    '!src/styles/theme.ts',
    '!src/styles/global.ts',
    '!src/components/index.tsx',
    '!src/types/styled-components.d.ts',
    '!src/types/jest-styled.components.d.ts',
  ],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',

    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
