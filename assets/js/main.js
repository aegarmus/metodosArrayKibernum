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