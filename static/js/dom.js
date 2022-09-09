//me conecto con los elemtnos de test.html lineas 38 y 39
const titulo = document.getElementById("titulo") // me conecto con el elemento con id titulo 
const parrafo = document.getElementById("parrafo") // me conecto con el elemento con id parrafo
const tabla = document.getElementById("tabla")

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