/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  // Debe retornar un string.
  // Tu código:
  var devolver = "Henry";
  return devolver;
}
var resultado1 = devolverString("string");
console.log(resultado1);

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
  // Retorna el resultado de su suma.
  // Tu código:
  var operacion = x + y;
  return operacion;
}
var resultados = suma(10, 5);
console.log(resultados);
function resta(x, y) {
  // Retorna el resultado de la resta.
  // Tu código:
  var operacion = x - y;
  return operacion;
}
var resultado1 = resta(7, 4);
console.log(resultado1);
function divide(x, y) {
  // Retorna el resultado de su división.
  // Tu código:
  var operacion2 = x / y;
  return operacion2;
}
var resultado2 = divide(12, 6);
console.log(resultado2);
function multiplica(x, y) {
  // Retorna el resultado de su multiplicación.
  // Tu código:
  var operacion3 = x * y;
  return operacion3;
}
var resultado3 = multiplica(3, 8);
console.log(resultado3);
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  var operacion4 = x % y;
  return operacion4;
}
var resultado4 = obtenerResto(21, 7);
console.log(resultado4);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverString,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
};
