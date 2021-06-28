// function deleteAbc(cadena){
//     //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
//     //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
//     //Escribe tu código aquí
//     var modificada = '';
//     for (var i = 0; i < cadena.length; i++){
//       if (cadena[i]!='a' && cadena[i]!='b' && cadena[i]!='c') {
//         modificada = modificada + cadena[i];
//       }
//     }
//     return modificada;
//   }
// console.log(deleteAbc('a este párrafo se va a a quitar las letras "a", "b" y "c". Funciona mejor que la rutina que hicieron en el video?!'))  

// function asAmirror(str) {
//     //La función recibe una frase. 
//     //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
//     //pero con cada una de sus palabras invertidas, como si fuera un espejo.
//     //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
//     //Escribe tu código aquí
//     var palabra = '';
//     var temporal = '';
//     for (var i = 0; i < str.length; i++) {
//       if (str[i]===' ') {
//         if (palabra ==='') {
//           palabra = palabra  + temporal;
//         }
//         else {
//           palabra = palabra + ' ' + temporal;
//         }
        
//         temporal = '';
//       }
//       else {
//         temporal = str[i] + temporal;
//       }
//     }
//     if (temporal != '') {
//       palabra = palabra + ' ' + temporal;
//     }
//     return palabra;
//   } 
  

  // console.log(asAmirror("The Henry Challenge is close!"));
  // console.log(asAmirror("I love you so much!"));
  // console.log(asAmirror("Newell's Old Boys"));
//  console.log(asAmirror("s'lleweN dlO syoB nóepmac"));

//   function dividirCadena(cadenaADividir,separador) {
//     var arrayDeCadenas = cadenaADividir.split(separador);
//     // document.write('<p>La cadena original es: "' + cadenaADividir + '"');
//     // document.write('<br>El separador es: "' + separador + '"');
//     // document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
//     for (var i=0; i < arrayDeCadenas.length; i++) {
//        console.log(arrayDeCadenas[i] + " ");
//     }
//  }
// var cadena = "'Oh brave new world that has such people in it eee.'";   
// console.log(dividirCadena(cadena,' '));
// function asMirror(str) {
//     var resultado = [];
//     var array = str.split(" ");
//     for (var i = 0; i < array.lenght; i++) {
//         var newArray = array[i].split("");
//         newArray = newArray.reverse();
//         resultado.push(newArray.join(""));
//     }
//     // return resultado.join(" ");
//     return resultado;
// }

// console.log(asMirror("The Henry Challenge is close!"));


// function capicua(numero){
//     //Escribe una función, la cual recibe un número y determina si es o no capicúa.
//     //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
//     //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
//     //Escribe tu código aquí
//     var derecha = '';
//     var izquierda = '';
  
//     var cadena = numero.toString();
  
//     for (var i = 0; i < cadena.length; i++) {
//       derecha = derecha + cadena[i];
//       izquierda = cadena[i] + izquierda;
//     }
//     if (derecha === izquierda) {
//       return "Es capicua";
//     } else {
//     return "No es capicua";
//     }
//   }
// console.log(capicua(800108))  

// function capicua(numero){
//     var numeroString = numero + "";
//     var numeroSplit = numeroString.split("");
//     var numeroSplitReverse = numeroSplit.reverse()

//     if (numeroString === numeroSplitReverse.join("")) {
//         return "Es capicua";
//     } else {
//         return "No es capicua";
//     }
// }
// console.log(capicua(454))  

// function asAmirror(str) {
//     //La función recibe una frase. 
//     //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
//     //pero con cada una de sus palabras invertidas, como si fuera un espejo.
//     //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
//     //Escribe tu código aquí
//     var palabra = '';
//     var temporal = '';
//     for (var i = 0; i < str.length; i++) {
//       if (str[i]===' ') {
//         if (palabra ==='') {
//           palabra = palabra  + temporal;
//         }
//         else {
//           palabra = palabra + ' ' + temporal;
//         }
        
//         temporal = '';
//       }
//       else {
//         temporal = str[i] + temporal;
//       }
//     }
//     if (temporal != '') {
//       palabra = palabra + ' ' + temporal;
//     }
//     return palabra;
//   } 
// console.log(asAmirror("111"));
// function capicua(numero){
//     //Escribe una función, la cual recibe un número y determina si es o no capicúa.
//     //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
//     //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
//     //Escribe tu código aquí
//     var cadena = numero.toString();
// console.log (asAmirror(cadena.toString()));
// console.log (cadena);
// console.log((cadena === asAmirror(cadena)))
//     if (cadena == asAmirror(cadena)){
//       return "Es capicua";
//     } else {
//         return "No es capicua";
//     }
//   }
// console.log(capicua(111))  

console.log(Math.pow(2,3) + 4);

var contador = 1;
console.log(contador++);
console.log(++contador);
console.log(contador *= 3);

// Inmediately Invoked Function Expression
(function () {
    console.log('IIFE');
    }) ();