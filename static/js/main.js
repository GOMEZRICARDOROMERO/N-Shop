

//array principal de objetos
let arrayitems =[] //uso let para poder igualarlo mas adelante

//id para los productos
const id = ()=> parseInt(Math.random() * 100000) //creo un ID numérico dinámico

//constructor
class Items {
    constructor(id,nombre, stock) {
        this. id = id
        this.nombre = nombre
        this.stock = stock
    }
}

//llenado automatico de productos
function autoProductos (){
    arrayitems.push(new Items(id(),"Cable hdmi",10))
    arrayitems.push(new Items(id(),"Mando pro",30))
    arrayitems.push(new Items(id(),"Zelda breath of the wild",2))
    arrayitems.push(new Items(id(),"Mario kart 8",8))
    arrayitems.push(new Items(id(),"Base dock",1))
    arrayitems.push(new Items(id(),"Base mando",5))
    arrayitems.push(new Items(id(),"Adaptador mando gamecube",2))
    arrayitems.push(new Items(id(),"Mando gamecube",6))
    arrayitems.push(new Items(id(),"Estuche nintendo switch",4))
    arrayitems.push(new Items(id(),"Protector pantalla",7))
    arrayitems.push(new Items(id(),"Cubre sticks mandos",2))
    arrayitems.push(new Items(id(),"Xenoblade chronicles 3",15))
}

function opcionDato(dato){
    if (dato === 1) {
        agregarProducto()
    
    }else if (dato === 2){
        quitarProducto()
    
    }else if (dato ===3){
        BuscarConFilter()
    
    }else{
        alert("Ingrese opcion valida")
        //le pido de nuevo al usuario la opcion
        let dato = parseInt(prompt (" Que deseas hacer \n 1: Agregar producto \n 2: Quitar producto \n 3: Buscar producto"))
        opcionDato(dato)
    }
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto:") //pide dato al usuario
    nombre = pasarAmayusLaPrimera(nombre) // paso a mayuscula la primer aletra
    let stock = parseInt(prompt("Ingresa el stock:"))
    const newProd = {id: id(), nombre: nombre, stock: stock} //crea un objeto literal con los datos
    arrayitems.push(newProd)//agrego el objeto al array
    console.warn("Array con objeto agregado")
    agregarProductosAlHtml(arrayitems)
    alert("Se agrego el producto correctamente")
}

function quitarProducto(){
    //let nombre = prompt("Ingresa el nombre del producto:") //pide dato al usuario
    //nombre = pasarAmayusLaPrimera(nombre) // paso a mayuscula la primer aletra
    //let copiaArray = arrayitems.filter((item) => item.nombre !==nombre)
    let id = parseInt(prompt("Ingrese el id del producto")) //tomo el id 
    let copiaArray = arrayitems.filter((item) => item.id !==id) //busco el id en el array y hago una copia sin el objeto
    if(copiaArray.length === arrayitems.length){ //si la longitud de la copia es igual al original significa que no encontro el id o que no existe
        alert("Error ingrese un id valido")
        quitarProducto()
    }else{
        console.warn("Array con objeto retirado")
        arrayitems = copiaArray //igualo el array original a la copia 
        agregarProductosAlHtml(arrayitems)
        alert("Se quito el producto correctamente")
    }
}

//paso a mayus la primera letra
function pasarAmayusLaPrimera(str){
    cadena = str.toLowerCase()//primero paso todo a minuscula
    return cadena = cadena.charAt(0).toUpperCase() + cadena.slice(1)//tomo la primera letra y la paso a mayus y le agrego el resto de la cadena
}

//muestra la tabla creada
function mostarTabla(){
    console.table(arrayitems)
}

//Buscar usando filter
function BuscarConFilter() {
    let nombre = prompt("Ingresa el nombre del producto")
    nombre = pasarAmayusLaPrimera(nombre) // paso a mayuscula la primer aletra
    let resultado = arrayitems.filter((item)=> item.nombre.includes(nombre))
    if(resultado.length ===0){ //si la longitud de la copia es igual al original significa que no encontro el id o que no existe
        alert("Error ingrese un nombre valido")
        BuscarConFilter()
    }else{
        console.warn("Producto encontrado")
        agregarProductosAlHtml(resultado)
    }
}

// controlo todo el programa
function iniciar(){
    agregarProductosAlHtml(arrayitems)
    let dato = parseInt(prompt (" Que deseas hacer \n 1: Agregar producto \n 2: Quitar producto \n 3: Buscar producto")) //mensaje al usuario con opcion
    opcionDato(dato)//llamo la funcion y le paso la opcion 
}

//inicia automatico antes de ejecutar manual iniciar()
autoProductos() // genero la primera tabla una unica vez //muestro la tabla primera vez en el html
alert("Ingresa a la consola y llama la funcion iniciar()")



