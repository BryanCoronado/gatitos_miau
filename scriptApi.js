const urlApi = 'https://api.thecatapi.com/v1/images/search';
const claveApi = 'live_N69o8o6kIKgHTFODpo701ADPdNDbPCmOhKczVxcBhujNPuXYotiPfiPv7BvJYDaU';

// Función para cargar una nueva imagen de gato
function cargarNuevaImagen() {
  // Hacer una solicitud HTTP a la API
  fetch(urlApi, {
    headers: {
      'x-api-key': claveApi
    }
  })
    .then(response => response.json())
    .then(data => {
      // Utilizar los datos recibidos para mostrar una nueva imagen de gato en la página
      const imagenesGatos = document.getElementById('imagenes-gatos');
      const imagen = document.createElement('img');
      imagen.src = data[0].url;
      imagenesGatos.innerHTML = '';
      imagenesGatos.appendChild(imagen);
    })
    .catch(error => console.error(error));
}

// Agregar un event listener al botón para cargar una nueva imagen de gato cuando se hace clic en él
const botonNuevaImagen = document.getElementById('nueva-imagen');
botonNuevaImagen.addEventListener('click', cargarNuevaImagen);

// Cargar una imagen de gato al cargar la página
cargarNuevaImagen();