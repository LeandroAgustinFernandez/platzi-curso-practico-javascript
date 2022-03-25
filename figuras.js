//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es ${areaCuadrado} cm2`);
console.groupEnd();
//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
  `Los lados del triangulo miden ${ladoTriangulo1} cm y ${ladoTriangulo2} cm, y la base mide ${baseTriangulo} cm`
);
console.groupEnd();
