// Traemos el modulo
const expect = require("chai").expect;
// El archivo raiz que esta ubicado en el main dis/src/strangerString.js
const strangerString = require("..").default;

describe('strangerString', function (){
  it('Si la palabra termia en "ar", se le quitan', function(){
    const translation = strangerString("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la  palabra incia con "z", se le añade "pe" al final', function(){
    const translation = strangerString("Zorro")
    const translation2 = strangerString("Zarpar")
    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o más letras .Se debe partir a la mitad y unir con guión del medio', function(){
    const translation = strangerString("abecedario")
    expect(translation).to.equal("abece-dario")

  })
  it('Si la palabra original es un palindromo.Ninguna regla anterior cuenta y se devuelve. La misma palabra intercalando mayúsculas y minúsculas', function(){
    const translation= strangerString("sometemos");
    expect(translation).to.equal("SoMeTeMoS");
  })

})
