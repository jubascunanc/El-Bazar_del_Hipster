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


const miarray= [4500,4700,6800,4700,5200];
const sumatoria= (...numeros) =>{
    return numeros.reduce((acc, index)=> acc + index, 0);
};
console.log(sumatoria(...miarray));

//Traer con JSON el Modal formulario
class Usuario {

    constructor(nombre, edad, correoElectronico, direccionEnvio, entrega) {
    
    this.nombre = nombre;
    
    this.edad = edad;
    
    this.correoElectronico = correoElectronico;
    
    this.direccionEnvio = direccionEnvio;
    
    this.entrega = entrega;
    
        }
    
    }
    
    let usuarioLocalStorage = localStorage.getItem("usuario");
    
    let usuarioAplicacion;
    
    if(usuarioLocalStorage != null) {
    
    usuarioAplicacion = JSON.parse(usuarioLocalStorage);
    
    /**
    
         * Lógica para llenar los campos del usuario al inicio de la aplicación
    
         */
    
    document.getElementById("nombre-usuario").value = usuarioAplicacion.nombre;
    
    document.getElementById("edad-usuario").value = usuarioAplicacion.edad;
    
    /**
    
        *
    
        *
    
        *
    
         */
    
    } else {
    
    usuarioAplicacion = new Usuario();
    
    }