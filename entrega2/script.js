alert("Elija que funcion utilizar");



const productoss = [];

function predeterminados(nombre,tipo,marca,precio,tamanio,stock){
    this.nombre=nombre
    this.tipo=tipo
    this.marca=marca
    this.precio=Number(precio)
    this.tamanio=Number(tamanio)
    this.stock=Number(stock)
}

const itempredeterminado1 = new predeterminados("fideo","mostacholi", "marolio", 210,200,10 );
const itempredeterminado2 = new predeterminados("fideo","tirabuson", "terrabusi", 210,200,10 );
const itempredeterminado3 = new predeterminados("mayonesa","mayonesa", "hellmans",300,250,5);
const itempredeterminado4 = new predeterminados("gaseosa","cola","cocacola",450,2.25,15);
const itempredeterminado5 = new predeterminados("neumatico","calle","pirelli",45000,0,4);
productoss.push(itempredeterminado1)
productoss.push(itempredeterminado2)
productoss.push(itempredeterminado3)
productoss.push(itempredeterminado4)

function agregarproducto(){
    
    let seguir;
    do {
        const nuevoItem = new producto()
        nuevoItem.nombre = prompt("ingrese el nombre del producto")
        nuevoItem.tipo = prompt("ingrese el tipo de producto")
        nuevoItem.marca = prompt("ingrese la marca del producto")
        nuevoItem.precio = Number (prompt("ingrese el precio del producto"))
        nuevoItem.tamanio = Number (prompt("ingrese el tamaño"))
        nuevoItem.stock = Number (prompt("ingrese el stock del producto"))
        seguir=prompt("Desea agregar otro producto? s/n")
        productoss.push(nuevoItem)
    }
    while(seguir== "s");
}
function buscarproducto (){
    let buscar= prompt("Que producto quiere buscar?")
    
    const busqueda = productoss.filter((item) => item.nombre.includes(buscar)  
           
    ) 
    console.log(busqueda[0]);
    console.log(busqueda[1]);
    if (busqueda.length >= 1){
        let longitud = busqueda.length
        alert(longitud)
        for (let i=0; i <= longitud ; i++){
        alert(`El producto es ${busqueda[i].nombre} ${busqueda[i].marca}`)
        }   
        console.log(busqueda.length)
    }
    else{
        alert("No se encontro el producto");
    }
    
}

let seguir 
do{
const opcion = prompt ("1-Agregar producto \n 2-Buscar producto \n 3-Eliminar producto \n  4-filtrar prodocto");
switch (opcion){
    case "1": agregarproducto();
    case "2": buscarproducto();
    // case "3": eliminarproducto();
    // case "4": filtrarproducto();
 }
 seguir= prompt("¿Quiere realizar otra operacion? s/n")
}
while(seguir == "s");

alert("Gracias, saludos")


 