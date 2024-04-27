# cypress-cucumber-structure
<h1>Estrutura de projeto utilizando Cypress com Cucumber e screenshot</h1>

<b>Para configurar o Ambiente:</b>
<ol>
<li>Instalar Node.js. <a href="https://nodejs.org/en/">Download Node</a></li>
<li>Escolher uma IDE de JavaScript para programar, o VScode é uma boa escolha.</li>
<li>Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal do windows e acesse essa mesma pasta com o seguinte comando: <i>cd /your/project/path</i></li>
<li>Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: <i>npm install --save-dev cypress cypress-cucumber-preprocessor</i></li>
</ol>
<b>Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:</b>
<ul>
<li>Para executar os testes via terminal: <i>npx cypress run</i></li>
</ul>
<br><br>
<b>Para iniciar um projeto do zero, segui os seguintes passos</b>
<ol>
<li>Tenha os passos acima executados</li>
<li>instale o cypress xpath para você utilizar <i>npm install cypress xpath</i></li>
<li>Adicione ao arquivo cypress/plugins/index.js o seguinte script:<br>
    <code>
        const cucumber = require('cypress-cucumber-preprocessor').default;
        module.exports = (on, config) => {
        on('file:preprocessor', cucumber({
         // other options...
            nonGlobalStepDefinitions: false,
            stepDefinitions: "cypress/e2e/step_definitions"
        }));
        };
    </code>
</li>
<li>Configurar o arquivo cypress.config.js<br>
    <code>
        const cucumber = require('cypress-cucumber-preprocessor').default;
        const { defineConfig } = require("cypress");
            module.exports = defineConfig({
            e2e: {
                setupNodeEvents(on, config) {
                on('file:preprocessor', cucumber())
                },
                baseUrl: 'https://cwi.com.br/',
                specPattern: "cypress/e2e/step_definitions/*.feature"
            },
            });
    </code>

</li>
<li>Estruturando o projeto</li>
        <p>O Cypress pode ser utilizado sem Cucumber com uma estrutura simples explicada na documentação do mesmo.
            Neste tutorial veremos como estruturar utilizando a ferramenta de escrita de testes em Gherkin. Para
            isso, temos que conhecer as principais pastas e arquivos iniciais do projeto:</p>
        <h3>Estrutura inicial.</h3>
        <p>A pasta ‘fixtures’ e os arquivos ‘commands.js’, ‘index,js’ e package-lock.json’ oferecem configurações
            avançadas que não serão abordadas neste tutorial.</p>
        <ul>
            <li>integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato
                Gherkin.</li>
            <li>plugin/index.js: este arquivo é destinado para configuração de plugins. Utilizamos ele ao configurar o
                Cucumber.</li>
            <li>support: dentro desta pasta colocamos os steps, os scripts e o mapeamento de elementos de nossos
                testes.</li>
            <li>node_modules: aqui ficam os arquivos de funcionamento do Cypress e do Cucumber. Normalmente não
                precisamos mexer nesta pasta.</li>
            <li>cypress.json: neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: criar
                variáveis globais, definir resolução do navegador, setar uma URL padrão, entre outros.</li>
        </ul>
        <li>Criando algumas pastas e arquivos adicionais:</li>
        <p>Para iniciar a estrutura do projeto, precisamos criar três pastas em cypress/support, pois iremos utilizar
            o conceito de page object. São elas: elements, pageobjects e steps.</p>
        <p>steps: nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em Gherkin e os scripts
            que fazemos em Cypress.</p>
        <p>pageobjects: aqui deixamos os scripts feitos em Cypress. A ideia do page objects é a de criarmos um
            arquivo.js para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a
            manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo
            correspondentes ao nome do arquivo. Ex.: HomePage.js, PdpPage.js, Checkout.js.</p>
        <p>elements: possui o mesmo conceito do page objects, mas aqui colocamos os elementos da página. Tal
            organização permite que elementos sejam reutilizados e tenham fácil manutenção. Ex.: HomeElements.js,
            PdpElements.js, CheckoutElements.js.</p>
        <p>Além disso, pelo próprio VS Code, precisamos criar um arquivo na pasta raíz do projeto com o nome e
            formato package.json.</p>
        <p>Adicione o seguinte código no arquivo package.json:</p>
        <p>Os scripts são facilitadores para executarmos o teste via terminal. Já a configuração de step_definitons
            permite definir o local do projeto onde estarão os steps de nosso cenário.</p><br><br>
        <li>Para adicionar videos, adicione a seguinte linha no cypress.config.js</li>
            <code>
                //Caso rode em modo headless você pode adicionar este comando
                video: true, // Habilita a gravação de vídeo
                videoCompression: 32, // Define a compressão do vídeo
                videosFolder: "cypress/videos", // Define o diretório onde os vídeos serão salvos
                videoRecordingFailedSpecs: true, // Grava vídeos dos cenários que falharam
            </code>
    </ol>

