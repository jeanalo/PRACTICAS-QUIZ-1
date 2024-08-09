// reto 1
const Personas = [
    {nombre:'Juan', edad:15},
    {nombre:'Alonso', edad:25},
    {nombre:'Julian', edad:32},
    {nombre:'Everardo', edad:12}
 ]

 const sumaDeEdades = (Personas) => {
    let sumita = 0
    Personas.forEach(element => {
        sumita += element.edad 
        
    });
    return sumita
 }
 console.log(sumaDeEdades(Personas))

 // PUNTO 2 RETO DE FILTRAR OBJETOS

const Productos = [
    {nombre:'Jabon', precio:140},
    {nombre:'Limpido', precio:10},
    {nombre:'Trapeador', precio:70},
    {nombre:'Escoba', precio:13},
    {nombre:'Cucharas', precio:13},
    {nombre:'Vasos', precio:60}
 ]
 const filteresProducts = (Productos) => {
    let newArr = [];
    Productos.forEach(iteration => {
        if (iteration.precio > 50) {
            newArr.push(iteration)
        }
    });
    return newArr
 }
 console.log(filteresProducts(Productos))

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

const nameAndGrade = (nombreyCalificacion, nombre) => {
    let studentReturned = {};
    nombreyCalificacion.forEach(loop => {
        if (loop.nombre === nombre) {
            studentReturned = loop
        } else {
            return null
        }
       
    });
    return studentReturned

}
console.log(nameAndGrade(nombreyCalificacion, 'Mariana'))
 
// EJERCICIO 4  
const productsInOrder = (Productos) => {
 return Productos.sort((a, b) => a.precio - b.precio);
}

console.log(productsInOrder(Productos))

// ejercicio 5

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


    const newArrayMixed = PersonasGrupo1.concat(PersonasGrupo2);
    

 
 console.log(newArrayMixed);