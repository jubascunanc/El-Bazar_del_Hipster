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

//Ingresa tu usuario//

let usuario= prompt("Ingresa tu Usuario")
console.log("usuario ingresado:"+usuario);

//alert
alert("usuario ingresado:"+usuario);


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
