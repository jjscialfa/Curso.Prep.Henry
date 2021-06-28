// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //console.log(array.length - 1);
  //console.log(array);
  //console.log(array[array.length - 1]);
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoarray = [];
  //console.log(array);
  for (var i = 0; i < array.length; i++) {
     nuevoarray[i] = array[i]+1;
  }
  // console.log(nuevoarray);
  return nuevoarray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  //console.log(array);
  array.push(elemento);
  return array;
  //console.log(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  // console.log(array);
  // console.log(elemento);
  array.unshift(elemento);
  return array;  
  // console.log(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //var cadena = "";
  var cadena = palabras[0];
  // console.log(palabras);
  //for (var i=0;i<palabras.length;i++)
  //for (var i=1;i<palabras.length;i++)
    // if (i == 0)
    //   cadena = palabras[i];
    // else 
    //   cadena = cadena + ' ' + palabras[i];
    cadena = palabras.join(' ');
    //console.log(cadena);
    return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0;i<array.length;i++) {
    if (array[i] == elemento) // usa == y no === porque puede venir un número o un string (0 = '0')
      return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var num = 0;
  // console.log(numeros);
  for (var i = 0;i<numeros.length;i++) {
    num = num + numeros[i];
  }
  // console.log(num);
  return num;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // console.log(resultadosTest);
  var num = 0;
  var len = 0;
  len = resultadosTest.length;
  for (var i = 0;i<len;i++) {
    num = num + resultadosTest[i];
  }
  num = num / len;
  // console.log(num);
  return num;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // console.log(numeros);
  var mayor = numeros[0];
  for (var i = 0;i<numeros.length;i++) {
    if (numeros[i] > mayor)
      mayor = numeros[i];
  }
  // console.log(mayor);
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // console.log(arguments);
  var elementos = 0;
  var producto = 1;
  elementos = arguments.length;
  if (elementos==0)
    return 0;
  for (var i = 0;i<elementos;i++){
    producto = producto * arguments[i];
  }
  // console.log(producto);
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  for (var i = 0;i < arreglo.length;i++){
    if (arreglo[i] > 18)
    cont = cont + 1;
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //console.log(numeroDeDia);
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ((numeroDeDia === 1) || (numeroDeDia === 7))
    return "Es fin de semana";
  else
    return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let a = n.toString()
  if (a[0]==9)
    return true;
  else  
    return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var elemento = 0;
  for (var i = 0;i < arreglo.length;i++){
    elemento = arreglo[0];
    if (!(elemento == arreglo[i]))
      return false;
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // console.log(array);
  var arreglo = [];
  for (var i = 0;i < array.length;i++){
    if (array[i]=="Enero" || array[i]=="Marzo" || array[i]=="Noviembre")
      arreglo.push(array[i]);
  }
  // console.log(arreglo);
  // console.log(arreglo.length);
  if (arreglo.length<3)
    return  "No se encontraron los meses pedidos";
  return arreglo;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  //console.log(array);
  var arreglo = [];
  for (var i = 0;i < array.length;i++){
    if (array[i]>100)
      arreglo.push(array[i]);
  }
  // console.log(arreglo);
  return arreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  //console.log(numero);
  var suma = numero;
  var arreglo = [];

  for (var i = 0;i<10;i++){
    suma = suma + 2;
    
    if (suma === i)    {
      break;
    }
    else {
      arreglo.push(suma);
    }
  }
  //console.log(i);
  //console.log(arreglo);
  if (i < 10)
    return "Se interrumpió la ejecución";
  else
    return arreglo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // console.log(numero);

  var suma = numero;
  var arreglo = [];
  
  for (var i = 0;i<10;i++){
    if (i === 5)
      continue;
    else {
      suma = suma + 2;
      arreglo.push(suma);
    }
  }
  //console.log(i,suma);
  //console.log(arreglo);
  return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
