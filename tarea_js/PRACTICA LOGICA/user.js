let nameUser = prompt("¿Cómo te llamas?");
let age = prompt("¿Cuál es tu edad?");
let numMovies = prompt("¿Cuántas películas favoritas tienes?");
let nameMovies = [];

// Bucle para solicitar los nombres de las películas
for (let i = 0; i < numMovies; i++) {
    let movie = prompt("Ingresa el nombre de la película " + (i + 1) + ":");
    nameMovies.push(movie);
}

// Mostrar la información en la consola
console.log("Hola " + nameUser + ", tienes " + age + " años.");
console.log("Tus películas favoritas son:");

// Imprimir cada película con un mensaje personalizado
for (let i = 0; i < nameMovies.length; i++) {
    console.log( nameMovies[i] );
}

// Seleccionar una película aleatoria
let randomIndex = Math.floor(Math.random() * nameMovies.length);
console.log("¡Es fascinante que " + nameMovies[randomIndex] + " sea una de tus favoritas!");

