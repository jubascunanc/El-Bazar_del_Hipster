
//Operadores avanzados
alert("¿Que alcohol deseas comprar?");

let listaAlcohol = prompt("Elige tu Alcohol");
while (listaAlcohol != "Esc"){
switch(listaAlcohol){
    case "Vino":
    alert("Escogiste la opción Vino");
    console.log("El usuario cotizo Vino");
    break;
    case "Cerveza":
    alert("Escogiste la opción Cerveza");
    console.log("El usuario cotizo Cerveza");
    break;
    case "Cocktail":
    alert("Escogiste la opción Cocktail");
    console.log("El usuario cotizo Cocktail");
    break;
}

listaAlcohol=prompt("¿Que alcohol deseas comprar?");
}

const Licor={
    nombre: "Vino",
    precio: 4500,

}

const Licor2= null

console.log(Licor || "La opción existe");
//[nombre: Vino, Precio: 4500]

console.log(Licor2 || "La opción no existe");
//la opción no existe

