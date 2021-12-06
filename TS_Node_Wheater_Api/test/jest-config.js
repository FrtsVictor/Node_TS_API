
const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`); //chamando a config q ta na raiz pra sobrescrever

module.exports = {
    ...rootConfig, ...{
        rootDir: root,
        displayName: "end2end-tests",
        setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"], //arquivo de setup antes de rodar os testes
        testMatch: ["<rootDir>/test/**/*.test.ts"],   // só rodar os arquivos dentro da pasta teste com extensão ts
    }
}