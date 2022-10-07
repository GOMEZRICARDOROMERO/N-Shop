//array
let carrito = []
//carrito = JSON.parse(localStorage.getItem("carrito")) //traigo los items del storage
let carritovacio = []
let copiaArray =[]

let gradienteazul = "radial-gradient(circle, rgba(0,14,250,1) 0%, rgba(0,14,250,1) 100%)"
let gradienterojo = "radial-gradient(circle, rgba(250,0,0,1) 0%, rgba(250,0,0,1) 100%)"
let gradienteverde = "radial-gradient(circle, rgba(0,250,66,1) 0%, rgba(0,250,66,1) 100%)"


//me conecto
const tabla = document.querySelector("#tablacarrito")
const limpiar = document.querySelector("#bcarrito")

//funcion para validar carrito
const validarCarrito = () =>{
    //tabla.innerHTML = " " /* limpia la tabla para que no aparezca un cuadro vacio */
    carrito = JSON.parse(localStorage.getItem("carrito"))//traigo los items del storage
    carrito === null ? mensajeToast("El carrito esta vacio",gradienterojo) : cargarCarrito(carrito)
}

validarCarrito()

//carga el carrito y lo muestra 
function cargarCarrito(array){
    let fila = " "
    tabla.innerHTML = fila /* primero limpia la tabla anterior */
    array.forEach(item => {
        fila = `<tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td><button class="btn btn-primary" id="btn${item.id}">Quitar</button></td>
                </tr>`
    tabla.innerHTML +=fila
    });
    accionButtonQuitar(carrito)
}

//llamo la funcion para que se cargue
//cargarCarrito(carrito)

//cuando se presiona le boton borra todo el storage y llama de nuevo la funcion cargar carrito para actualizar
limpiar.addEventListener("click", ()=>{
    localStorage.clear()
    //cargarCarrito(carritovacio)//cargo un array vacio para que no me de error
    //alert("Se limpio el carrito")
    tabla.innerHTML = " " // limpio el html
    window.location.reload() // recargo la pagina para evitar errores
    validarCarrito()
})

//funcion para conectarse con cada boton y generar su accion
function accionButtonQuitar (array) {
    array.forEach(item => { //recorro el aaray
        const boton = document.querySelector(`#btn${item.id}`) // por cada item genero un boton con un id
        boton.addEventListener("click", ()=>{
            quitar(`${item.id}`)
            mensajeToast("Se quito el producto ",gradienteverde)
        })
    })
}

//accionButtonQuitar(carrito)


function quitar(id){
    let idp = parseInt(id)
    copiaArray = carrito.filter((item) => item.id !==idp) //busco el id en el array y hago una copia sin el objeto
        carrito = copiaArray //igualo el carrito
        localStorage.setItem("carrito", JSON.stringify(carrito)) //reemplazo el storage 
        cargarCarrito(carrito) //cargo de nuevo los datos en el html
        accionButtonQuitar(carrito) // acctivo nuevamente los botones
}

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