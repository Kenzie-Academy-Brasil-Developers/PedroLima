/*Adicione seu codigo abaixo */

const array = [1, 2, 3, 4, 5]

function callbackMap(element, index, array) {

    return `Número ${element} no index: ${index}, veio desse array: ${array}. E somando 10 o número fica ${element+10}.`;
  }
  
  function map(array, callback) {
  
    const newMap = []
  
    for(i in array){
  
      newMap.push(callback(array[i], i, array))
    }
    return newMap
  }
  
console.table(map(array, callbackMap));


function callbackFilter(element) {

    if (element % 2 == 0) {
  
      return true;
  
    } else {
  
      return false
    }
  }
  
  function filter(array, callback) {
  
    const newFilter = []
  
    for(i in array){
  
      newFilter.push(callback(array[i], i, array))
    }
    return newFilter
  }
  
  console.log(filter(array, callbackFilter));


function callbackFind(element) {

    if (element == 3) {
  
      return true;
    }
  }

  
function find(array) {

    for(i in array){

        console.log(array[i])

        result = callbackFind(array[i])

        if(result == true){

            return array[i]
        }
    }
}


function callbackReduce(acumulator, valorAtual) {

    return acumulator + valorAtual;
  
}


function reduce(array, callback, initialValue = 0) {

    let acumulador = 0

    acumulador += initialValue

    for(i in array){

        acumulador = callback(acumulador, array[i])
    }
    return acumulador
}


function includes(array, searchElement) {

    for(i in array){
  
      if(array[i] == searchElement){
  
        return true
      } 
  }}


function callbackFindIndex(element) {

    return element === 5 ? true : false;
}


function FindIndex(array, callback) {

    for(i in array){

        result = callback(array[i])

        if(result == true){

            return array[i]
        }
    }
}