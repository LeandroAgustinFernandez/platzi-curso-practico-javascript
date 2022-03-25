//Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);
// const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(
//   `El perimetro del cuadrado es ${perimetroCuadrado(ladoCuadrado)} cm`
// );
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(`El area del cuadrado es ${areaCuadrado} cm2`);
console.groupEnd();
//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   `Los lados del triangulo miden ${ladoTriangulo1} cm y ${ladoTriangulo2} cm, y la base mide ${baseTriangulo} cm`
// );
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`);
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(`El area del triangulo es ${areaTriangulo} cm2`);
console.groupEnd();
//Codigo del circulo
console.group("Circulo");
// const radio = 4;
// const diametroCirculo = radio * 2;
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(`El diametro del circulo es ${diametroCirculo} cm`);
// const perimetroCirculo = Math.PI * diametroCirculo;
function perimetroCirculo(radio) {
  return Math.PI * diametroCirculo(radio);
}
// console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);
// const areaCirculo = radio * radio * Math.PI;
function areaCirculo(radio) {
  return radio * radio * Math.PI;
}
// console.log(`El area del circulo es ${areaCirculo} cm2`);

console.groupEnd();
