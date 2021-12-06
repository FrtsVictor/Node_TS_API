const { resolve } = require('path');
const root = resolve(__dirname); //diretorio de onde ta
module.exports = {
    rootDir: root,
    displayName: 'root-tests', //nome dos testes, vai aparecer um label com esse nome
    testMatch: ['<rootDir>/src/**/*.test.ts'], //esse arquivo so vai dar match em quem estiver na src(testes de unidades) testes end to end vao ficar na pasta teste mas fora da pasta src
    testEnvironment: 'node', //injetar node no teste
    clearMocks: true,
    preset: 'ts-jest', //ligar jest com o ts-jest que instalamos
    moduleNameMapper: { // usando o alias pro jest ligar nos diretorios
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
    },
};