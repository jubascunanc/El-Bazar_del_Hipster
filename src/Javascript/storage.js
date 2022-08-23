//Local Storage
//Cliente/Usuario
localStorage.setItem("usuario","Juanjose");
let usuarioNuevo=localStorage.getItem("usuario");
console.log("Cliente:" +usuarioNuevo);

//despacho/delivery
localStorage.setItem("envío",true);
let delivery=localStorage.getItem("envío");
console.log("Envío:" +delivery);

//SesionStorage/Edad
sessionStorage.setItem("Edad",18 );
let edadUsuario=sessionStorage.getItem("Edad");
console.log("Edad Cliente:" +edadUsuario);

//SesionStorage/dirección Cliente
sessionStorage.setItem("Dirección", "Camino de la Aguada 10.371-B");
let direccionCliente=sessionStorage.getItem("Dirección");
console.log("Dirección Cliente:" +direccionCliente);