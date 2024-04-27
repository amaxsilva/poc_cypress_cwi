/// <reference types="Cypress" />
import 'cypress-xpath';
import LoginElements from './LoginElements'

const loginElements = new LoginElements;
//acessar o cypress.config.js e captura o valor que pertence a varial baseUrl
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    //acessar menu
    clicarMenulateral(){
        cy.xpath(loginElements.menu()).click()
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }

    // Informa email no input do email
    informarEmail(email) {
        cy.wait(1000)
        cy.xpath(loginElements.inputEmail()).type(email)
    }

    // Informa senha no input da senha
    informarSenha(senha) {
        cy.xpath(loginElements.inputSenha()).type(senha)
    }

    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        // Faz o scroll até o meio da página
        cy.scrollTo('center');
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        // Faz o scroll até o meio da página
        cy.scrollTo('center');
        cy.get(loginElements.mensagemErro()).should('contain', 'E-mail ou senha incorretos.')
    }
    
}

export default LoginPage;
