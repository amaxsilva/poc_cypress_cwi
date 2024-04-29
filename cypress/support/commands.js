// Cypress.Commands.add('takeScreenshotAndAddToAllure', () => {
//     cy.task('allure:attachFile', { name: 'Screenshot', content: Cypress.screenshot() });
//     // Tirar o screenshot
//     cy.screenshot().then((screenshotData) => {
//       if (screenshotData) {
//         // Gerar um nome de arquivo único para o screenshot
//         const timestamp = new Date().toISOString().replace(/:/g, '-');
//         const screenshotFileName = `screenshot-${timestamp}.png`;
  
//         // Salvar o screenshot no diretório de screenshots
//         cy.writeFile(`cypress/screenshots/${screenshotFileName}`, screenshotData, 'base64')
//           .then(() => {
//             // Adicionar o screenshot como anexo no relatório do Allure
//             cy.task('addAttachmentToAllure', {
//               name: 'Screenshot',
//               type: 'image/png',
//               path: `cypress/screenshots/${screenshotFileName}`,
//             });
//           })
//           .catch((error) => {
//             // Lidar com o erro ao salvar o arquivo
//             console.error('Erro ao salvar o screenshot:', error);
//           });
//       } else {
//         console.error('Erro ao tirar o screenshot: o screenshotData está vazio');
//       }
//     });
//   });
    