module.exports = function greeting(name) {
  if (typeof name === "string") {
    if (name === name.toUpperCase()) return req3(name);
    else return req1(name);
  } else if (name === null) return req2(name);
  else if (typeof name === `object`) {
    // if (name.length === 2) return req4(name);
    // else return req5(name, "Hello", "and");
    return req6(name);
  }
};

function req1(name) {
  return `Hello, ${name}`;
}

function req2(name) {
  return `Hello, my friend`;
}

function req3(name) {
  return `HELLO, ${name}`;
}

// function req4(name) {
//   return `Hello, ${name[0]} and ${name[1]}`;
// }

function req5(name, result, and) {
  for (let i = 0; i < name.length - 1; i++) {
    result = result + `, ${name[i]}`;
  }
  return (result = result + ` ${and} ${name[name.length - 1]}`);
}

function req6a(arrayMinuscula, arrayMayuscula) {
  result = "Hello";
  for (let i = 0; i < arrayMinuscula.length; i++) {
    result = result + `, ${arrayMinuscula[i]}`;
  }
  return (result = result + ` AND ${arrayMayuscula[0]}`);
}

function req6b(arrayMinuscula, arrayMayuscula) {
  result = "Hello";
  for (let i = 0; i < arrayMinuscula.length; i++) {
    result = result + `, ${arrayMinuscula[i]}`;
  }
  for (let i = 0; i < arrayMayuscula.length - 1; i++) {
    result = result + `, ${arrayMayuscula[i]}`;
  }
  return (result =
    result + ` AND ${arrayMayuscula[arrayMayuscula.length - 1]}`);
}

// name = ["Pedro", "ALFONSO", "roberto"]
function req6(name) {
  name2 = [];
  for (let i = 0; i < name.length; i++) {
    let nombreSeparado = name[i].split(", ");
    if (nombreSeparado.length > 1) {
      name2.push(nombreSeparado[0]);
      name2.push(nombreSeparado[1]);
    } else {
      name2.push(nombreSeparado[0]);
    }
  }
  name = name2;

  //Allow the input to escape intentional commas introduced by Requirement 7.
  //These can be escaped in the same manner that CSV is,
  //with double quotes surrounding the entry. For example, when `name` is
  //`["Bob", "\"Charlie, Dianne\""]`, then the method should return the
  //string `"Hello, Bob and Charlie, Dianne."`.

  let arrayMinuscula = [];
  let arrayMayuscula = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) {
      arrayMayuscula.push(name[i]);
    } else {
      arrayMinuscula.push(name[i]);
    }
  }
  // Solo un nombre en minuscula
  if (arrayMinuscula.length === 1 && arrayMayuscula.length === 0) {
    return `Hello, ${arrayMinuscula[0]}`;
  }
  //Solo un nombre en mayuscula
  else if (arrayMinuscula.length === 0 && arrayMayuscula.length === 1) {
    return `HELLO, ${arrayMayuscula[0]}`;
  }
  // x cantidad de nombres en minuscula, y 0 nombres en mayuscula
  else if (arrayMayuscula.length === 0 && arrayMinuscula.length > 1) {
    return req5(name, "Hello", "and");
  }
  // x cantidad de nombres en mayuscula, y 0 nombres en minuscula
  else if (arrayMayuscula.length === 1 && arrayMinuscula.length === 0) {
    return req5(name, "HELLO", "AND");
  }
  // x cantidad de nombres en minuscula, y una mayuscula
  else if (arrayMayuscula.length === 1 && arrayMinuscula.length > 1) {
    return req6a(arrayMinuscula, arrayMayuscula);
  }
  // x cantidad de nombres en minuscula, y x cantidad de nombres en mayuscula
  else if (arrayMayuscula.length > 1 && arrayMinuscula.length > 1) {
    return req6b(arrayMinuscula, arrayMayuscula);
  }
}
