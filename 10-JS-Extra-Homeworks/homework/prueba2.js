// No cambies los nombres de las funciones.
var Objeto = { x: 1, y: 2, z: 'Juanjo' };
function deObjetoAmatriz(objeto){
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    var arreglo = [];
    for (clave in objeto) {
        arreglo.push([clave,objeto[clave]]);
    }
    return arreglo;
  }
//  console.log(deObjetoAmatriz(Objeto));
// [ [ 'x', 1 ], [ 'y', 2 ], [ 'z', 'Juanjo' ] ]  
var str = "adsjfdsfsfjsdjfhacabcsbajda";
  function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    var Objeto = {};
    for (i = 0; i < string.length; i++) {
        if (! Objeto[str[i]] ) {
            Objeto[str[i]] = 0; // inicializar cada contador de letras
        }
        Objeto[str[i]] ++; // sumar cada vez que aparece la letra
    }
    return Objeto;
  }
  // console.log(numberOfCharacters(str));
  
  
  function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
   var may = '';
   var min = '';
   for (var i = 0; i < s.length; i++) {
    //console.log(s[i]);
    /*
    console.log(may);
    console.log(min); 
    */
    //console.log(s[i].toUpperCase());
    if (s[i].toUpperCase() === s[i]) {
        may = may + s[i];
        } else {
        min = min + s[i];
        }
    }
    s= may+min;
    return s;
}
//console.log(capToFront('soyHENRY'));
var s = 'The Henry Challenge is close!';
//var s = 'Juan José Scialfa pasó el Challenge!';
function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var palabra = '';
    var tmp = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] === ' '){
            palabra = palabra + str[i] + tmp;
            tmp = '';
        } else {
            tmp = str[i] + tmp;
        }
    }
    palabra = palabra + ' ' + tmp;
    return palabra;
  } 
  //console.log(asAmirror(s));
  var num = 1221;
  var num = 1222;
  var num = 1975;
  var num = 33223322331;
  function capicua(numero){
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    var texto = numero.toString();
    var capi = '';
    for (i = 0; i < texto.length; i++) {
        capi = texto[i]+capi;
    }
    console.log(capi, texto);
    if (capi === texto) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }
  }
  //console.log(capicua(num));
  
  //var texto = "abecedario";
  //var texto = 'Define una función que elimine las letras "a", "b" y "c" de la cadena dada';
  function deleteAbc(cadena){
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    var salida = '';
    for (i = 0; i < cadena.length; i++) {
        if (!(cadena[i] ==="a" || cadena[i] ==="b"|| cadena[i] ==="c")) {
            salida = salida + cadena[i];
        }
    }
    return salida;
  }
  //console.log(deleteAbc(texto));
  var matriz = ["Yo00u", "are", "beautiful", "looking"] ;
  function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    /*
    Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:

    Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
    Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
    Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
    compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
    */    
    var arreglo = arr.sort(function(a, b) {
      return a.length - b.length;
    });    
    return arreglo;
  }
  //console.log(sortArray(matriz));
  var arr1 = [4,2,3,5,7,8];
  var arr2 = [1,3,4,7];
  function buscoInterseccion(arreglo1, arreglo2){
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    var arreglo3 = []
    for (i = 0; i < arreglo1.length; i++) {
        for (j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j]) {
                arreglo3.push(arreglo1[i]);
            }
        }
    }
    return arreglo3;
  }
// console.log(buscoInterseccion(arr1,arr2));

// Concepto de FOR IN
const object = { a: 1, b: 2, c: 3 , nombre: 'Juan José', apellido: 'Scialfa'};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
  // No modificar nada debajo de esta línea
  // --------------------------------
  