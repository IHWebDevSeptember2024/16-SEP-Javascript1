// MATH. es otra palabra reservada para usar distintos métodos relativos a números

// Crear número aleatorio entre 0 y 0.9999999999...
const randomNumber = Math.random();

console.log(randomNumber);

// FLOOR CEIL ROUND
console.log(Math.floor(2.5));
console.log(Math.ceil(2.5));
console.log(Math.round(2.4));

let anyNumber = 5.679345;
let roundedToOne = anyNumber.toFixed(2);
console.log(Number(roundedToOne)); // El tofixed lo convierte a string, con Number() lo volvemos a convertir a número
console.log(+roundedToOne); // lo mismo si añadimos un + al inicio

console.log(Math.max(2, 8, -10, 0, -4, 4565465));
console.log(Math.min(1, 2, 0, -5));

console.log(Math.pow(2, 3))

