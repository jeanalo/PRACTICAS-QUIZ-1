// reto 1
const Personas = [
   {nombre:'Juan', edad:15},
   {nombre:'Alonso', edad:25},
   {nombre:'Julian', edad:32},
   {nombre:'Everardo', edad:12}
]


function myFunction() {
   let sum = 0
   Personas.forEach(ciclos => {
      sum = sum + ciclos.edad
   
   });
   return sum
}
const total = myFunction()
console.log(total)


// PUNTO 2 RETO DE FILTRAR OBJETOS

const Productos = [
   {nombre:'Jabon', precio:140},
   {nombre:'Limpido', precio:10},
   {nombre:'Trapeador', precio:70},
   {nombre:'Escoba', precio:13},
   {nombre:'Cucharas', precio:13},
   {nombre:'Vasos', precio:60}
]

function ProductosYEdades() {
   let myArray= []
   Productos.forEach(elemento => {
      if(elemento.precio > 50){
         myArray.push(elemento)
      }


   });
   
   return myArray
}

const Preciostotales = ProductosYEdades()
console.log(Preciostotales)

// Punto 3
// REPETIR COMO LO HIZOOO EL PROFE

const nombreyCalificacion = [
   {nombre:'Jaider', calificacion:10},
   {nombre:'Javier', calificacion:10},
   {nombre:'Yeison', calificacion:7},
   {nombre:'Mariana', calificacion:5},
   {nombre:'Valeria', calificacion:2},
   {nombre:'Yisel', calificacion:1}
]

function DevolverNameAndGrade(studentName) {
   let resultado = '';
   nombreyCalificacion.forEach((estudiante) => {
         if (estudiante.nombre === studentName) {
            resultado = estudiante;
         } else {
            resultado = null;
         }
   });
   return resultado;

}
console.log(DevolverNameAndGrade('Yisel'));
console.log(DevolverNameAndGrade('Aroon'))

// RETO 4 ORDENAR DE MAYOR A MENOR


function ordenarPorPrecio(Productos) {
   return Productos.sort(function(a, b) {
       if (a.precio < b.precio) {
           return -1;
       } else if (a.precio > b.precio) {
           return 1;
       } else {
           return 0;
       }
   });
}
console.log(ordenarPorPrecio(Productos));

// RETO 5 COMBINAR PROPIEDADES DE OBJETOS

const PersonasGrupo1 = [
   {nombre:'Juan', edad:15},
   {nombre:'Alonso', edad:25},
   {nombre:'Julian', edad:32},
   {nombre:'Everardo', edad:12}
]

const PersonasGrupo2 = [
   {nombre:'William', edad:14},
   {nombre:'Alex', edad:56},
   {nombre:'Wander', edad:29},
   {nombre:'Mariana', edad:76}
]
const MixDePersonas = PersonasGrupo1.concat(PersonasGrupo2);{
   console.log(MixDePersonas)
}


  


