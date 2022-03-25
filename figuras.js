console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

console.group("Circulo");

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  return Math.PI * diametroCirculo(radio);
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

console.groupEnd();

//
function calcularPerimetroCuadrado() {
  let lado = document.getElementById("ladoCuadrado").value;
  let perimetro = perimetroCuadrado(lado);
  document.getElementById(
    "resultadoCuadrado"
  ).innerHTML = `El perimetro del cuadrado es ${perimetro} cm`;
}
function calcularAreaCuadrado() {
  let lado = document.getElementById("ladoCuadrado").value;
  let area = areaCuadrado(lado);
  document.getElementById(
    "resultadoCuadrado"
  ).innerHTML = `El area del cuadrado es ${area} cm2`;
}

function calcularPerimetroTriangulo() {
  let lado1 = Number(document.getElementById("ladoTriangulo1").value);
  let lado2 = Number(document.getElementById("ladoTriangulo2").value);
  let base = Number(document.getElementById("baseTriangulo").value);
  let perimetro = perimetroTriangulo(lado1, lado2, base);
  document.getElementById(
    "resultadoTriangulo"
  ).innerHTML = `El perimetro del triangulo es ${perimetro} cm`;
}
function calcularAreaTriangulo() {
  let altura = Number(document.getElementById("alturaTriangulo").value);
  let base = Number(document.getElementById("baseTriangulo").value);
  let area = areaTriangulo(base, altura);
  document.getElementById(
    "resultadoTriangulo"
  ).innerHTML = `El area del triangulo es ${area} cm2`;
}

function calcularDiametroCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  let diametro = diametroCirculo(radio);
  document.getElementById(
    "resultadoCirculo"
  ).innerHTML = `El diametro del circulo es ${diametro} cm`;
}
function calcularPerimetroCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  let perimetro = perimetroCirculo(radio);
  document.getElementById(
    "resultadoCirculo"
  ).innerHTML = `El perimetro del circulo es ${perimetro} cm`;
}
function calcularAreaCirculo() {
  let radio = document.getElementById("radioCirculo").value;
  let area = areaCirculo(radio);
  document.getElementById(
    "resultadoCirculo"
  ).innerHTML = `El area del circulo es ${area} cm2`;
}
