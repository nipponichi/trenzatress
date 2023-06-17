let totalProductosCarrito = [];
// Desglosamos datos del producto seleccionado en el catálogo
const urlProducto = new URLSearchParams(window.location.search);
const titulo = urlProducto.get("titulo");
const precio = urlProducto.get("precio");
const imagen = decodeURIComponent(urlProducto.get("imagen"));
const ref    = urlProducto.get("ref")
const cantidadTotal = urlProducto.get("cantidadTotal");
const totalProductos = urlProducto.get("totalProductos");

// Obtenemos los elementos del DOM usando clases
const tituloElement = document.querySelector(".titulo");
const precioElement = document.querySelector(".precio");
const imagenElement = document.querySelector(".imagen");
const refElement    = document.querySelector(".ref");
const cantidadTotalElement = document.querySelector(".cantidad");
const totalProductosElement = document.querySelector(".totalProductos");

// Mostramos los parámetros en el HTML
tituloElement.textContent = titulo;
precioElement.textContent = precio;
imagenElement.src = imagen;
refElement.textContent = ref;
cantidadTotalElement.textContent = parseFloat(cantidadTotal).toFixed(2);
totalProductosElement.textContent = parseInt(totalProductos);


