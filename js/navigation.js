let productosArray = [];
let totalProductos = 0;
let cantidad = 0;


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

//Hace visible un menu desplegable segun el ancho de pantalla marcado en 
//el css (550px), se hace para dispositivos móviles.
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
        //De la imagen tomamos la ruta para enviarla a traves de la variable
        let imagen = producto.querySelector(".imagen").getAttribute("src");
        let titulo = producto.querySelector(".titulo").textContent;
        let precio = producto.querySelector(".precioLimpio").textContent;
        let ref = producto.querySelector(".ref").textContent;
        //Pasa datos producto en forma de url a una variable
        let urlDetalle = `detalle.html?imagen=${encodeURIComponent(imagen)}&titulo=${encodeURIComponent(titulo)}&precio=${encodeURIComponent(precio)}&ref=${encodeURIComponent(ref)}&totalProductos=${totalProductos}&cantidadTotal=${cantidad}`;
        //La pestaña toma esa url como destino al que navegar 
        window.location.href = urlDetalle;
        });
    });


//Añadimos elementos con las clases especificadas a unas constantes
const carrito = document.querySelector(".totalProductos");
const cantidadTotal = document.querySelector(".cantidad");
const productosCarrito = document.querySelectorAll(".producto"); 

//Recorre objetos producto, añade evento "click" a cada boton y guarda parametros en una variable
//ejecuta la función añadirProducto con esas variables creadas.
productosCarrito.forEach(producto => {
  const añadirBtn = producto.querySelector(".anadirProducto");
  añadirBtn.addEventListener("click", () => {
    //De la imagen tomamos la ruta para enviarla a traves de la variable
    let imagen = producto.querySelector(".imagen").getAttribute("src");
    let titulo = producto.querySelector(".titulo").textContent;
    let precio = producto.querySelector(".precioLimpio").textContent;
    let ref = producto.querySelector(".ref").textContent;
    //Ejecuta esta función con los parametros cargados
    añadirProducto(imagen, titulo, precio, ref);
  });
});

//Función para añadir un producto al carrito
function añadirProducto(imagen, titulo, precio, ref) {
  let producto = { imagen, titulo, precio, ref };
  //Añade productos a array, se hace para mas tarde recorrer el array
  //en otra función y poder comparar la ref del producto y 
  //no duplicar productos del mismo tipo en el carrito
  productosArray.push(producto);
  //Toma de producto el valor precio, lo "entiende" como número decimal y lo suma a cantidad.
  cantidad += parseFloat(producto.precio);
  //Añade +1 al total de productos del carrito.
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

//Función para mantener los valores del carrito al volver a catalogo desde detalle
function desdeDetalle(){
//Desglosamos datos del producto seleccionado en el catálogo
const urlProducto = new URLSearchParams(window.location.search);
//Asignamos esos valores a unas variables
let cantidadTotal2 = parseFloat(urlProducto.get("precio"));
let totalProductos2 = parseInt(urlProducto.get("unidades"));

//Obtenemos los elementos del DOM usando clases
let cantidadTotalElement = document.querySelector(".cantidad");
let totalProductosElement = document.querySelector(".totalProductos");

//Mostramos los parámetros en el HTML de cara al usuario
cantidadTotalElement.textContent = cantidadTotal2.toFixed(2);
totalProductosElement.textContent = totalProductos2;
}

//Se asegura que el contenido de la web esta completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  //Al clicar "enviar" (botón tipo 'submit') se ejecuta esta función flecha
  formulario.addEventListener('submit', (evento) => {
    //Evitamos que el formulario se envíe de
    //forma predeterminada y así se pueda ejecutar el código
    evento.preventDefault();

    //Pasamos valores de campos (clases html) a variables
    let nombre = document.querySelector('.nom').value;
    let telefono = document.querySelector('.tel').value;
    let apellidos = document.querySelector('.apel').value;
    let correo = document.querySelector('.correo').value;
    let mensaje = document.querySelector('.reason').value;

    //Verificamos si alguno de los campos está vacío
    if (!nombre || !telefono || !apellidos || !correo || !mensaje) {
      swal("Error","Completa los campos del formulario","warning");
      return;
    }

    //Lanzamos este mensage si todos los campos contienen información
    swal("Perfecto","Formulario enviado correctamente","success");
    
    //Restablece los campos del formulario
    formulario.reset();
  });
});







    