const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'teste' + 100 deveria retornar 'Error'", () => {
  const resultado = calculadora.somar("teste", 100);
  expect(resultado).toBe("Error");
});

test("somar 100 + 'teste' deveria retornar 'Error'", () => {
  const resultado = calculadora.somar(100, "teste");
  expect(resultado).toBe("Error");
});
