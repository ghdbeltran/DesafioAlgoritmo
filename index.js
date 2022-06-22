let ingresesunombre = prompt("Ingresa tu nombre")
    alert("Bienvenido " + ingresesunombre)

let ingreseAntiguedad = parseInt(prompt("Ingresa tu antigüedad"));

if (ingreseAntiguedad <= 4) {
    alert("Tenes 14 dias de vacaciones");
}
else if (ingreseAntiguedad <= 9) {
    alert("Tenes 21 dias de vacaciones");
}
else {
    alert("Tenes 28 dias de vacaciones");
}

function catorce(numeroUno, numeroDos) {
    let resultado = ((numeroUno/25) * numeroDos) + ((numeroUno/30) * 16);
    return resultado;
}

function veintiuno(numeroUno, numeroDos) {
    let resultado = ((numeroUno/25) * numeroDos) + ((numeroUno/30) * 9);
    return resultado;
}

function veintiocho(numeroUno, numeroDos) {
    let resultado = ((numeroUno/25) * numeroDos) + ((numeroUno/30) * 2);
    return resultado;
}

function mostrarResultado(resultado) {
    alert("El resultado de la operación es: " + resultado);
}

function mostrarMenu() {
    let opcion = prompt(
    "Bienvenido, seleccione la Opcion según sus dias de Vacaciones (ESC para salir)\n 1. Catorce\n 2. Veintiuno\n 3. Veintiocho"
    );
    return opcion;
}

function calculador() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "ESC") {
    if (opcionSeleccionada !== "") {
        let sueldo = parseFloat(prompt("Ingrese su Sueldo"));
        let vacaciones = parseFloat(prompt("Ingrese los dias de Vacaciones"));

        opcionSeleccionada = parseInt(opcionSeleccionada);

    if (!isNaN(opcionSeleccionada)) {
        switch (opcionSeleccionada) {
            case 1:
              let resultadoCatorce = catorce(sueldo, vacaciones);
              mostrarResultado(resultadoCatorce);
              break;

            case 2:
              let resultadoVeintiuno = veintiuno(sueldo, vacaciones);
              mostrarResultado(resultadoVeintiuno);
              break;

            case 3:
              let resultadoVeintiocho = veintiocho(sueldo, vacaciones);
              mostrarResultado(resultadoVeintiocho);
              break;

            default:
              alert("Opcion Incorrecta");
              break;
          }
    } else {
        alert("Ingresó una letra");
    }
    } else {
        alert("Seleccione la opción");
    }
    opcionSeleccionada = mostrarMenu();
}
}

calculador();
