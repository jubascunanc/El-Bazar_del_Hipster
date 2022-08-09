//DOM dir
console.log(document.main);
//GetElementByID
let menuPrincipal=document.getElementById("Inicio");
console.log(menuPrincipal.innerHTML);

//ConstructorClassById
class card{
    constructor(nombre, precio, stock, unidades ) {
        this.nombre  = nombre.toLowerCase();
        this.precio  = parseFloat(precio);
        this.stock = stock;
        this.unidades = unidades;
        this.imagen= imagen;
    }
}   

//Lista de compra
const card=[
    {
     producto: "Hamburguesa Hipster",
     categoría: "Hamburguesa",
     precio: 4500,
     stock: 100,
     imagen: ""
    },
    {
     producto: "Pizza Vegetariana",
     categoría: "Pizzas",
     precio: 6800,
     stock: 100,
     imagen: ""
    },
    {
     producto: "Papas fritas",
     categoría: "Papas",
     precio: 1500,
     stock: 100,
     imagen: ""
    },
    {
     producto: "Cerveza",
     categoría: "Alcohol",
     precio: 3800,
     stock:100,
     imagen: ""
    },
    
    ];
    //For each
    //imprimo el [nombre y precio] de la lista
    orden.forEach((comida)=>console.log(comida.producto));
    console.log("¿Estas listo para pagar?");
    

    let cards=document.getElementById("grillado");
    for(const card of grillado ){
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src= ${card.imagen} class="card-img-top" alt="...">
                <h5 class="card-title">${card.nombre}</h5>
                <p class="card-text">${card.precio}</p>
                <a href="#" id = "miBoton" class="btn btn-primary">COMPRAR</a>
            </div>
        `;
        cards.append(card);
    }
    
    let boton = document.getElementsByClassName("btn")    