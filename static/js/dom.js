//me conecto con los elemtnos de test.html lineas 38 y 39
const titulo = document.getElementById("titulo") // me conecto con el elemento con id titulo 
const parrafo = document.getElementById("parrafo") // me conecto con el elemento con id parrafo
const tabla = document.getElementById("tabla")

//me cnecto a los botones
const agregarItems = document.querySelector("#aitems")
const borrarItems = document.querySelector("#bitems")

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
            } else {
                agregarProductosAlHtml(resultado)
            }
    } else {
        agregarProductosAlHtml(arrayitems)
    }
}


function agregarProductosAlHtml(array){
    let fila = " "
    tabla.innerHTML = fila /* primero limpia la anterior */
    array.forEach(item => {
        fila = `<tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.stock}</td>
                </tr>`
    tabla.innerHTML +=fila
    });
}
agregarProductosAlHtml(arrayitems)
agregarItems.addEventListener("click",agregarProducto)
borrarItems.addEventListener("click",quitarProducto)
inputFiltrar.addEventListener("input", filtrarProductos) //A medida que escribimos.
