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
                <a id = "btn" class="btn btn-primary onclick="AddToCart(${auxiliar.id})">COMPRAR</a>
            </div>
        `;
        galeria.append(cards);
    }
    
    //add event listener

    let btn= document.getElementById("galeria")
    btn.addEventListener("click", respuestaClick)
    function respuestaClick(){
  Swal.fire({
  title: 'Compra',
  texto: 'OK',
  icon: 'success',
  });
  
      console.log("Click evento");
      console.table(comanda);
    }


//foreach
comanda.forEach (auxiliar =>{
  //evento individual
  document.getElementById(`AddToCart${auxiliar.id}`).addEventListener("click",function(){

  });

 })
 //Inicio carrito de compras
 function agregarAlcarrito(auxiliar){
  carrito.push(auxiliar);
  console.log(carrito);
 }

}


 

