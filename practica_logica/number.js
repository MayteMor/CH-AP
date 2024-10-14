// Función para encontrar el número más alto
function findHighestNumber(numbers) {
    let highest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];  
        }
    }
    return highest;  
}

// Solicitar 10 números al usuario
let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    numbers.push(num);  // Guardar los números en el array
}

// Mostrar los números ingresados uno por uno
console.log("Los números que ingresaste son:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Llamar a la función para encontrar el número más alto
let highestNumber = findHighestNumber(numbers);

// Mostrar el número más alto
console.log("El número más alto es: " + highestNumber);