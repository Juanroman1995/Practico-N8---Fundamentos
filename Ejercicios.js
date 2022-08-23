//function invocarCallback(cb) {
    // Invoca al callback `cb`
    // Aqui tu codigo
//}
function saludo(usuario){
    return 'Hola!' + usuario
}
function saludar(usuario,callback){
    return callback(usuario)
}
console.log(saludar('Juan', saludo))


//function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    // Aqui tu codigo
//}  

function sumarArray(array){
    return array
}
function cb(array,cb){
    return cb(array)
}
//console.log (cb([1,2,3,4],sumarArray)) resultado esperado //[1,2,3,4]


//function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    // Aqui tu codigo
//}  
var array = [1,2,3,4,5,6,7]
function Array(element, index, array) {
    console.log(index + " ---> " + element);
}
array.forEach(Array);


function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // Aqui tu codigo
}  

