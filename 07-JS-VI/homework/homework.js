// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  /*
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }
  return nombre.capitalize();
  */
  // OTRA MANERA, con un for
  var nombrenuevo = "";
  //console.log(nombre);
  for (var i = 0; i < nombre.length; i++) {
    //console.log(i);
    if (i === 0) {
      nombrenuevo = nombre[i].toUpperCase();
    } else {
      nombrenuevo = nombrenuevo + nombre[i];
    }
  }
  nombre = nombrenuevo;
  //console.log(nombre);
  return nombre;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  //console.log(cb());
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  //console.log(n1,n2);
  //console.log(cb(n1, n2));
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 /*
  var suma = 0;
  var sumaReduce = numeros.reduce(function(acumulador, elemento){
    return acumulador + elemento
  }, 0);
  cb(sumaReduce);
  */
 //otra manerda
 var resultadoSuma = 0;
 //console.log(numeros);
 for (var i = 0; i< numeros.length; i++){
  resultadoSuma = resultadoSuma  + numeros[i];
 }
 //console.log(resultadoSuma);
 cb(resultadoSuma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /*
  array.forEach(function(elemento) {
    cb(elemento);
  })
  */  
  // otra manera
  //console.log(array);
  for(var i = 0;i< array.length; i++){
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  /*
  var nuevoArray = array.map(function(x) {
    return cb(x);
  });
  return nuevoArray;
  */
 // OTRA MANERA
 //console.log(array);
 var nuevoArray = [];
 for (var i = 0; i < array.length; i++) {
  nuevoArray.push(cb(array[i]));
 }
 //console.log(nuevoArray);
 return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //console.log(array);
  var nuevoArray=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 'a') {
      nuevoArray.push(array[i]);
    }
  }
  //console.log(nuevoArray);
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
