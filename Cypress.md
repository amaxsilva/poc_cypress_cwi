# Apostila Técnica Completa de Automação de Testes com Cypress

## 1. Introdução ao Cypress

### O que é Cypress e por que usá-lo?

Cypress é um framework de teste end-to-end (E2E) de última geração construído para a web moderna. Diferente de ferramentas tradicionais como o Selenium, que executam os testes fora do navegador, o Cypress roda diretamente dentro do navegador. Essa arquitetura única oferece diversas vantagens:

* **Velocidade e Confiabilidade:** A execução dentro do navegador elimina a latência da comunicação cliente-servidor, tornando os testes mais rápidos e menos propensos a timeouts.
* **Facilidade de Uso:** O Cypress possui uma API intuitiva e uma documentação excelente, facilitando a escrita e a depuração de testes.
* **Depuração Poderosa:** A interface do Cypress Test Runner oferece ferramentas de inspeção em tempo real, logs detalhados e screenshots automáticas de falhas, simplificando a identificação de problemas.
* **Gravação de Vídeo e Screenshots:** O Cypress pode gravar vídeos de toda a execução dos testes e tirar screenshots automaticamente em caso de falha, auxiliando na análise dos resultados.
* **Suporte Automático a Esperas:** O Cypress aguarda automaticamente que os elementos da página estejam visíveis e interativos antes de executar as ações, reduzindo a necessidade de esperas explícitas e tornando os testes mais resilientes.
* **Mocks e Stubs Integrados:** O Cypress facilita a simulação de respostas de APIs e o controle do comportamento de funções, permitindo testar cenários isolados.

### Comparação com outras ferramentas (Selenium, Playwright, etc.)

| Característica         | Cypress                                    | Selenium                                     | Playwright                                   |
| :--------------------- | :----------------------------------------- | :------------------------------------------- | :------------------------------------------- |
| **Arquitetura** | Executa dentro do navegador                | Controla o navegador de fora                 | Controla o navegador via protocolo DevTools |
| **Linguagem** | JavaScript                                 | Múltiplas linguagens (Java, Python, etc.)    | Múltiplas linguagens (JavaScript, Python, etc.) |
| **Facilidade de Uso** | Alta                                       | Média a Alta                                 | Alta                                       |
| **Velocidade** | Alta                                       | Média                                        | Alta                                       |
| **Confiabilidade** | Alta (esperas automáticas)                 | Média (necessidade de esperas explícitas)    | Alta (esperas automáticas)                 |
| **Depuração** | Excelente (Test Runner interativo)         | Boa (ferramentas de desenvolvedor)           | Excelente (Playwright Inspector)           |
| **Mocks/Stubs** | Integrados                                 | Requer bibliotecas externas                  | Integrados                                 |
| **Browsers Suportados** | Chrome, Edge, Firefox, Electron, Brave    | Vários (via drivers)                         | Chrome, Edge, Firefox, Safari, WebKit       |
| **Foco Principal** | Testes E2E para aplicações web modernas    | Automação web em geral                     | Testes E2E e de componentes para web moderna |
| **Curva de Aprendizagem** | Mais suave para desenvolvedores JavaScript | Pode ser mais íngreme para iniciantes       | Similar ao Cypress, amigável para JS        |

**Em resumo:**

* **Selenium:** Uma ferramenta poderosa e madura, com grande flexibilidade e suporte a diversas linguagens e navegadores. Ideal para projetos complexos e equipes com diferentes expertises.
* **Playwright:** Uma alternativa moderna com foco em velocidade e confiabilidade, oferecendo recursos similares ao Cypress e suporte a mais navegadores.
* **Cypress:** Excelente para testes E2E de aplicações web modernas, especialmente para equipes que utilizam JavaScript e buscam facilidade de uso, depuração intuitiva e recursos integrados.

A escolha da ferramenta depende das necessidades específicas do projeto, da expertise da equipe e dos objetivos de automação.

## 2. Instalação e Configuração Inicial

### Pré-requisitos (Node.js, npm, etc.)

Para utilizar o Cypress, você precisa ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina. O npm é instalado automaticamente com o Node.js.

1.  **Verificar a instalação do Node.js e npm:** Abra o seu terminal (ou prompt de comando) e execute os seguintes comandos:
    ```bash
    node -v
    npm -v
    ```
    Se ambos os comandos retornarem números de versão, significa que o Node.js e o npm estão instalados corretamente.

2.  **Instalar Node.js e npm (se necessário):** Caso não estejam instalados, acesse o site oficial do Node.js ([https://nodejs.org/](https://nodejs.org/)) e baixe a versão LTS (Long-Term Support) recomendada para o seu sistema operacional. O instalador incluirá o npm.

### Como instalar Cypress em um projeto com npm init e npm install cypress

1.  **Criar a pasta do projeto:** Abra o seu terminal e navegue até o diretório onde você deseja criar o seu projeto de automação. Crie uma nova pasta:
    ```bash
    mkdir cypress-automacao
    cd cypress-automacao
    ```

2.  **Inicializar o projeto Node.js:** Dentro da pasta do projeto, execute o seguinte comando para criar o arquivo `package.json`, que gerencia as dependências do seu projeto:
    ```bash
    npm init -y
    ```
    O `-y` flag aceita todas as configurações padrão. Você pode omitir o `-y` se quiser configurar o projeto manualmente.

3.  **Instalar o Cypress:** Agora, instale o Cypress como uma dependência de desenvolvimento do seu projeto:
    ```bash
    npm install cypress --save-dev
    ```
    Este comando fará o download e instalará a versão mais recente do Cypress e a adicionará à seção `devDependencies` no seu arquivo `package.json`.

### Estrutura de pastas gerada pelo Cypress

Após a instalação e a primeira execução do Cypress (como veremos a seguir), uma estrutura de pastas padrão será criada dentro do seu projeto:

cypress-automacao/
├── cypress/
│   ├── e2e/           # Onde você escreverá seus arquivos de teste (.cy.js)
│   ├── fixtures/      # Para arquivos de dados de teste (JSON)
│   ├── support/       # Para comandos personalizados e funções de suporte
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── plugins/       # Para estender a funcionalidade do Cypress
│   │   └── index.js
│   ├── downloads/     # Para arquivos baixados durante os testes
│   ├── screenshots/   # Onde as capturas de tela de falhas são salvas
│   └── videos/        # Onde os vídeos das execuções são salvas
├── node_modules/      # Pastas com as dependências do projeto
├── package-lock.json  # Informações sobre as versões das dependências
├── package.json       # Arquivo de configuração do projeto Node.js
└── ...

É importante entender essa estrutura para saber onde colocar seus arquivos de teste, dados e configurações.

### Executando o Cypress em modo visual (npx cypress open) e headless (npx cypress run)

1.  **Modo Visual (Cypress Test Runner):** Para abrir a interface gráfica do Cypress, execute o seguinte comando no terminal dentro da pasta do seu projeto:
    ```bash
    npx cypress open
    ```
    Este comando abrirá o Cypress Test Runner, onde você poderá ver seus arquivos de teste, executar testes individualmente ou em grupo, inspecionar comandos, logs, elementos e o estado da aplicação durante a execução.

2.  **Modo Headless (Linha de Comando):** Para executar os testes sem a interface gráfica, ideal para execução em ambientes de integração contínua (CI) ou para rodar os testes de forma automatizada, use o seguinte comando:
    ```bash
    npx cypress run
    ```
    Este comando executará todos os testes encontrados na pasta `cypress/e2e` (ou na configuração definida) e exibirá os resultados no seu terminal.

## 3. Primeiro Teste com Cypress

Vamos escrever nosso primeiro teste utilizando o site de testes público [https://example.cypress.io](https://example.cypress.io).

1.  **Criar um arquivo de teste:** Dentro da pasta `cypress/e2e`, crie um novo arquivo chamado `meu_primeiro_teste.cy.js`. A extensão `.cy.js` é a convenção para arquivos de teste do Cypress.

2.  **Escrever o código do teste:** Abra o arquivo `meu_primeiro_teste.cy.js` e adicione o seguinte código:

    ```javascript
    describe('Meu Primeiro Teste no Cypress', () => {
      it('Visita a página inicial e verifica o título', () => {
        cy.visit('[https://example.cypress.io](https://example.cypress.io)');
        cy.title().should('eq', 'Cypress.io: Kitchen Sink');
      });

      it('Encontra o link "type" e clica nele', () => {
        cy.visit('[https://example.cypress.io](https://example.cypress.io)');
        cy.contains('type').click();

        // Agora estamos em outra página, vamos verificar a URL
        cy.url().should('include', '/commands/actions');
      });

      it('Preenche o campo de e-mail e verifica o valor', () => {
        cy.visit('[https://example.cypress.io/commands/actions](https://example.cypress.io/commands/actions)');
        cy.get('.action-email')
          .type('teste@email.com')
          .should('have.value', 'teste@email.com');
      });
    });
    ```

    **Explicando o código:**

    * `describe('Meu Primeiro Teste no Cypress', () => { ... })`: Define um bloco de testes (suite) com uma descrição.
    * `it('Visita a página inicial e verifica o título', () => { ... })`: Define um teste individual (caso de teste) com uma descrição do que ele deve verificar.
    * `cy.visit('https://example.cypress.io')`: Comando do Cypress para navegar até a URL especificada.
    * `cy.title()`: Comando do Cypress para obter o título da página atual.
    * `.should('eq', 'Cypress.io: Kitchen Sink')`: Uma asserção (afirmação) para verificar se o título da página é igual a 'Cypress.io: Kitchen Sink'.
    * `cy.contains('type')`: Comando do Cypress para encontrar um elemento que contenha o texto 'type'.
    * `.click()`: Comando do Cypress para simular um clique no elemento encontrado.
    * `cy.url()`: Comando do Cypress para obter a URL atual da página.
    * `.should('include', '/commands/actions')`: Uma asserção para verificar se a URL atual inclui o segmento '/commands/actions'.
    * `cy.get('.action-email')`: Comando do Cypress para selecionar um elemento DOM usando um seletor CSS (`.action-email`).
    * `.type('teste@email.com')`: Comando do Cypress para digitar o texto 'teste@email.com' no elemento selecionado.
    * `.should('have.value', 'teste@email.com')`: Uma asserção para verificar se o valor do atributo `value` do elemento selecionado é 'teste@email.com'.

3.  **Executar o teste:**
    * **Modo Visual:** Execute `npx cypress open` e clique no nome do arquivo `meu_primeiro_teste.cy.js` na interface do Cypress Test Runner. Você verá o navegador abrir e os passos do seu teste sendo executados.
    * **Modo Headless:** Execute `npx cypress run`. Os resultados da execução serão exibidos no seu terminal.

## 4. Uso de Comandos do Cypress

O Cypress oferece uma vasta gama de comandos para interagir com a sua aplicação web e realizar asserções. Aqui estão alguns dos comandos mais usados, com explicações e exemplos:

* **`cy.visit(url)`:** Navega para a URL especificada.
    ```javascript
    cy.visit('[https://minhaaplicacao.com/login](https://minhaaplicacao.com/login)');
    ```

* **`cy.get(selector)`:** Obtém um ou mais elementos DOM que correspondem ao seletor CSS.
    ```javascript
    cy.get('#username'); // Seleciona o elemento com o ID 'username'
    cy.get('.botao-principal'); // Seleciona todos os elementos com a classe 'botao-principal'
    cy.get('input[type="password"]'); // Seleciona elementos input do tipo password
    ```

* **`cy.contains(content)`:** Obtém um elemento DOM que contém o texto especificado.
    ```javascript
    cy.contains('Entrar'); // Seleciona o elemento que contém o texto 'Entrar'
    cy.contains('a', 'Detalhes'); // Seleciona um link (<a>) que contém o texto 'Detalhes'
    ```

* **`cy.type(value)`:** Digita o valor especificado em um elemento de entrada (`<input>` ou `<textarea>`).
    ```javascript
    cy.get('#username').type('usuario123');
    cy.get('#password').type('senhaSegura{enter}'); // {enter} simula a tecla Enter
    ```

* **`cy.click(options)`:** Simula um clique em um elemento.
    ```javascript
    cy.get('#botao-enviar').click();
    cy.get('.checkbox').click({ force: true }); // 'force: true' clica mesmo se o elemento estiver escondido
    ```

* **`cy.intercept(route, handler)`:** Intercepta requisições HTTP que correspondem à rota e permite modificar a resposta ou o comportamento da requisição. É essencial para simular APIs e testar cenários de erro.
    ```javascript
    // Simula uma resposta bem-sucedida para a rota /api/usuarios
    cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' });

    // Simula uma resposta de erro com status 500
    cy.intercept('POST', '/api/login', { statusCode: 500, body: { mensagem: 'Erro no servidor' } });

    // Intercepta a requisição e espera antes de permitir que ela continue
    cy.intercept('GET', '/api/produtos', (req) => {
      req.on('response', (res) => {
        res.delay = 2000; // Adiciona um atraso de 2 segundos na resposta
      });
    });
    ```

* **`cy.wait(alias)`:** Pausa a execução do teste até que um determinado evento ocorra (geralmente uma requisição interceptada com `.as(alias)`).
    ```javascript
    cy.intercept('GET', '/api/dados').as('getData');
    cy.get('#carregar-dados').click();
    cy.wait('@getData'); // Espera até que a requisição com o alias 'getData' seja concluída
    cy.get('#resultado').should('be.visible');
    ```

* **`cy.request(url, method, body)`:** Envia uma requisição HTTP diretamente para uma URL, sem passar pela interface do usuário. Útil para configurar estados iniciais ou verificar APIs.
    ```javascript
    cy.request('POST', '/api/criar-usuario', { nome: 'Novo Usuário', email: 'novo@email.com' })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.id).to.not.be.null;
      });
    ```

* **`cy.fixture(file)`:** Carrega dados de um arquivo JSON localizado na pasta `cypress/fixtures`.
    ```javascript
    cy.fixture('usuario.json').then((user) => {
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#botao-enviar').click();
    });
    ```
    Conteúdo de `cypress/fixtures/usuario.json`:
    ```json
    {
      "username": "usuario_teste",
      "password": "senha_secreta"
    }
    ```

* **`cy.upload(file)`:** Simula o upload de um arquivo para um elemento `<input type="file">`. Requer a instalação de um plugin (`cypress-file-upload`).
    ```javascript
    // Assumindo que o plugin cypress-file-upload está configurado
    cy.fixture('imagem.png', 'base64').then((fileContent) => {
      cy.get('input[type="file"]').upload(
        { fileContent, fileName: 'imagem.png', mimeType: 'image/png' },
        { subjectType: 'input' }
      );
    });
    cy.get('#mensagem-upload').should('contain', 'imagem.png');
    ```
    Para usar `cy.upload`, instale o plugin: `npm install -D cypress-file-upload` e adicione `require('cypress-file-upload')` no seu arquivo `cypress/support/commands.js`.

### Boas práticas para encadeamento e organização dos comandos

O Cypress permite encadear comandos para realizar múltiplas ações em sequência. Isso torna o código mais conciso e legível.

* **Encadeamento:** Use o ponto (`.`) para encadear comandos. O resultado do comando anterior se torna o sujeito do próximo comando.
    ```javascript
    cy.get('#meu-elemento')
      .should('be.visible')
      .click()
      .type('algum texto')
      .should('have.value', 'algum texto');
    ```

* **Organização:** Divida testes complexos em múltiplos `it()` blocks para manter cada teste focado em uma única funcionalidade ou cenário. Use comentários para explicar partes complexas do código.

## 5. Page Objects Pattern
### O que é Page Object Model (POM)

O Page Object Model (POM) é um padrão de design amplamente utilizado na automação de testes para criar uma representação de cada página da sua aplicação web como uma classe. Dentro dessas classes (os Page Objects), você define os elementos da página (usando seletores CSS, XPath, etc.) e os métodos que representam as interações do usuário com esses elementos.

**Ideia Principal:** Separar a lógica de localização dos elementos da página da lógica dos seus testes.

### Como criar e estruturar classes PageObject no Cypress

1.  **Criar uma pasta para Page Objects:** Dentro da pasta `cypress`, crie uma nova pasta chamada `pageObjects` (ou `pages`).

2.  **Criar um arquivo para cada página:** Para cada página da sua aplicação que você precisa interagir nos seus testes, crie um arquivo JavaScript dentro da pasta `pageObjects`. Por exemplo, para uma página de login, você criaria um arquivo chamado `loginPage.js`.

3.  **Definir a classe Page Object:** Dentro do arquivo, crie uma classe que represente a página. No construtor da classe, você pode definir os seletores dos elementos da página como propriedades da classe. Crie métodos para encapsular as interações com esses elementos.

    **Exemplo: `cypress/pageObjects/loginPage.js`**

    ```javascript
    class LoginPage {
      constructor() {
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '.error-message';
      }

      visit() {
        cy.visit('/login'); // Assumindo que /login é a rota da página de login
      }

      typeUsername(username) {
        cy.get(this.usernameInput).type(username);
      }

      typePassword(password) {
        cy.get(this.passwordInput).type(password);
      }

      clickLoginButton() {
        cy.get(this.loginButton).click();
      }

      checkErrorMessage(message) {
        cy.get(this.errorMessage).should('contain', message);
      }

      login(username, password) {
        this.visit();
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
      }
    }

    // Exportar uma instância da classe para ser usada nos testes
    const loginPage = new LoginPage();
    export default loginPage;
    ```

4.  **Usar o Page Object nos seus testes:** Nos seus arquivos de teste (`.cy.js`), importe a instância do Page Object e use seus métodos para interagir com a página.

    **Exemplo: `cypress/e2e/login.cy.js`**

    ```javascript
    import loginPage from '../pageObjects/loginPage';

    describe('Testes de Login', () => {
      beforeEach(() => {
        loginPage.visit();
      });

      it('Deve logar com credenciais válidas', () => {
        loginPage.typeUsername('usuario_valido');
        loginPage.typePassword('senha_valida');
        loginPage.clickLoginButton();
        cy.url().should('include', '/dashboard'); // Assumindo que após o login vai para /dashboard
      });

      it('Deve exibir mensagem de erro com credenciais inválidas', () => {
        loginPage.typeUsername('usuario_invalido');
        loginPage.typePassword('senha_invalida');
        loginPage.clickLoginButton();
        loginPage.checkErrorMessage('Credenciais inválidas');
      });
    });
    ```

### Benefícios de usar POM para reuso e manutenção

* **Reusabilidade:** Os seletores e as interações com os elementos da página são definidos em um só lugar e podem ser reutilizados em múltiplos testes.
* **Manutenção:** Se a estrutura da página ou os seletores dos elementos mudarem, você só precisa atualizar o Page Object correspondente. Os testes que utilizam esse Page Object não precisarão ser alterados (a menos que a lógica de interação também mude).
* **Legibilidade:** Os testes se tornam mais focados no fluxo de teste e nas ações do usuário, utilizando métodos descritivos do Page Object (ex: `loginPage.typeUsername('...')` em vez de `cy.get('#username').type('...')`).
* **Organização:** O POM ajuda a organizar o código de automação de forma lógica e modular, facilitando a colaboração em equipes maiores.

## 6. Organização de Testes com Tags e Suites

### Como usar tags em testes com cypress-grep ou cypress-tags

As tags permitem categorizar seus testes para facilitar a execução seletiva. Existem alguns plugins populares para trabalhar com tags no Cypress:

* **`cypress-grep`:** Permite filtrar testes por texto no título (`describe` ou `it`) ou por tags customizadas.
* **`cypress-tags`:** Permite definir tags específicas nos blocos `describe` e `it` e filtrá-los na linha de comando ou na interface do Cypress Test Runner.

Vamos focar no `cypress-grep` como exemplo, pois é bastante flexível.

1.  **Instalar `cypress-grep`:**
    ```bash
    npm install -D cypress-grep
    # ou
    yarn add -D cypress-grep
    ```

2.  **Configurar `cypress-grep`:** No seu arquivo `cypress/support/e2e.js` (ou `cypress/support/index.js` em versões mais antigas), importe e inicialize o plugin:

    ```javascript
    import 'cypress-grep';
    ```

3.  **Adicionar tags aos seus testes:** Você pode adicionar tags como parte do texto nos seus blocos `describe` ou `it`. O `cypress-grep` procurará por essas palavras-chave.

    ```javascript
    describe('Testes de Login @smoke @auth', () => { // Tags: @smoke, @auth
      it('Login bem-sucedido @regression', () => { // Tag: @regression
        // ... código do teste ...
      });

      it('Falha no login com senha incorreta', () => { // Sem tag específica
        // ... código do teste ...
      });
    });

    describe('Testes de Cadastro @smoke', () => { // Tag: @smoke
      it('Cadastro de novo usuário', () => {
        // ... código do teste ...
      });
    });
    ```

### Execução filtrada com tags específicas

Você pode executar testes com tags específicas usando a opção `--grep` no comando `cypress run` ou através da variável de ambiente `CYPRESS_GREP` ao abrir o Cypress Test Runner.

* **Linha de comando (`cypress run`):**
    ```bash
    npx cypress run --grep @smoke       # Executa testes com a tag @smoke
    npx cypress run --grep "@smoke and @auth" # Executa testes com ambas as tags
    npx cypress run --grep -v @wip      # Executa testes que NÃO possuem a tag @wip
    ```

* **Variável de ambiente (`cypress open`):**
    ```bash
    CYPRESS_GREP=@regression npx cypress open
    CYPRESS_GREP="@smoke and @auth" npx cypress open
    CYPRESS_GREP="-v @wip" npx cypress open
    ```

### Organização por suites e arquivos

Além de tags, a forma mais fundamental de organizar seus testes no Cypress é através da estrutura de arquivos e do uso de blocos `describe`.

* **Estrutura de arquivos:** Crie arquivos `.cy.js` separados para agrupar testes relacionados a uma funcionalidade específica (ex: `login.cy.js`, `cadastro.cy.js`, `carrinho.cy.js`).
* **Suites (`describe`):** Use blocos `describe` para agrupar testes logicamente dentro de um arquivo. Você pode aninhar blocos `describe` para criar uma hierarquia mais complexa.

    ```javascript
    describe('Funcionalidade de Login', () => {
      beforeEach(() => {
        cy.visit('/login');
      });

      describe('Login com credenciais válidas', () => {
        it('Deve redirecionar para o dashboard', () => {
          // ...
        });
      });

      describe('Login com credenciais inválidas', () => {
        it('Deve exibir mensagem de erro para senha incorreta', () => {
          // ...
        });

        it('Deve exibir mensagem de erro para usuário inexistente', () => {
          // ...
        });
      });
    });
    ```

Essa organização facilita a navegação, a execução seletiva (você pode executar um arquivo inteiro ou um bloco `describe` específico no Test Runner) e a compreensão da estrutura dos seus testes.

## 7. Rodando Cypress em Pipeline (CI/CD)

Integrar o Cypress em um pipeline de Integração Contínua e Entrega Contínua (CI/CD) permite executar seus testes automaticamente a cada alteração de código, garantindo a qualidade da sua aplicação.

### Exemplos de configuração para GitHub Actions, GitLab CI, Bitbucket Pipelines, etc.

A configuração específica dependerá da sua plataforma de CI/CD, mas os passos gerais são semelhantes:

1.  **Configurar o ambiente:** Certifique-se de que o ambiente de CI tenha Node.js e npm (ou yarn) instalados.
2.  **Fazer o checkout do código:** O pipeline deve fazer o checkout do seu repositório.
3.  **Instalar as dependências:** Execute `npm install` ou `yarn install` para instalar as dependências do projeto, incluindo o Cypress.
4.  **Executar os testes do Cypress:** Use o comando `npx cypress run`.
5.  **Gerar relatórios (opcional):** Configure um reporter para gerar relatórios de teste (ex: JUnit, Mochawesome).
6.  **Publicar os resultados:** O pipeline pode ser configurado para publicar os resultados dos testes, como relatórios, screenshots e vídeos de falhas.

**Exemplo para GitHub Actions (`.github/workflows/cypress-tests.yml`):**

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          browser: chrome
          headless: true
          record: false # Defina para true se você estiver usando o Cypress Cloud

      - name: Upload screenshots on failure
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-screenshots
          path: cypress/screenshots

      - name: Upload videos on failure
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-videos
          path: cypress/videos
Gitlab.ci
stages:
  - test

cypress:
  image: cypress/included:latest
  stage: test
  script:
    - npm ci
    - npx cypress run --browser chrome --headless
  artifacts:
    paths:
      - cypress/screenshots
      - cypress/videos
    when: always

Exemplo para Bitbucket Pipelines (bitbucket-pipelines.yml):
image: node:18

pipelines:
  default:
    - step:
        name: Run Cypress Tests
        script:
          - npm install
          - npx cypress run --browser chrome --headless
        artifacts:
          - cypress/screenshots/**
          - cypress/videos/**

Instalação headless para CI (npm ci, npx cypress run)
 * npm ci: É um comando usado em ambientes de CI para instalar as dependências do projeto de forma limpa, baseando-se no arquivo package-lock.json (ou yarn.lock). É mais rápido e garante a mesma versão das dependências em todas as execuções. Use npm ci em vez de npm install em seus pipelines de CI.
 * npx cypress run --headless: Executa os testes do Cypress sem a interface gráfica do navegador, o que é essencial em ambientes de CI que geralmente não possuem interface gráfica.
Geração de relatórios (Mochawesome, Allure, etc.)
Gerar relatórios detalhados dos seus testes é crucial para analisar os resultados em ambientes de CI. Alguns reporters populares para Cypress incluem:
 * Mochawesome: Gera relatórios HTML e JSON personalizáveis.
 * Allure: Gera relatórios interativos com histórico de testes, gráficos e anexos.
Para usar um reporter, você geralmente precisa instalá-lo como uma dependência (npm install -D mochawesome ou npm install -D allure-commandline cypress-allure-plugin) e configurar o Cypress para usá-lo no seu arquivo de configuração (cypress.config.js ou cypress.json) e/ou ao executar os testes na linha de comando.
Exemplo de configuração básica para Mochawesome no cypress.config.js:
const { defineConfig } = require('cypress');
const mochawesome = require('mochawesome');
const { merge } = require('mochawesome-merge');
const fs = require('fs');
const path = require('path');

const generateReport = async (options) => {
  const jsonReport = path.join(options.reportDir, 'mochawesome.json');
  const report = await merge(options);
  await mochawesome.create(report, { reportDir: options.reportDir });
  fs.unlinkSync(jsonReport); // Opcional: remover o arquivo JSON após a geração do HTML
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', async (results) => {
        if (results && results.totalFailed > 0) {
          console.log('Generating mochawesome report...');
          const reportDir = 'cypress/reports/mochawesome';
          const options = {
            files: 'cypress/reports/mochawesome/*.json',
            output: 'mochawesome.html',
            reportDir: reportDir,
            overwrite: true,
          };
          await generateReport(options);
          console.log('Mochawesome report generated successfully!');
        }
      });
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
  },
});

E no seu pipeline de CI, você precisará garantir que a pasta de relatórios seja salva como um artefato.
8. Uso de BDD (Behavior-Driven Development)
Behavior-Driven Development (BDD) é uma abordagem de desenvolvimento que visa melhorar a comunicação e a colaboração entre as partes interessadas (negócios, desenvolvimento, testes) através do uso de uma linguagem comum para descrever o comportamento do software.
Integração com cypress-cucumber-preprocessor
Para usar BDD com Cypress, o plugin cypress-cucumber-preprocessor é uma escolha popular. Ele permite escrever seus testes em arquivos .feature usando a sintaxe Gherkin e ligar esses passos a definições de código Cypress.
 * Instalar o plugin:
   npm install -D @badeball/cypress-cucumber-preprocessor
# ou
yarn add -D @badeball/cypress-cucumber-preprocessor

 * Configurar o plugin: Configure o plugin no seu arquivo cypress.config.js:
   const { defineConfig } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

 * Criar a pasta para arquivos .feature: Dentro de cypress/e2e, crie uma pasta chamada features.
Como escrever cenários .feature
Os arquivos .feature contêm a descrição dos comportamentos da sua aplicação usando a sintaxe Gherkin, que consiste em palavras-chave como Feature, Scenario, Given, When, Then, And, But.
Exemplo: cypress/e2e/features/login.feature
Funcionalidade: Autenticação de Usuário

  Como um usuário
  Eu quero poder fazer login no sistema
  Para acessar funcionalidades restritas

  Cenário: Login bem-sucedido com credenciais válidas
    Dado que eu estou na página de login
    Quando eu digito o nome de usuário
