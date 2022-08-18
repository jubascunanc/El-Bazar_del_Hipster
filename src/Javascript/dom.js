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
},
{
  nombre: "Hamburguesa Clasica",
  categoria: "Hamburguesa",
  precio: 4700,
  stock: 100,
  imagen: src="./src/imagenes/burguerassets.jpg",
},
{
  nombre: "Hamburguesa Salmon",
  categoria: "Hamburguesa",
  precio: 6800,
  stock: 100,
  imagen: src="./src/imagenes/burguerfooter.jpg",
},
{
  nombre: "Hamburguesa Vegana",
  categoria: "Hamburguesa",
  precio: 4700,
  stock:100,
  imagen: src="./src/imagenes/Hamburguesas-veganas-de-tempeh-v.webp",
},
{
  nombre: "Hamburguesa Alemana",
  categoria: "Hamburguesa",
  precio: 5200,
  stock: 100,
  imagen: src="./src/imagenes/hamburguesaalemana.jpeg",
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
    }
}   

//Lista de compra

    let galeria=document.getElementById("galeria");
    for(const auxiliar of comanda ){
        let cards=document.createElement("div");
        cards.className="cards";
        cards.innerHTML=`
        <div class="card" style="width: 16rem;">
        <img src= ${auxiliar.imagen} class="card-img-top" alt="...">
                <h5 class="card-title">${auxiliar.nombre}</h5>
                <p class="card-text" style= "color: black;">${auxiliar.precio}</p>
                <a id = "btn" class="btn btn-primary">COMPRAR</a>
            </div>
        `;
        galeria.append(cards);
    }
    
    //elemento boton
    let boton = document.getElementsByClassName("boton")    

    //add event listener

  let btn= document.getElementById("galeria")
  btn.addEventListener("click", respuestaClick)
  function respuestaClick(){
    console.log("Click evento");
    console.table(comanda);
    alert("Agregaste a  tu carrito" );
  }