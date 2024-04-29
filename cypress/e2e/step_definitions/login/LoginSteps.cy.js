import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/page_objects/login';
const loginPage = new LoginPage

Given(/^acesso o site CWI$/, () => {
	loginPage.acessarSite();
});

When(/^acesso a pagina de login$/, () => {
    loginPage.clicarMenulateral();
    loginPage.clicarBotaoPaginaLogin();
});

Then(/^devo visualizar botao de recuperar senha esquecida$/, () => {
    loginPage.visualizarBotaoRecuperarSenha();
});

And(/^informo email "(.*)" incorreto$/, (email) => {
    loginPage.informarEmail(email);
});

And(/^informo senha "(.*)" incorreta$/, (senha) => {
	loginPage.informarSenha(senha);
});

When(/^clico no botão de realizar login$/, () => {
    loginPage.clicarBotaoRealizarLogin();
   // cy.takeScreenshotAndAddToAllure();
});

Then(/^devo visualizar mensagem de erro$/, () => {
    loginPage.visualizarErroLogin();
    //cy.takeScreenshotAndAddToAllure();
});
