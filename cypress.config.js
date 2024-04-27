const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: 'https://cwi.com.br/',
    specPattern: "cypress/e2e/step_definitions/*.feature",
    reporter: "mocha-allure-reporter"
  },
  // video: true, // Habilita a gravação de vídeo
  // videoCompression: 32, // Define a compressão do vídeo
  // videosFolder: "cypress/videos", // Define o diretório onde os vídeos serão salvos
  // videoRecordingFailedSpecs: true, // Grava vídeos dos cenários que falharam
});