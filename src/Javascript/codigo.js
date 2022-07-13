//declaracion de variables
let PizzaFavorita;
//inicializacion de la variable
PizzaFavorita="Italiana";
//declaracion e inicializacion de variables
let cantidadTitulos=15;

//declaracion e inicializacion de constantes
const PI=3.1416;

//Operaciones matematicas
let edad=56;
let edad2=23;

let sumaEdades = edad + edad2; //79
let restaEdades = edad - edad2; //33
let multiplicacion = edad2 * 2; //46
let division = edad / 2; //28

//Concatenacion
let nombre = "Pepe";
let apellido = "Gomez";
const ESPACIO=" ";
let nombreCompleto = (nombre + ESPACIO + apellido); //Pepe Gomez

let textoNumero = nombre + edad; //Pepe56 es un String

//consola
console.log ("Bienvenidos a la consola");
console.log ("mi comida favorita es: Hamburguesa");

//promt

let usuario= prompt("Ingresa tu Usuario")
console.log("usuario ingresado:"+usuario);

//alert
alert("usuario ingresado:"+usuario);

//declaración
console.log ("Elige el Menú");
console.log("Elijo: el Menú Familiar");

let unNumero= 18

if ("edad mayor +18 años"){
    console.log("eres mayor de edad puedes entrar");
}

if("edad menor -18 años"){
    console.log("eres menor de edad NO puedes entrar");
}

let Alcohol=prompt("Ingresa que Alcohol deseas comprar");

if (Alcohol== "Cerveza"){
    alert ("haz seleccionado la opción: Cerveza");
}

else if (Alcohol== "Vino"){
    alert ("haz seleccionado la opción Vino");
}

const AnioActual=2022;

let AnioUsuario=parseInt(prompt("Ingresa tu año de nacimiento"));
let Edad=AnioActual-AnioUsuario;
if (Edad>=18)
if ("es Mayor de Edad"){
console.log ("puedes ingresar al sitio");
}else  {
    console.log ("No puedes ingresar al sitio");
}

let nombreIngresado =prompt("ingresar nombre");

