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
let password;
for (let i=1; i<=3;i++){
password=prompt("ingresa tu contraseña");

if (password= "12345"){
    alert("contraseña correcta");
    console.log("Bienvenido Usuario");
break;
}else{
    password!="123456";
    console.log("clave erronea, restan 3" + (3-i) + "intentos");
}
}

//Verificación de edad legal//
const AnioActual=2022;
let AnioUsuario=parseInt(prompt("Ingresa tu año de nacimiento"));
let Edad = AnioActual-AnioUsuario

//Año legal para consumir alcohol//
if (Edad>=18 ){
    alert("Eres mayor de edad");
    console.log("Puedes comprar Alcohol");
}

let Alcohol=prompt("Ingresa que Alcohol deseas comprar");

if (Alcohol== "Cerveza"){
    alert("haz seleccionado la opción: Cerveza");
    console.log("El usuario ha seleccionado la opción cerveza");
}

else if (Alcohol== "Vino"){
    alert ("haz seleccionado la opción Vino");
}

else if (Alcohol== "Ron"){
    alert("haz seleccionado la opción Ron");
}

else if (Alcohol== "cocktail"){
    alert("haz seleccionado la opción Cocktail");
}


//break point//
if (Edad< 18){
alert("Eres menor de edad :(");
console.log("NO Puedes comprar Alcohol");
}

//carrito de compras//

let articulo= prompt ("ingresa los articulos que querés agregar a tu carrito: -EXIT para salir \n Hamburguesa \n Sandwiches \n Pizzas \n Ensalada \n Alcohol");
let precio= 0;
let precioConIva= 1.19;

function calcular (){

while (articulo!="EXIT"){
    switch (articulo){
    case "Hamburguesa":
        precio= precio + 4500;
        console.log ("El valor de Hamburguesa es: $4.500 pesos");
        console.log ("El articulo esta disponible para la Venta \n Hay stock");
        break;

    case "Sandwiches":
        precio= precio + 2500;
        console.log("El valor de Sandwiches es: $2.500 pesos");
        console.log("El articulo esta disponible para la Venta \n Hay Stock");
        break;

    case "Pizzas":
        precio= precio + 7000;
        console.log("El valor de Pizzas es: $7.000 pesos");
        console.log("Este articulo se encuentra en Venta \n Hay stock");
        break;

    case "Ensalada":
        console.log ("El articulo no se encuentra en Venta \n NO hay Stock");
        break;

    case "Alcohol":
        precio= precio + 10000;
        console.log("El valor de Alcohol es: $10.000 pesos")
        console.log("El articulo se encuentra en Venta \n Hay stock");
        break;

    default:
        console.log("Este articulo no se encuentra disponible");
        break;
    }
articulo= prompt("ingresa los articulos que querés agregar a tu carrito: -EXIT para salir \n Hamburguesa \n Sandwiches \n Pizzas \n Ensalada \n Alcohol");
}
let precioConIva= precio* 1.19;
console.log("Total a Pagar $" +precioConIva);
}
calcular();

//Orden de Compra//
let eleccionMenu= prompt("¿Quieres agregar un Menú?");

let Menú=prompt("selecciona tu Menú");

if (Menú=="Menú familiar"){
alert("Haz seleccionado el: Menú Familiar");
   console.log ("El usuario ha seleccionado el Menú Familiar");
}
if (Menú== "Box family"){
alert(" Haz seleccionado el Menú: Box family");
    console.log ("El usuario ha seleccionado la opción Box family");
}
if (Menú== "Doble Box"){
alert(" Haz seleccionado el Menú: Doble Box");
    console.log(" El usuario ha seleccionado la opción Doble Box");
}


let entrada = prompt("¿Ya haz comprado antes con nosotros?");
//entra while//
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

entrada = prompt("¿Ya haz comprado antes con nosotros?");
}


let inscripcion = prompt("¿NO tienes una suscripción?");
//entra while//
while (entrada != "Esc"){
switch (entrada){
    case "Quiero suscribirme":
        alert("¿Quieres suscribirte?");
        console.log ("suscribete para beneficios")
        break;
    case "No me interesa":
        alert("No quieres ser miembro");
        console.log ("No eres miembro");
    default:
        alert("...");
}
}
inscripcion = prompt("¿No tienes una suscripción?");

let producto = prompt("Elija su opción de despacho aquí");


let texto="";
let palabra=prompt("Ingresa instrucciones de despacho (s-para salir de la ventana)");
while(palabra!="s"){
    texto = texto + "" + palabra;
    palabra=prompt("ingresa una instrucción al despachador (s-para salir de la ventana)");
}
