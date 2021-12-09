// 1. Dado el siguiente código:

// const edad = 18
// if (edad >= 18) {
//   alert("Es mayor de edad!")
// }

// Escribir el mismo código utilizando el operador de cortocircuito.

const edad = 18;

edad >= 18 && alert("Es mayor de edad!");

// 2. Dado el siguiente código:

// const edad = 18
// if (edad >= 18) {
//   alert("Es mayor de edad!")
// }
// else {
//   alert("Es menor de edad!")
// }

// Escribir el mismo código utilizando el operador ternario.

const mostrarMensajeMayorDeEdad = (edad) => {
    return edad >= 18 ? alert("Es mayor de edad!") : alert("Es menor de edad!");
}

mostrarMensajeMayorDeEdad(17);
mostrarMensajeMayorDeEdad(19);

// 3. Dado el siguiente código:

// const sumar = (num1, num2) => {
//     return num1 + num2
//   }

// Reescribir la función utilizando el return implícito.

const sumar = (num1, num2) => num1 + num2;

console.log(sumar(5, 5));
console.log(sumar(5, 10));
console.log(sumar(2, 2));

// 4. Usando filter, definí la función losMasCaros que tome una lista de costos 
// que representan costos de diferentes productos y devuelva un nuevo array con 
// los precios más caros (mayores a 50).

// Reescribí la función para tener solo return implícitos.

const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];

const losMasCaros = costos.filter((curr) => curr > 50);

console.log(losMasCaros);

// 5. Reescribir el siguiente código:

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     return edad >= 15 || tieneAutorizacion;
//   }
  
// puedeVerPelicula(12, false);
// puedeVerPelicula(12, true);
// puedeVerPelicula(16, false);
// puedeVerPelicula(18, true);

const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion;

console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));

// 6. Reescribir el siguiente código:

// const estaEnRango = (valor, minimo, maximo) => {
//     return valor >= minimo && valor <= maximo;
//   }
        
// estaEnRango(3, 1, 10);
// estaEnRango(1, 1, 10);
// estaEnRango(10, 1, 10);
// estaEnRango(12, 1, 10);
// estaEnRango(-3, 1, 10);

const estaEnRango = (valor, minimo, maximo) => valor >= minimo && valor <= maximo;

console.log(estaEnRango(3, 1, 10));
console.log(estaEnRango(1, 1, 10));
console.log(estaEnRango(10, 1, 10));
console.log(estaEnRango(12, 1, 10));
console.log(estaEnRango(-3, 1, 10));

// 7. Reescribir el siguiente código:

// const puedeAvanzar = (color) => {
//     return color === 'verde';
//   }
  
// puedeAvanzar('verde');
// puedeAvanzar('amarillo');
// puedeAvanzar('rojo');

const puedeAvanzar = color => color === "verde";

console.log(puedeAvanzar('verde'));
console.log(puedeAvanzar('amarillo'));
console.log(puedeAvanzar('rojo'));

// 8. Reescribir el siguiente código:

// const esVocal = (letra) => {
//     return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";
//   }

// esVocal('a');
// esVocal('n');
// esVocal('f');
// esVocal('u');

const esVocal = letra => letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";

console.log(esVocal('a'));
console.log(esVocal('n'));
console.log(esVocal('f'));
console.log(esVocal('u'));

// 9. Reescribir el siguiente código:

// const esConsonante = (letra) => {
//     if (esVocal(letra) === true) {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }

// esConsonante('a');
// esConsonante('b');
// esConsonante('c');
// esConsonante('o');

const esConsonante = letra => esVocal(letra) ? false : true;

console.log(esConsonante('a'));
console.log(esConsonante('b'));
console.log(esConsonante('c'));
console.log(esConsonante('o'));