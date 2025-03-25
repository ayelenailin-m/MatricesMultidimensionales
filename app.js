let personas = [];
let cantidad = parseInt(prompt("¿Cuántas personas vas a cargar?"));

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Nombre de la persona ${i + 1}:`);
    let apellido = prompt(`Apellido de la persona ${i + 1}:`);
    let dni = prompt(`DNI de la persona ${i + 1}:`);

    let telefonos = [];
    let cantidadTelefonos = parseInt(
        prompt(`¿Cuántos teléfonos querés cargar para ${nombre} ${apellido}?`)
    );

    for (let j = 0; j < cantidadTelefonos; j++) {
        let telefono = prompt(`Teléfono ${j + 1} de ${nombre}:`);
        telefonos.push(telefono);
    }

    personas.push([nombre, apellido, dni, telefonos]);
}

console.log("Listado de personas con sus teléfonos:");
console.log("----------------------------------------");

personas.forEach((persona, index) => {
    console.log(`Persona ${index + 1}:`);
    console.log(`Nombre: ${persona[0]}`);
    console.log(`Apellido: ${persona[1]}`);
    console.log(`DNI: ${persona[2]}`);
    console.log("Teléfonos:");
    persona[3].forEach((tel, i) => {
        console.log(`  ${i + 1}. ${tel}`);
    });
    console.log("----------------------------------------");
});