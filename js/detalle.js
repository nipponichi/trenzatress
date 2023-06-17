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

productosCarrito.forEach(producto => {
    const añadirBtn = producto.querySelector(".anadirProducto");
    añadirBtn.addEventListener("click", () => {
      const imagen = producto.querySelector(".imagen").getAttribute("src");
      const titulo = producto.querySelector(".titulo").textContent;
      const precio = producto.querySelector(".precio").textContent;
      const ref = producto.querySelector(".ref").textContent;
      añadirProducto(imagen, titulo, precio, ref);
    });
  });
  
  function actualizarCarrito() {
    //Actualiza el contador de productos
    carrito.textContent = totalProductosCarrito;
    //Actualiza cantidad total y se limita a dos decimales.
    cantidadTotal.textContent = cantidad.toFixed(2);
  }
  
  //Función para añadir un producto al carrito
  function añadirProducto(imagen, titulo, precio, ref) {
    const producto = { imagen, titulo, precio, ref };
    productosArray.push(producto);
    cantidad += parseFloat(producto.precio);
    totalProductos++;
  
    //Actualiza el carrito
    actualizarCarrito();
  }