
// function crearUsuario() {
//     // Crea una Clase de ES6 o una función constructor llamada "Usuario"
//     // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
//     // En el `contructor`, define el usuario, el nombre, el email y la contraseña
//     // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
//     // {{nombre}} debe ser el nombre definido en cada instancia
//     // Devuelve la clase
//     // Tu código:
//       class Usuario {
//         constructor(opciones) {
//         this.usuario = opciones.usuario;
//         this.nombre = opciones.nombre;
//         this.email = opciones.email;
//         this.password = opciones.password;
//         }  
//       }
      
//       Usuario.prototype.saludar = function() {
//         return 'Hola, mi nombre es ' + this.nombre;
//       };    
  
//     return Usuario;
  
//   }

//   var opciones = {
//     usuario : "jjscialfa",
//     nombre : "Juan Jose Scialfa",
//     email : "jjscialfa@gmail.com",
//     password: "juanjo"
// }

  
// console.log(crearUsuario(opciones));

// function agregarMetodoPrototype(Constructor) {
//     // Agrega un método al Constructor del `prototype`
//     // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
//     // Tu código:
//     Constructor.prototype.saludar = function() {
//       return 'Hello World!';
//     };    
  
//   }
  
  //console.log(agregarMetodoPrototype());


  // function agregarStringInvertida() {
  //   // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  //   // El método debe llamarse "reverse"
  //   // Ej: 'menem'.reverse() => menem
  //   // 'toni'.reverse() => 'inot'
  //   // Pista: Necesitarás usar "this" dentro de "reverse"
  //   String.prototype.reverse = function() {
  //     var str = '';
  //     for (var i = this.length; i >= 0; i--) {
  //       str = str + this.charAt(i);
  //     }
  //     return str;
  //   };
  // }
  // function Opciones (usuario,nombre,email,password) {
  //   this.usuario = usuario || 'user';
  //   this.nombre = nombre || 'name';
  //   this.email = email || 'email';
  //   this.password = password || 'password';
  // }
  // //var opciones = new Opciones('jjscialfa','Juan José Scialfa','jjscialfa@gmail.com','jj2021') ;
  // var opciones = new Opciones() ;
  // //console.log(opciones);
  // function crearUsuario(opciones) {
  //   // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  //   // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  //   // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  //   // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  //   // {{nombre}} debe ser el nombre definido en cada instancia
  //   // Devuelve la clase
  //   // Tu código:
  //   class Usuario {
  //     constructor(opciones) {
  //       this.usuario = opciones.usuario;
  //       this.nombre = opciones.nombre;
  //       this.email = opciones.email;
  //       this.password = opciones.password;
  //     }
  //   }
  //   Usuario.prototype.saludar = function  () {
  //       return 'Hola, mi nombre es ' + this.nombre;
  //   };
  //   Usuario.prototype.identificar = function  () {
  //     return 'Hola, mi usuario es ' + this.usuario;
  //   };
  //   var pepe = new Usuario(opciones);
  //   console.log(pepe.saludar());
  //   console.log(pepe.identificar());
  //   return Usuario;
  // }
  
  

  // console.log(crearUsuario(opciones));
/*
  function Persona(edad) {
    this.edad = edad;
  }
  Persona.prototype.getEdad = function() {
    return 'tiene ' + this.edad + ' años!';
  }
   var obj = new Persona(46);
  // var obj2 = new Persona(22);
  // var edad = 22;
  // //console.log(obj.getEdad(),obj2.getEdad());
   console.log(obj.__proto__); //{ getEdad: [Function (anonymous)] }
   */
/*
  var person = {
    nombre: 'Defecto',
    apellido: 'Apellido'
  };
  var toni = Object.create(person);
  console.log('variable toni: ',toni);
  console.log('prototipo de toni: ',toni.__proto__);
  */
  
/*
  function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      // First define a string, and make it equal to the part of
      // the bio that we know will always be the same.
      var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
      // define a variable that will contain the pronoun part of
      // the second sentence
      var pronoun;

      // check what the value of gender is, and set pronoun
      // to an appropriate value in each case
      if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
      } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
      } else {
        pronoun = 'They like ';
      }

      // add the pronoun string on to the end of the main string
      string += pronoun;

      // use another conditional to structure the last part of the
      // second sentence depending on whether the number of interests
      // is 1, 2, or 3
      if(this.interests.length === 1) {
        string += this.interests[0] + '.';
      } else if(this.interests.length === 2) {
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
      } else {
        // if there are more than 2 interests, we loop through them
        // all, adding each one to the main string followed by a comma,
        // except for the last one, which needs an and & a full stop
        for(var i = 0; i < this.interests.length; i++) {
          if(i === this.interests.length - 1) {
            string += 'and ' + this.interests[i] + '.';
          } else {
            string += this.interests[i] + ', ';
          }
        }
      }

      // finally, with the string built, we alert() it
      alert(string);
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  };

   let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']); 
  // var person1 = new Person('Bob', 'Smith', 32, 'hombre', ['music', 'skiing']);
  console.log(person1);
  console.log(person1.__proto__);
  console.log(person1.__proto__.__proto__);
  */

  /* ES6 ECMAScript 6 o ECMAScript2015 */
 class Persona {
   constructor(nombre,apellido) {
     this.nombre = nombre;
     this.apellido = apellido;
   }
   getNombre() {
     return this.nombre
   }
   saludar() {
    return 'Hola ' + this.nombre;
  }
 }
//  var juanjo = new Persona('Juan José','Scialfa');//  console.log(juanjo);//  console.log(juanjo.__proto__);//  console.log(juanjo.getNombre());//  console.log(juanjo.saludar());
/* ES6 ECMAScript 6 o ECMAScript2015 */
 class Empleado extends Persona{
   constructor (nombre, apellido, empleo, sueldo) {
    super(nombre, apellido);
    this.empleo = empleo;
    this.sueldo = sueldo;
   }
 }
/* ES6 ECMAScript 6 o ECMAScript2015 */
 var juanjo = new Empleado('Juan José','Scialfa','Developer','900');

 juanjo.saludar();
 //"juanjo" es un objeto, no tiene método "saludar()"", JS busca en su prototipo que es "empleado", "empleado" no tiene método "saludar" entonces JS busca en el prototipo
 //de "empleado" que es "persona" que si tiene el método "saludar()"
 console.log(juanjo);
 console.log(juanjo.saludar());
 console.log(Empleado.__proto__);