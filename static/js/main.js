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
    arrayitems.push(new Items(id(),"zelda breath of the wild",2))
    arrayitems.push(new Items(id(),"Mario kart 8",8))
}

function opcionDato(dato){
    if (dato === 1) {
        agregarProducto()
    
    }else if (dato === 2){
        quitarProducto()
    
    }else{
        alert("ingrese Opcion valida")
        //le pido de nuevo al usuario la opcion
        let dato = parseInt(prompt (" Que deseas hacer: \n 1: Agregar producto \n 2: Quitar producto"))
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
    mostarTabla()
    alert("se agrego el producto correctamente")
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
        console.table(copiaArray)
        alert("se quito el producto correctamente")
        arrayitems = copiaArray //igualo el array original a la copia 
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

alert("ingresa a la consola y llama la funcion iniciar()")

// controlo todo el programa
function iniciar(){
    autoProductos() // genero la primera tabla
    mostarTabla() //muestro la tabla primera vez
    let dato = parseInt(prompt (" Que deseas hacer \n 1: Agregar producto \n 2: Quitar producto")) //mensaje al usuario con opcion
    opcionDato(dato)//llamo la funcion y le paso la opcion 
}

