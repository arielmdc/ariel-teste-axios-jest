
# API Integration Tests

Este projeto realiza testes de integração em várias APIs públicas usando Axios e Jest. Os testes verificam a integridade e a resposta das APIs selecionadas.

## Serviços Selecionados

- **Official Joke API**
  - [https://official-joke-api.appspot.com/jokes/random](https://official-joke-api.appspot.com/jokes/random)
  - 1 caso de teste

- **CoinGecko API**
  - [https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd](https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd)
  - 1 caso de teste

- **The Dog API**
  - [https://api.thedogapi.com/v1/breeds](https://api.thedogapi.com/v1/breeds)
  - 1 caso de teste

- **Cat Facts API**
  - [https://cat-fact.herokuapp.com/facts](https://cat-fact.herokuapp.com/facts)
  - 1 caso de teste

- **REST Countries API**
  - [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
  - 1 caso de teste

## Estrutura do Projeto

- **jest.config.js**: Configuração do Jest para definir o ambiente de teste como Node.js.
- **tests/apiIntegration.test.js**: Arquivo contendo todos os testes de integração para as APIs selecionadas.

## Pré-requisitos

- Node.js
- npm

## Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/api-integration-tests.git
   cd api-integration-tests
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

## Executando os Testes

Para executar os testes, use o seguinte comando:

\`\`\`bash
npx jest
\`\`\`

## Casos de Teste

### Official Joke API

Verifica se a resposta contém as propriedades \`setup\` e \`punchline\`.

### CoinGecko API

Verifica se a resposta contém a propriedade \`bitcoin\`, e se o valor da moeda (\`bitcoin.usd\`) está dentro do intervalo esperado (1 a 100000 USD).

### The Dog API

Verifica se a resposta é uma lista e se pelo menos um item na lista contém a propriedade \`name\`.

### Cat Facts API

Verifica se a resposta é uma lista e se pelo menos um item na lista contém a propriedade \`text\`.

### REST Countries API

Verifica se a resposta é uma lista e se pelo menos um item na lista contém a propriedade \`name.common\`.