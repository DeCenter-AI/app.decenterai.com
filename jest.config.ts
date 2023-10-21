import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.node.json'

const jestConfig = {
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.(t|j|mj)s'],
  coverageDirectory: '../coverage',
  testRegex: '.*\\.spec\\.(t|j)s$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  // automock: true,
  verbose: true,
}

export default jestConfig
