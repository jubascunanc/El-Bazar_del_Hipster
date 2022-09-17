const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('levanta-formulario'); 
                myModal.show(modalToggle);


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
    document.getElementById("correo-usuario").value = usuarioAplicacion.correoElectronico;
    document.getElementById("direccion-entrega").value = usuarioAplicacion.direccionEnvio;
    document.getElementById("entrega-pedido").value = usuarioAplicacion.entrega;

    } else {

    
    
    usuarioAplicacion = new Usuario();


    }
   document.getElementById("guardar-cambios").addEventListener("click",()=>{
    let nombreUsuario= document.getElementById("nombre-usuario").value
    let edadUsuario=  document.getElementById("edad-usuario").value
    let correoElectronico= document.getElementById("correo-usuario").value
    let direccionEnvio= document.getElementById("direccion-entrega").value
    let entrega= document.getElementById("entrega-pedido").value
    usuarioAplicacion.nombre=nombreUsuario
    usuarioAplicacion.edad=edadUsuario
    usuarioAplicacion.correoElectronico=correoElectronico
    usuarioAplicacion.direccionEnvio=direccionEnvio
    usuarioAplicacion.entrega=entrega
    localStorage.setItem("usuario",JSON.stringify(usuarioAplicacion));
    myModal.show(modalToggle);
   })

 console.log("Carrito abandonado")

   //Promises & ASYNC
   setTimeout(()=>{
    console.log("Tu carrito esta Lleno")
   }, 3000);

 console.log("Carrito Vacio ")