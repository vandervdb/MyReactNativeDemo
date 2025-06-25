module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
