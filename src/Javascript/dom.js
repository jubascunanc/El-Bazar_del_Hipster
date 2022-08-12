//DOM dir
console.log(document.main);
//GetElementByID
let auxiliar=document.getElementsByClassName("galeria");
console.log(auxiliar.innerHTML);

const comanda=[
{
  producto: "Hamburguesa hispter",
  categoria: "Hamburguesa",
  precio: 4500,
  stock: 100,
},
{
  producto: "Pizza Vegetariana",
  categoria: "Pizzas",
  precio: 6800,
  stock: 100,
},
{
  producto: "Papas fritas",
  categoria: "Papas",
  precio: 1500,
  stock:100,
},
{
  producto: "Cerveza",
  categoria: "Alcohol",
  precio: 2700,
  stock: 100,
},
];

    //For each
    //imprimo el [nombre y precio] de la lista
    comanda.forEach((comanda)=>console.log(comanda.producto));
    console.log("¿Estas listo para pagar?");
    

//ConstructorClassById
class cards{
    constructor(nombre, precio, stock, unidades ) {
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
        cards.className="card col-3 text-align-center";
        cards.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src= ${auxiliar.imagen} class="card-img-top" alt="...">
                <h5 class="card-title">${auxiliar.nombre}</h5>
                <p class="card-text">${auxiliar.precio}</p>
                <a href="#" id = "btn" class="btn btn-primary">COMPRAR</a>
            </div>
        `;
        galeria.append(cards);
    }
    
    //
    let boton = document.getElementsByClassName("btn")    
