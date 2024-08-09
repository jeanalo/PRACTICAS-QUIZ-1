// EJERCICIO 1 LIBROS
const libross = [
    {libro:'La odisea', autor:'Everardo', año:2015, paginas: 4000},  
    {libro:'El psico', autor: 'Cohelo', año:2020, paginas: 500},
    {libro:'Once Minutos', autor: 'Gabo', año:1999, paginas: 150},
    {libro:'El poder de la Kabbalah', autor: 'Eglecto versa', año:1998, paginas: 350},
    {libro:'Deja de ser tu', autor: 'John vita', año:2016, paginas: 300},  
 ]


 const añoYPaginas = (libross) => {
    let newBooks = []
    libross.forEach(element => {
        if (element.año > 2000 && element.paginas > 300) {
            newBooks.push(element)
        }
    });
    return newBooks
 }
 console.log(añoYPaginas(libross))

//  EJERCICIO 2

const Tareillas = [
    {id:1, description:'Lavar platos', estado:'pendiente'},  
    {id:2, description: 'Ir al gym', estado:'completada'},
    {id:3, description: 'Lavar carro', estado:'completada'},
    {id:4, description: 'Mercar', estado:'completada'},
    {id:5, description: 'Sacar los perros', estado:'pendiente'},  
 ]

 const changeToCompleted = (Tareillas) => {
    let NewArray = [];
    Tareillas.forEach(loop => {
        if (loop.id % 2 !== 0) {
            loop.estado = 'completada'
        }
        NewArray.push(loop)
        
    })
    return NewArray
 }
 console.log(changeToCompleted(Tareillas))

//  EJERCICIO 3

const theProducts = [
    {nombre: "carne", precio: 50},
    {nombre: "pera", precio: 15},
    {nombre: "silla", precio: 20},
    {nombre: "jabon", precio :60},
    {nombre: "arroz", precio: 70},
    {nombre: "fideos", precio: 80}
]

const maxPrice = (theProducts) =>{
    let productoMasCaro = theProducts[0]
    theProducts.forEach( product => {
        if (product.precio > productoMasCaro.precio){
            productoMasCaro = product
        };
    });
  return productoMasCaro

}

const finalProduct = maxPrice(theProducts)
console.log (finalProduct)

// EJERCICIO 4

const studentsAndGrades = [
{estudiante: "Mariana Pajon", nota:5},
{estudiante: "Goku", nota: 3},
{estudiante: "Vegeta", nota: 5},
{estudiantes: "Alonza", nota: 2},
]

const mediaDeNotas = (studentsAndGrades) => {
    let tareasFinales = 0;
    studentsAndGrades.forEach(elementico => {
        tareasFinales += elementico.nota
    });

    return tareasFinales / studentsAndGrades.length
}
console.log(mediaDeNotas(studentsAndGrades))

// EJERCICIO 6
const frutikas = ['Manzana', 'Pera', 'Sandia', 'Mango', 'Fresa'];

const contarFrutas = (frutikas) => {
    let contador = {}; 

    frutikas.forEach(fruta => {
        if (contador[fruta]) {
            // Si la fruta ya existe en el objeto, incrementa su valor
            contador[fruta]++;
        } else {
            // Si la fruta no existe en el objeto, la inicializa en 1
            contador[fruta] = 1;
        }
    });

    return contador; // Retorna el objeto con el conteo de frutas
}

console.log(contarFrutas(frutikas));  // Imprime el conteo de las frutas

// EJERCICIO 7

const transacciones = [
    { categoria: "Alimentos", monto: 100 },
    { categoria: "Transporte", monto: 50 },
    { categoria: "Alimentos", monto: 200 },
    { categoria: "Entretenimiento", monto: 150 },
    { categoria: "Transporte", monto: 75 }
];

const calcularMontoTotalPorCategoria = (transacciones) => {
    let montosPorCategoria = {}; // Objeto para almacenar los totales por categoría

    transacciones.forEach(transaccion => {
        let categoria = transaccion.categoria;
        let monto = transaccion.monto;

        // Si la categoría ya existe en el objeto, suma el monto; si no, inicialízalo
        if (montosPorCategoria[categoria]) {
            montosPorCategoria[categoria] += monto;
        } else {
            montosPorCategoria[categoria] = monto;
        }
    });

    return montosPorCategoria;
}

console.log(calcularMontoTotalPorCategoria(transacciones));  


