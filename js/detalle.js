let totalProductosCarrito = [];

//Desglosamos datos del producto seleccionado en el catálogo
const urlProducto = new URLSearchParams(window.location.search);
const titulo = urlProducto.get("titulo");
const precio = urlProducto.get("precio");
const imagen = decodeURIComponent(urlProducto.get("imagen"));
const ref = urlProducto.get("ref");
let cantidadTotal = parseFloat(urlProducto.get("cantidadTotal"));
let totalProductos = parseInt(urlProducto.get("totalProductos"));

//Obtenemos los elementos del DOM usando clases
const tituloElement = document.querySelector(".titulo");
const precioElement = document.querySelector(".precioLimpio");
const imagenElement = document.querySelector(".imagen");
const refElement = document.querySelector(".ref");
const cantidadTotalElement = document.querySelector(".cantidad");
const totalProductosElement = document.querySelector(".totalProductos");

//Mostramos los parámetros en el HTML
tituloElement.textContent = titulo;
precioElement.textContent = precio;
imagenElement.src = imagen;
refElement.textContent = ref;
cantidadTotalElement.textContent = cantidadTotal.toFixed(2);
totalProductosElement.textContent = totalProductos;

//Obtiene referencia del botón
let botonAnadir = document.getElementById("anadirProducto");

//Añade evento "click" al botón para obtener el valor del input value
botonAnadir.addEventListener("click", () => {
  let inputCantidad = document.getElementById('cantidad');
  let cantidad = parseInt(inputCantidad.value);
  actualizarCarrito(cantidad);
});

//Añade cantidad seleccionada y calcula el precio final, teniendo en cuenta
//las unidades que hay en el carrito y el precio ya calculado de estas.
function actualizarCarrito(cantidad) {
  let precioElement = document.querySelector('.precioLimpio');
  let precio = precioElement.textContent;
  console.log(precio);
  cantidadTotal += (precio * cantidad);
  console.log(cantidadTotal);
  totalProductos += cantidad;

  cantidadTotalElement.textContent = cantidadTotal.toFixed(2);
  totalProductosElement.textContent = totalProductos;
}

const carritoURL = document.getElementById("volver");

//Recorre los objetos producto del html, añade evento "click" a cada uno y guarda parámetros en url
    carritoURL.addEventListener("click", () => {
      console.log("check volver");
      const unidades = document.querySelector(".totalProductos").textContent;
      const precio = document.querySelector(".precioLimpio").textContent;
      //Pasa datos del producto a una nueva pestaña
      const urlCatalogo = `catalogo.html?totalProductos=${unidades}&cantidadTotal=${precio}`;
      console.log(urlCatalogo);
      window.location.href = urlCatalogo;
    });

 

