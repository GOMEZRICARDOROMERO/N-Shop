//DESAFÍO COMPLEMENTARIO
//Crear un algoritmo utilizando un ciclo

//variables 
let tabla
let resu 
let repetir

do {
    
    //pido el dato y lo paso a entero
    tabla =  parseInt(prompt("ingrese la tabla de multiplicar que desea ver"))
    
    //le muestro al usuario la tabla que eligio
    console.log("Tabla del",tabla,)
    
    //hago un ciclo para imprimir la tabla 
    for (let i = 1; i < 11; i++) {
        
        resu = tabla*i
        console.log(tabla+" X " + i +" = " +resu)
        
    }
    
    repetir = confirm ("¿Desea ingresar otra tabla?")
    
} while (repetir);