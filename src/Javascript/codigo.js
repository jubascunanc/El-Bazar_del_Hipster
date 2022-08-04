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

if (password= "123456"){
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
    alert("Eres mayor de edad +18");
    console.log("Puedes comprar Alcohol");
}

let Alcohol=prompt("Ingresa que Alcohol deseas comprar");

if (Alcohol== "Cerveza"){
    alert("haz seleccionado la opción Cerveza");
    console.log("El usuario ha seleccionado la opción cerveza");
}

else if (Alcohol== "Vino"){
    alert ("haz seleccionado la opción Vino");
    console.log("El usuario ha seleccionado la opción Vino");
}   

else if (Alcohol== "Ron"){
    alert("haz seleccionado la opción Ron");
    console.log("El usuario ha seleccionado la opción RON");
}

else if (Alcohol== "cocktail"){
    alert("haz seleccionado la opción Cocktail");
    console.log("El usuario ha seleccionado la opción Cocktail");
}

//break point//
if (Edad< 18){
    alert("Eres menor de edad -18");
    console.log("NO Puedes comprar Alcohol");
    }
    

//carrito de compras//

let articulo= prompt ("ingresa los articulos que querés agregar a tu carrito: -EXIT para salir \n Hamburguesa \n Sandwiches \n Pizzas \n Ensalada \n Alcohol");
let precio= 0;
let precioConIva= 1.19;

class Checkout{
    constructor(nombre, precio, serie, unidades ) {
        this.nombre  = nombre.toLowerCase();
        this.precio  = parseFloat(precio);
        this.serie = serie;
        this.unidades = unidades;
    }
}   
    const compra=[];
function calcular (){
while (articulo!="EXIT"){
    switch (articulo){
    case "Hamburguesa":
        compra.push(new Checkout("valor Hamburguesa $",4500,  false, 1));
        precio= precio + 4500;
        console.log ("El valor de Hamburguesa es: $4.500 pesos");
        console.log ("El articulo esta disponible para la Venta \n Hay stock");
        break;

    case "Sandwiches":
        compra.push(new Checkout ("valor Sandwich $",2500,  false, 1));
        precio= precio + 2500;
        console.log("El valor de Sandwiches es: $2.500 pesos");
        console.log("El articulo esta disponible para la Venta \n Hay Stock");
        break;

    case "Pizzas":
        compra.push(new Checkout ("valor Pizzas $",7000,  false, 1));
        precio= precio + 7000;
        console.log("El valor de Pizzas es: $7.000 pesos");
        console.log("Este articulo se encuentra en Venta \n Hay stock");
        break;

    case "Ensalada":
        console.log ("El articulo no se encuentra en Venta \n NO hay Stock");
        break;

    case "Alcohol":
        compra.push(new Checkout ("valor Alcohol $",10000,  false, 1));
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


let Objetos=prompt("Ingresa tu preferencia:")
console.log("Selecciona tu preferencia");

//objeto

alert("Elegiste hamburguesa Hipster");
const miCarrito={
    nombre: ["Hamburguesa Hipster"],
    precio: ["4500"],
    serie: ["0302"],
}

console.log(miCarrito);
console.log("Su selección es: " +miCarrito.nombre);

//objetos constructores

function objeto (nombre, precio, serie){
    this.nombre= nombre;
    this.precio= precio;
    this.serie= serie;
}

const objeto1= new objeto ("Hamburguesa Hipster", 4500 , "numero de serie 0302");
const objeto2= new objeto ("Hamburguesa Americana", 5500, "numero de serie 1901");
const objeto3= new objeto ("Hamburguesa el Panzón", 3500, "numero de serie 1234");

alert("haz seleccionado: "+miCarrito + precio );

const checkout=["Hamburguesa", "Pizzas", "Papas Fritas", "Ensalada", "Sandwiches", "Cerveza", "Vino"];
console.log (checkout);

console.log ("El resumen de tu compra es:" +checkout[0,1,2,4]);

//recorrido del array
for (let i=0; i<checkout.length;i++){
    console.log(checkout[i]);
}

checkout.push("Hamburguesa Hipster");
console.log(checkout);

//metodo unshift
checkout.unshift("Cerveza");
console.log(checkout);

//selecciona un Menú
alert("¿Quieres agregar un Menú?");
let menu=prompt("selecciona tu Menú");

if (menu=="Menú familiar"){
alert("Haz seleccionado el: Menú Familiar");
   console.log ("El usuario ha seleccionado el Menú Familiar");
}
if (menu== "Box family"){
alert(" Haz seleccionado el Menú: Box family");
    console.log ("El usuario ha seleccionado la opción Box family");
}
if (menu== "Doble Box"){
alert(" Haz seleccionado el Menú: Doble Box");
    console.log(" El usuario ha seleccionado la opción Doble Box");
}


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

//suscripción
let inscripcion = prompt("¿NO tienes una suscripción? presiona -Esc para salir");
//entra while//
while (entrada != "Esc"){
switch (entrada){
    case "Si Quiero":
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
inscripcion = prompt("¿NO tienes una suscripción? presiona -Esc para salir");

let producto = prompt("Elija su opción de despacho aquí");


let texto="";
let palabra=prompt("Ingresa instrucciones de despacho (s-para salir de la ventana)");
while(palabra!="s"){
    texto = texto + "" + palabra;
    palabra=prompt("ingresa una instrucción al despachador (s-para salir de la ventana)");
}

