test("nome do teste", callbackFunction);
function callbackFunction() {
  console.log("essa função está sendo chamada?");
}

test("teste 2", function () {
  console.log("assim também funciona?");
});

test("test com arrow function", () => {
  console.log("funciona mesmo kkk");
});
