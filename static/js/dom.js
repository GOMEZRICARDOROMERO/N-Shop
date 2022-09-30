//array principal de objetos
let arrayitems =[] //uso let para poder igualarlo mas adelante
let carrito =[]

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

autoProductos()

//me conecto con los elemtnos de test.html lineas 38 y 39
const titulo = document.getElementById("titulo") // me conecto con el elemento con id titulo 
const parrafo = document.getElementById("parrafo") // me conecto con el elemento con id parrafo
const tabla = document.getElementById("tabla")

//me cnecto a los botones
const agregarItems = document.querySelector("#aitems")
const borrarItems = document.querySelector("#bitems")
const btncarrito = document.querySelector("#carrito")
//btncarrito.disabled=true //deshabilito el boton para no poder ir al carrito sin items

//me conecto al buscar
const buscarItem = document.querySelector("#buscaritem")
const inputFiltrar = document.querySelector("input") //me conecto a la barra input

function filtrarProductos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value
    if (inputFiltrar.value !== "") {
        const resultado = arrayitems.filter(item => item.nombre.includes(pasarAmayusLaPrimera(inputFiltrar.value)))
            if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                agregarProductosAlHtml(arrayitems)
                accionButtonAdd(arrayitems) //llamo de vuelta para que funcione el boton 
            } else {
                agregarProductosAlHtml(resultado)
                accionButtonAdd(resultado) //llamo de vuelta apra que funcione en el filtro pero pasandole el nuevo array
            }
    } else {
        agregarProductosAlHtml(arrayitems)
        accionButtonAdd(arrayitems)
    }
}

inputFiltrar.addEventListener("input",filtrarProductos) //A medida que escribimos.

//paso a mayus la primera letra
function pasarAmayusLaPrimera(str){
    cadena = str.toLowerCase()//primero paso todo a minuscula
    return cadena = cadena.charAt(0).toUpperCase() + cadena.slice(1)//tomo la primera letra y la paso a mayus y le agrego el resto de la cadena
}


function agregarProductosAlHtml(array){
    let fila = " "
    tabla.innerHTML = fila /* primero limpia la anterior */
    array.forEach(item => {
        fila = `<tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.stock}</td>
                    <td><button class="btn btn-primary" id="btn${item.id}">Add 🛒</button></td>
                </tr>`
    tabla.innerHTML +=fila
    });
}

agregarProductosAlHtml(arrayitems)

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto:") //pide dato al usuario
    nombre = pasarAmayusLaPrimera(nombre) // paso a mayuscula la primer aletra
    let stock = parseInt(prompt("Ingresa el stock:"))
    const newProd = {id: id(), nombre: nombre, stock: stock} //crea un objeto literal con los datos
    arrayitems.push(newProd)//agrego el objeto al array
    console.warn("Array con objeto agregado")
    agregarProductosAlHtml(arrayitems)
    mensajeToast("Se agrego el producto correctamente", gradienteverde)
    accionButtonAdd (arrayitems) // lo llamo de nuevo para que el nuevo item funcione
}

agregarItems.addEventListener("click",agregarProducto)

function quitarProducto(){
    let id = parseInt(prompt("Ingrese el id del producto")) //tomo el id 
    let copiaArray = arrayitems.filter((item) => item.id !==id) //busco el id en el array y hago una copia sin el objeto
    if(copiaArray.length === arrayitems.length){ //si la longitud de la copia es igual al original significa que no encontro el id o que no existe
        mensajeToast("Error ingrese un id valido", gradienterojo)
        //quitarProducto()
    }else{
        console.warn("Array con objeto retirado")
        arrayitems = copiaArray //igualo el array original a la copia 
        agregarProductosAlHtml(arrayitems)
        mensajeToast("Se quito el producto correctamente",gradienteverde)
        accionButtonAdd (arrayitems)
    }
}

borrarItems.addEventListener("click",quitarProducto)

//funcion para conectarse con cada boton y generar su accion
function accionButtonAdd (array) {
    array.forEach(item => { //recorro el aaray
        const boton = document.querySelector(`#btn${item.id}`) // por cada item genero un boton con un id
        boton.addEventListener("click",()=>agregarItemAlCarrito(`${item.id}`)) // cada boton llama la funcion de carrito y le pasa el id
    })
}

accionButtonAdd (arrayitems) //llamo para que se inicie 

//funcion para agregar el producto al carrito por id
function agregarItemAlCarrito(id) {
    cargarCarrito()
    const item = arrayitems.find(item => item.id == id)//busco el item del array y lo guardo en la const item
        carrito.push(item)//agrego ese item al array de carryto
        localStorage.setItem("carrito", JSON.stringify(carrito)) //agrego al localstorage
        mensajeToast("Se Agrego "+`${item.nombre}`+" al carrito 🛒",gradienteazul)
}

//funcion cargar carrito trae los datos cargados esto se usa para no perder los que se agregaron antes
function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito")) || []
    }
}

cargarCarrito()

let gradienteazul = "radial-gradient(circle, rgba(0,14,250,1) 0%, rgba(0,14,250,1) 100%)"
let gradienterojo = "radial-gradient(circle, rgba(250,0,0,1) 0%, rgba(250,0,0,1) 100%)"
let gradienteverde = "radial-gradient(circle, rgba(0,250,66,1) 0%, rgba(0,250,66,1) 100%)"

//mensaje toast
function mensajeToast(mensaje, background) {
    Toastify({
        text: mensaje, //es el texto en el toast
        duration: 3000, // la duracion de la ventana
        close: false, //mostrar o no opcion de cerrar
        gravity: "top", // `top` or `bottom` 
        position: "right", // `left`, `center` or `rightright`
        stopOnFocus: false, // se detiene el tiempo si se pone el mouse sobre el toast
        style: { //son los estilos
                background: background,
        }
    }).showToast();
}