/*
López Pérez Juan Alberto    ID:4860
Exercise 2 - Loop Control and Conditions
*/

let array = []
let i = 0

while(i<20){
  array.push(i+1)
  i++
}
console.log(array)

//-.Utilizando el codigo para el array del ejercicio anterior, usare un loop for para imprimir los numeros del array.
for(let j = 0; j < array.length ; j++){
//-.Luego usare una condicion "if" para imprimir solo los numeros impares del array.
    if(array[j] % 2 != 0){
        console.log(array[j])
    }
//-.Y al final usare otra condicion "if" para que cuando llegue al numero 10, se detenga el loop.    
    if(array[j] == 10){
        break
    }
}