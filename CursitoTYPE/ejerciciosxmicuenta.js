// const LlueveoNo = function avisoLluvia(estaLloviendo){
//     if(estaLloviendo){
//         console.log("Esta Lloviendo")
//     } else {
//         console.log("No está lloviendo")

//     }

// }
// LlueveoNo(false)


// EJERCICIO 2

const Whatever = function calcular(x, y, z) {
    return((x+y)*z)
}

console.log(Whatever(1,1,2))

// OTRA FORMA EJERCICIO 2

function Calculamexfa(x,y,z){
    let suma = x+y
    let resultado= suma * z
    return resultado
}

console.log(Calculamexfa(2,2,2))

// EJERCICIO 3

function cualEsMayor(a, b){
if (a > b) {
    console.log(a + "Es mayor")
} else if (b > a) {
    console.log(b + "Es mayor")
}

}

let mayor = cualEsMayor(5, 2);
console.log(mayor);

// EJERCICIO 4

function nombreResoulucion(ancho, alto) {
    if (ancho > 7680 && alto > 4320 ) {
        return("8k");
    } else if (ancho > 3840 && alto > 2160 ) {
        return("4k")
    } else if (ancho > 2560 && alto > 1440 ) {
    return("WQHD")
    } else if (ancho > 1920 && alto > 1080 ) {
    return("FHD")
    } else if (ancho > 1280 && alto > 720 ) {
    return("HD")
    } else {
    return false
    }};

let nombre = nombreResoulucion(2,2);
console.log(nombre);

// EJERCICIO 5
let i = 0;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log("impares", i);
    } i++;
}

// EJERCICIO 6
// CREAR ALGORITMO QUE DEVUELVA EL NUMERO MENOR Y EL NUMERO MAYOR DE UN ARRAY

let listArray = [2,4,5,777,-555,1990,345,74,12]
function GetMenorMayor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    for (numero of arr) {
        menor = menor < numero? menor : numero
        mayor =  mayor > numero? mayor : numero
    }
    return [menor, mayor]
}

let numerosFinales = GetMenorMayor(listArray);
console.log(numerosFinales);

// EJERCICIO 7

let Array2= [1,25,-23,46,887,-20,-12,-90,-223,60,-234];

function cuantosPositivos(arrr){
    let cantidad = 0;
    for (conteo of arrr){
        if (conteo > 0) {
            cantidad++;
        }
        
    }
    return cantidad
}

let resultado = cuantosPositivos(Array2);
console.log(resultado);

// EJERCICIO 8, ALGORITMO QUE DEVUELVA EL PRECIO DEL PRODUCTO MAS IMPUESTO

function precioCompleto(precio, impuesto){
    let cantidadImpuesto = precio*impuesto
    let cantidadTotal = precio + cantidadImpuesto
    return cantidadTotal
}

let resultadoFinal = precioCompleto(100.000, 0.19);
console.log(resultadoFinal);

//   EJEMPLO 10 crear array de longitud N y que sus elementenos sean numeros de 1 hasta n

let longitud = 7;

function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let arrr= [];
    for (let i = 0; i < n; i++) {
        arrr[i] = i + 1;
    }
    return arrr
}

let resultt = crearArray(longitud);

console.log(resultt);


const people = [
    {nombre: 'Tarcila', edad: 60},
    {nombre: 'Melania', edad: 10},
    {nombre: 'Tarcila', edad: 18},
    {nombre: 'Alonso', edad: 30},
]

const mayorDeEdad = ()