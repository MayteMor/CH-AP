
function arrayMultiplos(numero, longitud) {
    let multiplos = [];      
   
    for (let i = 1; i <= longitud; i++) {
        multiplos.push(numero * i);  
    }

    return multiplos;  
}


console.log(arrayMultiplos(2, 10));  
console.log(arrayMultiplos(17, 6));  