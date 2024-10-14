// Función que encuentra el nombre de la sociedad secreta
function secretName(members) {
    let initials = "";  // String para almacenar las iniciales
    
    // Recorrer el array y obtener la primera letra de cada nombre
    for (let i = 0; i < members.length; i++) {
        initials += members[i][0];  // Añadir la primera letra de cada nombre
    }

    // Ordenar las iniciales alfabéticamente y devolver el resultado
    return initials.split('').sort().join('');
}

// Ejemplos de prueba
console.log(secretName(["Esperanza", "Franco", "Nia"]));  // Debería devolver 'EFN'
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));  // Debería devolver 'CJMPRR'
console.log(secretName(['Harry', 'Ron', 'Hermione']));  // Debería devolver 'HHR'