function deleteAbc(cadena){
 cadena = cadena.replace('a','');   
 cadena = cadena.replace('b','');
 cadena = cadena.replace('c','');
 return cadena;
}
console.log(deleteAbc('a este párrafo se le va a quitar las letras "a", "b" y "c"... abc'));