// function crearGato(nombre, edad) {
//     // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
//     // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
//     // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
//     // Devuelve el objeto
//     // Tu código:
//     var Objeto = {
//       nombre: nombre,
//       edad: edad,
//       meow: function(){
//         return 'Meow!';
//       }
//     }
//     console.log(Objeto);
//     return Objeto;
//   }

//   console.log(crearGato("Juan",46));

// var persona = {
//     nombre: 'Juan José',
//     saludar: function() {
//       console.log('Hola, ' + this.nombre);
//     }
//   };
  
//   //console.log(persona);
//   console.log(persona.saludar());



// function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
//     // Multiplica el numeroMisterioso por 5 y devuelve el producto
//     // Tu código:
//     var numero = objetoMisterioso['numeroMisterioso'] * 5;
//     return numero;
//   }
//   console.log(multiplicarNumeroDesconocidoPorCinco(999));


// var Users =     [
//     { esPremium: false },
//     { esPremium: false },
//     { esPremium: false },
//     { esPremium: false },
//     { esPremium: false }
//   ];
// function pasarUsuarioAPremium(usuarios) {
//     // "usuarios" es un array de objetos "usuario"
//     // Cada objeto "usuario" tiene la propiedad "esPremium"
//     // Define cada propiedad "esPremium" de cada objeto como "true"
//     // Devuelve el array de usuarios
//     // Tu código:
//     for (i=0; i < usuarios.lenght; i++) {
//         //if (usuarios[i]="esPremium") {
//             usuarios[i].esPremium=true;
//         //}
//     }
//     //console.log(usuarios);    
//     return usuarios;
// }
// console.log(pasarUsuarioAPremium(Users));



// function sumarLikesDeUsuario(usuario) {
//     // "usuario" tiene una propiedad llamada "posts" que es un array
//     // "posts" es un array de objetos "post"
//     // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
//     // Suma todos los likes de todos los objetos "post"
//     // Devuelve la suma
//     // Tu código:
//     var suma = 0;
//     //console.log(usuario.posts.length);
//     for (i=0; i < usuario.posts.length; i++){
//         if (usuario.posts){
//             console.log(usuario.posts[i]);
//             suma = suma + usuario.posts[i].likes;
//         }
//     }
    
//     return suma;
// }
// var persona = {
//     usernombre: 'Jhon Doe',
//     password: 'JavaScript es genial!',
//     posts: [
//       { id: '1', title: 'Aventuras en JS!', likes: 10 },
//       { id: '2', title: 'Soy Henry!', likes: 100 },
//       { id: '3', title: 'Qué es un JavaScript?', likes: 35 },
//       { id: '4', title: 'JS Objects for Dummies', likes: 42 },
//       { id: '5', title: 'Educación online', likes: 99 }
//     ]
//   };
//console.log(persona.posts.length);
//console.log(sumarLikesDeUsuario(persona));

var articulo =  {
    precio: 80,
    porcentajeDeDescuento: 0.1,
    calcularPrecioDescuento: [Function ()]
  };
  

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    producto.calcularPrecioDescuento = function() {
        var descuento = 0;
        descuento = this.precio * this.porcentajeDeDescuento;
        console.log(this.precio - descuento);
        return this.precio - descuento;
    }
    producto.calcularPrecioDescuento();
    console.log(producto.precio);
    return producto;
 }
 console.log(agregarMetodoCalculoDescuento(articulo));
             
 //console.log(articulo.calcularPrecioDescuento);