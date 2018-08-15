const validateLogin = require("./sum.js").validateLogin

describe('Funcion validate ', () => {
  it('debería retornar TRUE, al ingresar formato correcto con email(abc@gmail.com) ', () => {
    assert.equal(validateLogin('abc@gmail.com'), true);
  });

  it('debería retornar formato invalido, al ingresar email(abcgmail.com) ', () => {
    assert.equal(validateLogin('abcgmail.com'), false);
  });

  it('debería retornar Formato correo invalido, al ingresar email("")', () => {
    assert.equal(validateLogin(''), false);
  });
})