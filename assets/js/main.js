// Métodos de Array!!!!!

// Funciones que contienen todos los arrays para realizar tareas especificas!

/*
los métodos mutables -> Mutan o modifican el arreglo original sobre el que se ejecutan


los métodos no mutables -> Devuelven un array nuevo con el resultado de la función sin modificar
                            el arreglo original
*/


// Mutables

// .push() -> Agrega un elemento al final del arreglo

const frutas = ['manzana', 'durazno', 'pera', 'naranja']

frutas.push('uvas', 'granada', 'sandia')

console.log(frutas)

// .pop() -> Elimina el último elemento de un arreglo

frutas.pop()

console.log(frutas)

//shift() -> Elimina el primer elemento de un arreglo

frutas.shift()

console.log(frutas)

//unshift() -> Agrega un elemento al inicio del arreglo

frutas.unshift('melón', 'chirimoya')

console.log(frutas)

// .splice() -> Elimina, agrega o reemplaza en cualquier posición que indiquemos

const personas = ['juanito', 'ana', 'pedro', 'lucho']

//Eliminar a pedro
personas.splice(2, 1)
console.log(personas)

//Agregar a Alguien entre Juanito y Ana
personas.splice(1,0, 'jeremias')

console.log(personas)

// .sort()⭐ ordena un arreglo

personas.sort()
console.log(personas)

const numeros = [20, 100, 47, 56, 22, 302]

numeros.sort((a, b) => b - a)

console.log(numeros)

// .reverse() invierte el orden de un arreglo

const numeros2 = [10, 20, 30, 302, 40, 50 ]

numeros2.reverse()

console.log(numeros2)


// No Mutables -> Crean un nuevo arreglo


// .filter() ⭐-> Filtra datos de un arreglo en base a una condición que se dbe cumplir
const usuarios = [
    { nombre: 'Ana', isActive: true},
    {nombre: 'Juanito', isActive: false},
    {nombre: 'Lucho', isActive: true},
    {nombre: 'Diego', isActive: false}
]

const usuariosActivos = usuarios.filter((usuario) => usuario.isActive /*condición*/)
const usuariosInactivos = usuarios.filter((usuario) => !usuario.isActive)

console.log(usuariosActivos)
console.log(usuariosInactivos)
console.log(usuarios)

// .find() ⭐ -> Devuelve el PRIMER elemento que coincida con una condición

const firstActive = usuarios.find(usuario => usuario.isActive)

console.log(firstActive)

// findIndex() -> devuelve la posición de la primera coincidencia que encuentre

const indexFirstFalse = usuarios.findIndex(usuario => !usuario.isActive)

console.log(indexFirstFalse)

// indexOf() -> Devuelve la posición de un valor especifico
const indexUva = frutas.indexOf('uvas')
console.log(indexUva)

//map() 🌟 -> Transforma los elementos de un arreglo y los devuelve en un nuevo arreglo

const precios = [1000, 2000, 3000, 4000]

const formatCurrency = (numero) => {
    return new Intl.NumberFormat('es-CL', {
        currency: 'CLP',
        style: 'currency'

    }).format(numero)
}

const preciosConIVA = precios.map((precio) => {
    const precioIVA = precio * 1.19
    const precioFormateado = formatCurrency(precioIVA)
    return precioFormateado
})

console.log(preciosConIVA)
console.log(precios)

// reduce() ⭐👾 -> Reduce todos los valores del arreglo a un único valor

const compras = [
    { producto: 'notebook', precio: 800000 },
    { producto: 'teclado', precio: 79990 },
    { producto: 'RAM 16gb', precio: 160000 },
    { producto: 'mouse', precio: 40000 }
]

const totalCompra = compras.reduce((acumulador, compra) => {
    // El acumulador almacena el valor total de cada iteración
    console.log('Acumulador Reduce', acumulador)
    return acumulador + compra.precio
}, 0)

console.log(totalCompra)

// slice() -> Copiar una parte del arreglo original devolviendo la copia en un nuevo arreglo
// Muy útil para hacer paginación

const letras = ['A', 'B', 'C', 'D', 'E', 'F']

const paginaLetra = letras.slice(1, 4)

console.log(paginaLetra)

// .concar() -> Unir dos arrays en un nuevo arreglo

const frontend = ['react', 'angular', 'vue']
const backend = ['express', 'nest', 'psql']

const fullstack = frontend.concat(backend)

console.log(fullstack)

// .includes() -> verifica la existencia de un dato o algún patrón dentro del arreglo. Siempre devuelve un booleano

const permisos = ['admin', 'lector', 'editor', 'superadmin']

if(permisos.includes('admin')) {
    console.log('Permisos de administrador concedidos')
}

// .some() -> Verifica que al menos un dato dentro del string cumple una condición. Devuelve un booleano

const calificaciones = [7.0, 6.5, 4.0, 3.5, 2.5, 2.6, 5.5]

const existeReprobado = calificaciones.some(nota => nota < 4.0)

console.log(existeReprobado)

// .every() -> Verifica que todos los elementos de un Array cumplan una condición -> devuelve un booleano

const edades = [17, 22, 25, 32, 45]

const todosSonAdultos = edades.every(edad => edad >= 18)

console.log(todosSonAdultos)

// join() => convierte un array de string en un único string

const palabras = ['hola', 'como', 'están', '?']

const saludo = palabras.join(' ')

console.log(saludo)

// forEach() ⭐ -> ejecuta una función sobre cada elemento del arreglo. Sin embargo!
            //      a DIFERENCIA DE MAP NO RETORNA NADA, solo ejecuta la función pero no devuelve valores


const productos2 = [ 'teclado', 'notebook', 'mouse',];

productos2.forEach(producto => {
    producto = 'unicornio'
    console.log(producto)
})

// Muy útil para renderizar en pantalla de forma dinámica


// .toSorted() ⭐ => Que hace lo mismo que sort, peeero: devuelve un array nuevo, sin alterar el original

const productosOrdenados = productos2.toSorted()

console.log(productos2)
console.log(productosOrdenados)

// toReversed() => hace lo mismo que reverse, pero, devuelve un array nuevo sin alterar el original

const productosReverse = productos2.toReversed()

console.log(productos2)
console.log(productosReverse)