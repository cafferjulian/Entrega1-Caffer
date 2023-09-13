const añoMirtha = 1927;
      
function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function validarRangoAño(año) {
  return año >= 1920 && año <= 1945;
}

function validarAño(año) {
  if (año === añoMirtha) {
    mostrarMensaje('¡Felicidades!\nHas adivinado el año de nacimiento de Mirtha Legrand.');
    console.log('¡Ganaste!');
    return true; 
  } else if (año < añoMirtha) {
    mostrarMensaje('El año de nacimiento de Mirtha Legrand fue después.');
    console.log('Faltan más años.');
  } else {
    mostrarMensaje('El año de nacimiento de Mirtha Legrand fue antes.');
    console.log('Sobran algunos años.');
  }
  return false; 
}

function iniciarJuego() {
  console.log('Inicio del juego');
  let intentos = 6;

  while (intentos > 0) {
    const añoIngresado = parseInt(prompt(`Mirtha nació entre el año 1920 y 1945. \nTienes: ${intentos} intentos`));

    if (isNaN(añoIngresado)) {
      mostrarMensaje('Por favor, ingresa un número entre 1920 y 1945.');
      console.log('Error.');
    } 
    else if (!validarRangoAño(añoIngresado)) {
      mostrarMensaje('El año debe estar entre 1920 y 1945.');
      console.log('Año fuera de rango.');
    } 
    else {
      if (validarAño(añoIngresado)) {
        break; 
      }
      intentos--;
    }
  }

  if (intentos === 0) {
    mostrarMensaje(`¡Has perdido!\nEl año de nacimiento de Mirtha Legrand es ${añoMirtha}.`);
    console.log('Perdiste :(');
  }
}
