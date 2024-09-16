// NUMBER OPERATORS
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(12 / 2);

// Primero paréntesis, luego multiplicaciones | divisiones y finalmente sumas y restas
console.log((2 + 2) * 6);

let myNumber = 2;

// JS convierte el 100 en número porque es un operador matemático
console.log(myNumber * "100");

// PEEEEERO la suma también se utiliza para concatenar strings
console.log("Hola " + "mundo"); // JS da prioridad con el símbolo + a la concatenación de strings

console.log(myNumber + "100"); // me devuelve una string 2100

console.log(2 ** 10); // 2 elevado a 10

// quiero que myNumber sume 1 y sea 3
myNumber += 1;
console.log(myNumber);

// 👆esto es igual a esto👇:

myNumber = myNumber + 1;

console.log(myNumber);

// lo mismo con los demás operadores -=, etc

// MÓDULO

console.log(6 % 2);

