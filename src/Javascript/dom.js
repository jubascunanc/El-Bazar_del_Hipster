//DOM dir
console.log(document.main);
//GetElementByID
let auxiliar=document.getElementsByClassName("galeria");
console.log(auxiliar.innerHTML);

const comanda=[
{
  nombre: "Hamburguesa hispter",
  categoria: "Hamburguesa",
  precio: 4500,
  stock: 100,
  imagen: src="./src/imagenes/Hamburguesa.jpg",
  id: "01",
},
{
  nombre: "Hamburguesa Clasica",
  categoria: "Hamburguesa",
  precio: 4700,
  stock: 100,
  imagen: src="./src/imagenes/burguerassets.jpg",
  id: "02",
},
{
  nombre: "Hamburguesa Salmon",
  categoria: "Hamburguesa",
  precio: 6800,
  stock: 100,
  imagen: src="./src/imagenes/Hamburguesa-salmon.jpg",
  id: "03",
},
{
  nombre: "Hamburguesa Vegana",
  categoria: "Hamburguesa",
  precio: 4700,
  stock:100,
  imagen: src="./src/imagenes/Hamburguesas-veganas-de-tempeh-v.webp",
  id: "04",
},
{
  nombre: "Hamburguesa Alemana",
  categoria: "Hamburguesa",
  precio: 5200,
  stock: 100,
  imagen: src="./src/imagenes/hamburguesaalemana.jpeg",
  id: "05"
},
];


    //For each
    //imprimo el [nombre y precio] de la lista
    comanda.forEach((comanda)=>console.log(comanda.nombre));
    console.log("¿Estas listo para pagar?");
    

//ConstructorClassById
class cards{
    constructor(nombre, precio, stock, unidades,imagen) {
        this.nombre  = nombre.toLowerCase();
        this.precio  = parseFloat(precio);
        this.stock = stock;
        this.unidades = unidades;
        this.imagen= imagen;
        this.id= id;
    }
}   


//Lista de compra
calcularProductos();

function calcularProductos(){

    let galeria=document.getElementById("galeria");
    for(const auxiliar of comanda ){
        let cards=document.createElement("div");
        cards.className="cards";
        cards.innerHTML=`
        <div class="card" style="width: 16rem;">
        <h2> ID: ${auxiliar.id}</h2>
        <img src= ${auxiliar.imagen} class="card-img-top" alt="...">
                <h5 class="card-title">${auxiliar.nombre}</h5>
                <p class="card-text" style="color: black;">${auxiliar.precio}</p>
                <a id = "btn${auxiliar.id}" class="btn btn-primary">COMPRAR</a>
            </div>
        `;
        galeria.append(cards);

        let boton = document.getElementById(`btn${auxiliar.id}`);

        boton.addEventListener("click", (e) =>{
          Swal.fire({
          title: 'Compra',
          texto: 'OK',
          icon: 'success',
          });
          
              console.log("Click evento");
              console.table(auxiliar)
              //console.table(comanda);
            });  

    }

}


//Item en carrito de compras
const contenedorProductos= document.getElementById("contenedor-productos");
const contenedorCarrito= document.querySelector("#items");
const contenedorFooter= document.querySelector("#footer");


//Push productos/Función Productos
let Producto=

function pushProductos(){
  
let productos= comanda;
productos.push(new Producto(1, 'Hamburguesa Hispter', 4500));
productos.push(new Producto(2, 'Hamburguesa Clasica', 4700));
productos.push(new Producto(3, 'Hamburguesa Salmon', 6800));
productos.push(new Producto(4, 'Hamburguesa Vegana', 4700));
productos.push(new Producto(5, 'Hamburguesa Alemana',5200));

}

pushProductos();

function exportarProducto(){
  contenedorProductos.innerHTML= "";

  let totalCarrito= 0;

//reglon card
elementosCarrito.forEach(
  (elemento)=> {
    let tablaCarrito=document.createElement("tr");
    tablaCarrito.innerHTML=`
    <td>${elemento.producto.id}</td>
    <td>${elemento.producto.nombre}</td>
    <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" step="1"/></td>
    <td>${elemento.producto.precio}</td>
    <td>${elemento.producto.precio*elemento.cantidad}</td>
    `;

    totalCarrito+=elemento.producto.precio*elemento.cantidad;

    contenedorProductos.append(tablaCarrito);

    let inputforProduct=document.getElementById(`cantidad-producto-${elemento.producto.id}`);

    inputforProduct.addEventListener("change", (e)=> {
        alert ("Hay cambio");
        let nuevaCantidad= e.target.value;
        elemento.cantidad= nuevaCantidad;

    });
  }
);

if(elementosCarrito.length==0){
  contenedorFooter.innerHTML=`<th scope="row" colspan="5">Carrito Vacio- Compra aquí!</th>`
}
}

exportarProducto();

function crearCard(producto){

//boton
let agregarBoton=document.createElement("button");
agregarBoton.className="btn btn-primary";
agregarBoton.innerText="Comprar aquí";

//card body
let cuerpoCarrito=document.createElement("div");
cuerpoCarrito.className="card-body";
cuerpoCarrito.innerHTML=`
<h5>${auxiliar.nombre}</h5>
<p>${auxiliar.precio}</p>
`;
cuerpoCarrito.append(agregarBoton);

let imagen=document.createElement("img");
imagen.src= auxiliar.imagen;
imagen.className= "card-img-top";
imagen.alt=auxiliar.nombre;



//Evento variable carrito

agregarBoton.onclick= (e)=>{
  alert(`Producto agregado! ${auxiliar.id} - ${auxiliar.nombre}`);

let carritoCompra= new carritoCompra(producto, 1);
agregarBoton.push(carritoCompra);
}

 return carta;

}


