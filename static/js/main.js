//Primer desafio
//Tienda online

//variables
let option
let optionf
let volver = false
let item
let nombreItem =" "
let total = 0

//debugger


alert (" ************************** \n * Bienvenido a N-Shop * \n **************************") //mensaje bienvenida

do {
    
    option = parseInt(prompt ("¿Que desea comprar? \n 1: Accesorios \n 2: Juegos \n 3: Salir")) //capturo la opcion en entero
    
    items(option) //llamo a la funcion items y le paso la opcion
    
} while (volver);

alert("Muchas gracias")


//funcion de items 
function items (option) {
    if (option === 1) { // valido la opcion de la linea 19
        item = parseInt(prompt ("1: Cable HDMI $3000 \n 2: Mando PRO $40.000 \n 3: Volver")) // presento los productos 
        if (item === 1 || item ===2 || item === 3){ // valido para continuar
            carrito(option, item) // llamo a la funcion carrito y le paso opcion y el item
        }else{ // si escribe cualquier otra cosa lo devuelvo al inicio
            alert("Seleccione Opcion valida") 
            volver = true
        }
    
    }else if (option === 2) {
        item = parseInt(prompt (" 1: Zelda breath of the wild $20.000 \n 2: Mario Kart 8 $20.000 \n 3: Volver"))
        if (item === 1 || item ===2 || item === 3){
            carrito(option, item) // llamo a la funcion carrito
        }else{
            alert("Seleccione Opcion valida")
            volver = true
        }
    
    }else if (option === 3){ 
        volver = false
    
    }else{  // si escribe cualquier otra cosa lo devuelvo al inicio
        alert("Seleccione Opcion valida")
        volver = true
    }
}

//carrito toma la opcion y el item para generar el total, el nombre y llamar a fonalizarCompra
function carrito (option,item){
    if (option === 1 && item === 1){ //segun opcion e item sumo el total y los nombres
        total = total + 3000
        nombreItem = nombreItem +" Cable HDMI "
        finalizarCompra()  // llamo a finalizarCompra, este no requiere parametros
    
    }else if(option === 1 && item === 2){
        total = total + 40000
        nombreItem = nombreItem + " Mando PRO "
        finalizarCompra()
    
    }else if (option === 2 && item === 1){
        total = total + 20000 
        nombreItem = nombreItem + " zelda breath of the wild "
        finalizarCompra()
    
    }else if(option === 2 && item === 2){
        total = total + 20000
        nombreItem = nombreItem + " Mario Kart 8 "
        finalizarCompra()
    
    }else if((option === 1 || option === 2) && (item ===3)){
        volver = true
    }
}

//presenta el valor final + los items elegidos
function finalizarCompra(){
    optionf = parseInt(prompt ("Productos a pagar \n " +nombreItem + "\n\n Para un total de $" + total +"  \n\n 1: Pagar \n 2: Seguir Comprando"))
    
    if(optionf === 1){ //valido opciones finales
        alert("Pagaste $"+total) //presento lo pagado y doy las gracias
        volver = false //paso a falso para cerrar
    
    }else if(optionf === 2){
        alert("Perfecto sigamos comprando ") 
        volver = true // paso a true para repetir todo con los valores actuales
    }else {
        alert("Seleccione Opcion valida ") // cualquier opcion invalida retorna al inicio
        nombreItem =" " //reseteo variables para que no se sumen
        total = 0 //reseteo variables para que no se sumen
        volver = true
    }
}