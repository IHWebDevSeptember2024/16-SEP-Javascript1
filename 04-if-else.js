// IF ELSE STATEMENTS
const isAdmin = true;

if (isAdmin) {
  // lo de dentor del if tiene que ser un boolean
  console.log("Hola, tienes acceso a la base de datos");
} else {
  console.log("Hola, no tienes acceso a la base de datos");
}

const age = 10;

if (age > 18) {
  console.log("Puedes pasar");
} else {
  console.log("No puedes pasar");
}

const myName = "Marina";

if (myName === "Marina") {
  // true
  console.log("Eres Program Manager");
} else {
  console.log("No eres PM");
}

const day = "monday";

// or operator
if (day === "Monday" || day === "monday") {
  console.log("Empezamos la semana");
} else if (day === "Tuesday") {
  console.log("Seguimos la semana");
} else if (day === "Wednesday") {
  console.log("Mitad de semana");
} else if (day === "Thursday") {
  console.log("Casi viernes");
} else if (day === "Friday") {
  console.log("Viernes");
} else if (day === "Saturday") {
  console.log("Fiesta");
} else {
  console.log("El día no está bien escrito");
}

// and operator &&

const myYear = 1998;

// 1982 y 1995
if (myYear >= 1982 && myYear <= 1995) {
  // se tienen que cumplir las dos condiciones a la vez
  console.log("Millenial");
} else if (myYear > 1995) {
  console.log("Eres de esos que estan todo el dia con TIK TOK");
}

// FALSY & TRUTHY
const userName = "";

if (userName) {
  console.log("El resultado es TRUTHY");
} else {
  console.log("El resutlado es FALSY");
}

const myAge = 20200;

if (myAge) { // 0 es falsy
  console.log("El resultado es TRUTHY");
} else {
  console.log("El resutlado es FALSY");
}

const array = [1,2,2,3];

if (NaN) { // 
  console.log("El resultado es TRUTHY");
} else {
  console.log("El resutlado es FALSY");
}
