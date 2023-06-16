/*const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const verProductoBtn = document.querySelector(".verProducto");

verProductoBtn.addEventListener("click", () => {
    window.location.href = "nueva-url.html";
});
    */  
document.addEventListener("DOMContentLoaded", function() {
const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
    const verProductoBtn = producto.querySelector(".verProducto");
    verProductoBtn.addEventListener("click", () => {
        const imagen = producto.querySelector(".imagen").getAttribute("src");
        const titulo = producto.querySelector(".titulo").textContent;
        const precio = producto.querySelector(".precio span").textContent;

        // Generar la URL de la página de detalle con los datos del producto
        const urlDetalle = `pagina1.html`;

        // Abrir la página de detalle en una nueva pestaña o ventana
        window.open(urlDetalle, "_blank");
    });
});
});