
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Lucca Alves" e o RA "190647"', () => {
    const nome = "Lucca Alves";
    const RA = "190647";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
