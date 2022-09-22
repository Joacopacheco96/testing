const greeting = require('./greeting')

describe('Testeando la funcion de greetings', () => {

    it ('Probando parametros string', () => {
        expect(greeting('Juancito')).toBe("Hello, Juancito")
    })
    it ('Probando parametros vacio', () => {
        expect(greeting(null)).toBe("Hello, my friend")
    })
    it ('Probando parametros con MAYUSCULAS', () => {
        expect(greeting("JOAQUINCITO")).toBe("HELLO, JOAQUINCITO")
    })
    it ('Probando parametros con array de dos nombres', () => {
        expect(greeting(["Ine","Joaco"])).toBe("Hello, Ine and Joaco")
    })
    it ('Probando parametros con array de 3 o mas nombres', () => {
        expect(greeting(["Ine","Joaco","Brunillo", "Tadeo"])).toBe("Hello, Ine, Joaco, Brunillo and Tadeo")
    })
});

