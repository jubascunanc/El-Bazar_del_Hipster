/*consola codigo js*/
console.log ("Bienvenido a la compra rápida");
console.log ("Aquí puedes ordenar facilmente");

//Concatenacion
let nombre = prompt ("Dame tu nombre:");
let apellido = prompt("Dame tu apellido");
const ESPACIO=" ";
let nombreCompleto = (nombre + ESPACIO + apellido);
console.log ("Nombre completo:" +nombre +ESPACIO +apellido);

//Bienvenidos a la consola
console.log ("Bienvenidos a la consola");
console.log ("mi comida favorita es: Hamburguesa");

//Ingresa tu usuario//

let usuario= prompt("Ingresa tu Usuario")
console.log("usuario ingresado:"+usuario);

//alert
alert("usuario ingresado:"+usuario);

//Ingresa tu contraseña//
let claveUsuario= prompt("Ingresa tu clave del sitio, X para salir de la ventana");

if (claveUsuario= "123456"){
   localStorage.setItem("password", true);
   let psswUser=localStorage.getItem("password");
   console.log("Contraseña:" +psswUser);
}
while (claveUsuario !="123456"){
    localStorage.setItem("password", false);
    let psswUser=localStorage.getItem("password");
    console.log("Contraseña:" +psswUser);
    break;
}

claveUsuario= prompt("Ingresa tu clave del sitio, X para salir de la ventana");

//Verificación de edad legal//
const AnioActual=2022;
let AnioUsuario=parseInt(prompt("Ingresa tu año de nacimiento"));
let Edad = AnioActual-AnioUsuario

//Año legal para consumir alcohol//
if (Edad>=18 ){
    alert("Eres mayor de edad +18");
    console.log("Puedes comprar Alcohol");
}

//break point//
if (Edad< 18){
    alert("Eres menor de edad -18");
    console.log("NO Puedes comprar Alcohol");
    }
    

    class Checkout{
        constructor(nombre, precio, stock, unidades ) {
            this.nombre  = nombre.toLowerCase();
            this.precio  = parseFloat(precio);
            this.stock = stock;
            this.unidades = unidades;
        }
    }   

/*
//objeto
const miCarrito={
    nombre: ["Hamburguesa Hipster"],
    precio: ["4500"],
    stock: ["Si Hay stock"],
}


console.log(miCarrito);
console.log("Su selección es: " +miCarrito.nombre);

//objetos constructores

const checkout=["Sandwiches", "Pizzas", "Papas Fritas", "Ensalada", "Hamburguesa", "Cerveza", "Vino"];
console.log (checkout);

console.log ("El resumen de tu compra es:" +checkout[0,1,2,4]);

//recorrido del array
for (let i=0; i<Checkout.length;i++){
    console.log(checkout[i]);
}

//recorrido del array
const Totalprecios=[4500,2500,7000,10000];
let total=0;
function sumarTotal (precio){
    total +=precio;
}

function realizar (operacion,Totalprecios){
    for (total of Totalprecios){
        operacion(Totalprecios);
    }
}
realizar(sumarTotal,Totalprecios);
console.log("La suma de todos tus productos es: $" +Totalprecios);
console.table(Totalprecios);

*/

//Identificar usuario nuevo o Antiguo//

let entrada = prompt("¿Ya haz comprado antes con nosotros? presiona -Esc para salir");
while (entrada != "Esc"){
switch (entrada){
    case "Si":
        alert("que bueno verte devuelta");
        console.log("Hola Usuario Antiguo");
        break;
    case "No":
        alert("No te reconocemos...");
        console.log ("No haz, comprado aqui antes");
        break;
    default:
        alert ("¿necesitas ayuda?");
        console.log("Contacta a soporte");
        break;
    }

entrada = prompt("¿Ya haz comprado antes con nosotros? presiona -Esc para salir");
break;
}

//opciones de entrega
let entrega = prompt("Elija su opción de despacho aquí");

if(entrega== "delivery"){
    alert("Haz seleccionado la opción delivery");
    console.log("El usuario prefiere delivery");
}
if(entrega== "retiro"){
    alert("Haz seleccionado la opción retiro");
    console.log("El usuario prefiere retiro");
}

let texto="";
let palabra=prompt("Ingresa una dirección (s-para salir de la ventana)");
while(palabra!="s"){
    texto = texto + "" + palabra;
console.log("dirección de entrega: "+texto);
    palabra=prompt("ingresa una dirección (s-para salir de la ventana)");
}

