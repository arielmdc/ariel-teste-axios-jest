const axios = require('axios');

describe('Testes de Integração com APIs Públicas', () => {

  test('Testando a API de Piadas - Official Joke API', async () => {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('setup');
    expect(response.data).toHaveProperty('punchline');
  });

  test('Testando a API de Criptomoedas - CoinGecko', async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('bitcoin');
    expect(response.data.bitcoin).toHaveProperty('usd');
    expect(response.data.bitcoin.usd).toBeGreaterThan(0);
    expect(response.data.bitcoin.usd).toBeLessThan(100000);
  });

  test('Testando a API de Cães - The Dog API', async () => {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('name');
  });

  test('Testando a API de Fatos sobre Gatos - Cat Facts', async () => {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('text');
  });

  test('Testando a API de Países - REST Countries', async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0].name).toHaveProperty('common');
  });

});
