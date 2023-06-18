let productosArray = [];
let totalProductos = 0;
let cantidad = 0;


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//Toma todos los elementos de los objetos con clase producto
const productosURL = document.querySelectorAll(".producto");
    
//recorre los objetos producto del html, añade evento "click" a cada imagen y guarda parametros en url
productosURL.forEach(producto => {
    const verProductoBtn = producto.querySelector(".imagen");
    verProductoBtn.addEventListener("click", () => {
        let imagen = producto.querySelector(".imagen").getAttribute("src");
        let titulo = producto.querySelector(".titulo").textContent;
        let precio = producto.querySelector(".precioLimpio").textContent;
        let ref = producto.querySelector(".ref").textContent;
        //Pasa datos producto a nueva pestaña
        let urlDetalle = `detalle.html?imagen=${encodeURIComponent(imagen)}&titulo=${encodeURIComponent(titulo)}&precio=${encodeURIComponent(precio)}&ref=${encodeURIComponent(ref)}&totalProductos=${totalProductos}&cantidadTotal=${cantidad}`;
        window.location.href = urlDetalle;
        });
    });


//Añadimos elementos con las clases especificadas a unas constantes
const carrito = document.querySelector(".totalProductos");
const cantidadTotal = document.querySelector(".cantidad");
const productosCarrito = document.querySelectorAll(".producto"); 

//Recorre objetos producto, añade evento "click" a cada boton y guarda parametros en una variable
//ejecuta lacuncion añadirProducto con esas variables creadas.
productosCarrito.forEach(producto => {
  const añadirBtn = producto.querySelector(".anadirProducto");
  añadirBtn.addEventListener("click", () => {
    let imagen = producto.querySelector(".imagen").getAttribute("src");
    let titulo = producto.querySelector(".titulo").textContent;
    let precio = producto.querySelector(".precioLimpio").textContent;
    let ref = producto.querySelector(".ref").textContent;
    añadirProducto(imagen, titulo, precio, ref);
  });
});

//Función para añadir un producto al carrito
function añadirProducto(imagen, titulo, precio, ref) {
  const producto = { imagen, titulo, precio, ref };
  productosArray.push(producto);
  cantidad += parseFloat(producto.precio);
  totalProductos++;

  //Actualiza el carrito
  actualizarCarrito();
}

//Función para actualizar el contador de productos y mostrar los productos en el carrito
function actualizarCarrito() {
  //Actualiza el contador de productos
  carrito.textContent = totalProductos;
  //Actualiza cantidad total y se limita a dos decimales.
  cantidadTotal.textContent = cantidad.toFixed(2);
}

function desdeDetalle(){
//Desglosamos datos del producto seleccionado en el catálogo
const urlProducto = new URLSearchParams(window.location.search);
let cantidadTotal2 = parseFloat(urlProducto.get("precio"));
let totalProductos2 = parseInt(urlProducto.get("unidades"));

//Obtenemos los elementos del DOM usando clases
let cantidadTotalElement = document.querySelector(".cantidad");
let totalProductosElement = document.querySelector(".totalProductos");

//Mostramos los parámetros en el HTML
cantidadTotalElement.textContent = cantidadTotal2.toFixed(2);
totalProductosElement.textContent = totalProductos2;
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    //Pasamos valores de campos a variables
    let nombre = document.querySelector('.nom').value;
    let telefono = document.querySelector('.tel').value;
    let apellidos = document.querySelector('.apel').value;
    let correo = document.querySelector('.correo').value;
    let mensaje = document.querySelector('textarea').value;

    //Verificamos si los campos están vacíos
    if (!nombre || !telefono || !apellidos || !correo || !mensaje) {
      swal("Error","Completa los campos del formulario","warning");
      return;
    }

    swal("Perfecto","Formulario enviado correctamente","success");
    
    //Restablece los campos del formulario
    formulario.reset();
  });
});







    