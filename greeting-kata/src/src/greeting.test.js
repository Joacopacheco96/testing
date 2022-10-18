const greeting = require("./greeting");

describe("Testeando la funcion de greetings", () => {
  it("Probando parametros string", () => {
    expect(greeting("Juancito")).toBe("Hello, Juancito");
  });
  it("Probando parametros vacio", () => {
    expect(greeting(null)).toBe("Hello, my friend");
  });
  it("Probando parametros con MAYUSCULAS", () => {
    expect(greeting("JOAQUINCITO")).toBe("HELLO, JOAQUINCITO");
  });
  it("Probando parametros con array de dos nombres", () => {
    expect(greeting(["Ine", "Joaco"])).toBe("Hello, Ine and Joaco");
  });
  it("Probando parametros con array de 3 o mas nombres", () => {
    expect(greeting(["Ine", "Joaco", "Brunillo", "Tadeo"])).toBe(
      "Hello, Ine, Joaco, Brunillo and Tadeo"
    );
  });
  it("Probando parametros con array de 3 o mas nombres con mayusculas y minusculas", () => {
    expect(
      greeting(["Ine", "Joaco", "Brunillo", "SERGI", "MATHI", "Tadeo"])
    ).toBe("Hello, Ine, Joaco, Brunillo, Tadeo, SERGI AND MATHI");
  });
  it("Probando parametros con array de 3 o mas nombres con solo un nombre en mayuscula", () => {
    expect(greeting(["Ine", "Joaco", "Brunillo", "SERGI", "Tadeo"])).toBe(
      "Hello, Ine, Joaco, Brunillo, Tadeo AND SERGI"
    );
  });
  it("Probando parametros con array de 3 o mas nombres con dos nombres en un solo string", () => {
    expect(greeting(["Ine", "Joaco, Brunillo", "SERGI", "Tadeo, Mathi"])).toBe(
      "Hello, Ine, Joaco, Brunillo, Tadeo, Mathi AND SERGI"
    );
  });
  it("Probando parametros con array de 3 o mas nombres con dos nombres en un solo string", () => {
    expect(
      greeting([
        "NICO, JUAN",
        "Ine",
        "Joaco, Brunillo",
        "SERGI, MICA",
        "MAXI",
        "Tadeo, Mathi",
      ])
    ).toBe(
      "Hello, Ine, Joaco, Brunillo, Tadeo, Mathi, NICO, JUAN, SERGI, MICA AND MAXI"
    );
  });
});
