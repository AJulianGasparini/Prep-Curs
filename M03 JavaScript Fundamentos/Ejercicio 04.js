/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  var operacion = num ** 2;
  return operacion;
}
var resultado1 = elevarAlCuadrado(4);
console.log(resultado1);

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  var operacion1 = num ** 3;
  return operacion1;
}
var resultado2 = elevarAlCubo(3);
console.log(resultado2);

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  var operacion3 = num ** exponent;
  return operacion3;
}
var resultado2 = elevar(4, 3);
console.log(resultado2);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:
  var operacion = Math.round(num);
  return operacion;
}
var resultado4 = redondearNumero(3.5);
console.log(resultado4);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  var operacion = Math.ceil(num);
  return operacion;
}
var resultado = redondearHaciaArriba(1.88);
console.log(resultado);

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  var operacion = Math.random();
  return operacion;
}
var resultadorandom = numeroRandom();
console.log(resultadorandom);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
};
