//1) Definición de Algoritmo (dar un ejemplo)

//Es un conjunto de instrucciones, secuenciales (ordenadas) que permiten, solucionar un problema.
//ej Receta de cocina ejemplo, la ejecución de tareas cotidianas  como cepillarse los dientes, lavarse las manos.

//2) Que es Pseudocodigo (dar un ejemplo)

// Se trata de un código falso (pseudo = falso), es una descripción de alto nivel, informal​,para que lo entienda el ser humano y no la máquina.
//su funcion es representar por pasos la solución a un problema , de la forma más detallada posible,
//utilizando un lenguaje cercano al de programación. No puede ejecutarse en un ordenador.

//ej
//ALGORITMO Sumar;
//VAR.
//ENTERO Numero1, Numero2, Resultado;
//INICIO.
//ESCRIBIR("Dime dos números para sumar: ");
//LEER(Numero1, Numero2);
//Resultado <- Numero1 + Numero2;
//ESCRIBIR("La suma es: ", Resultado);

//3) Realizar los siguientes problemas:

//a) Realizar un Programa en JavaScript que resuelva los siguientes problemas (los valores deben ser asignados por ustedes):
//superficie de un rectángulo
var base = 4;
var altura = 6;
console.log(base * altura);

//superficie de un triangulo
var base = 2;
var altura = 6;
console.log(base * altura) / 2;

//superficie de un circulo
const pi = 3.14
var radio = 4;
var resultado = (pi * radio);
console.log(resultado * 2);


//b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados.

var a = 2;
var b = 4;
var c = 6;

producto = (a * b * c);
console.log(producto);

suma = (a + b + c);
console.log(suma);

promedio = (a + b + c) / 3;
console.log(promedio);

//c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. 
//Deberán crear 5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento aplicado mas el total final

var pan = 50;
var leche = 40;
var carne = 100;
var huevos = 20;
var verduras = 60;

sumaTotal = (pan + leche + carne + huevos + verduras);
descuento = (sumaTotal * 0.15);
descTotal = (sumaTotal - descuento);

console.log(descTotal);

//d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, asumiendo que la unidad cambiaría 
//es un dato desconocido.
// 108 dolares = 1 peso
var dinero = prompt("indique cantidad de dinero: ");
cambio = (dinero * 0.00925);
console.log("Tu cambio en dolares sera de: $ " + cambio);


//e) Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo que dado el importe de una factura
// calcular el valor correspondiente al IVA.
// iva = 21%
var compra = prompt("ingrese el importe de su compra: ");
iva = (compra * 0.21);
console.log("EL iva agregado al producto sera de: " + iva);
console.log("El precio total de la compra sera: " + (Number(compra) + Number(iva)));