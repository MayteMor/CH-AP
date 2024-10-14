// Solicitar una palabra o frase al usuario
let input = prompt("Ingresa una palabra o frase:").toLowerCase();

// Limpiar la entrada: solo dejar letras y números
let cleanedInput = "";
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        cleanedInput += char;
    }
}

// Verificar si es un palíndromo comparando cada letra con su opuesta
let isPalindrome = true;
for (let i = 0; i < cleanedInput.length / 2; i++) {
    if (cleanedInput[i] !== cleanedInput[cleanedInput.length - 1 - i]) {
        isPalindrome = false;
        break; 
    }
}

// Resultado
if (isPalindrome) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}