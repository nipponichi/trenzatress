let productosArray = [];
let totalProductos = 0;
let cantidad = 0;

/*
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
*/
//Toma todos los elementos de los objetos con clase producto
const productosURL = document.querySelectorAll(".producto");
    
    //recorre los objetos producto del html, añade evento "click" a cada imagen y guarda parametros en url
productosURL.forEach(producto => {
    const verProductoBtn = producto.querySelector(".imagen");
    verProductoBtn.addEventListener("click", () => {
        const imagen = producto.querySelector(".imagen").getAttribute("src");
        const titulo = producto.querySelector(".titulo").textContent;
        const precio = producto.querySelector(".precio").textContent;
        const ref = producto.querySelector(".ref").textContent;
        //Pasa datos producto a nueva pestaña
        const urlDetalle = `detalle.html?imagen=${encodeURIComponent(imagen)}&titulo=${encodeURIComponent(titulo)}&precio=${encodeURIComponent(precio)}&ref=${encodeURIComponent(ref)}&totalProductos=${totalProductos}&cantidadTotal=${cantidad}`;
        window.location.href = urlDetalle;
        });
    });


//Añadimos elementos con las clases especificadas a unas constantes
const carrito = document.querySelector(".totalProductos");
const cantidadTotal = document.querySelector(".cantidad");
const productosCarrito = document.querySelectorAll(".producto");   

//Función para actualizar el contador de productos y mostrar los productos en el carrito
function actualizarCarrito() {
  //Actualiza el contador de productos
  carrito.textContent = totalProductos;
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

//recorre objetos producto, añade evento "click" a cada boton y guarda parametros en una variable
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

    