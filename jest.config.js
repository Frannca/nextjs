module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    '!src/components/**/types.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
