//DOM dir
console.log(document.main);
//GetElementByID
let menuPrincipal=document.getElementById("Inicio");
console.log(menuPrincipal.innerHTML);

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
  
    let orden=document.getElementById("grillado");
    for(const orden of grillado ){
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src= ${orden.imagen} class="card-img-top" alt="...">
                <h5 class="card-title">${orden.nombre}</h5>
                <p class="card-text">${orden.precio}</p>
                <a href="#" id = "miBoton" class="btn btn-primary">COMPRAR</a>
            </div>
        `;
        cards.append(card);
    }
    
    let boton = document.getElementsByClassName("btn")    

    //claseById Boton
    let  Form=document.getElementById("Boton");
    console.log(Form.innerHTML);