import {pathsToModuleNameMapper} from 'ts-jest'
import {compilerOptions} from './tsconfig.node.json'

const jestConfig = {
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testRegex: '.*\\.spec\\.(ts|mjs)$',
  moduleFileExtensions: ["js", "mjs", "ts", "tsx","json"],
  // automock: true,
  verbose: true,
  testTimeout: 100000,
}

export default jestConfig
