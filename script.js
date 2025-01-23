// Alternar menú hamburguesa en dispositivos móviles
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
  
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
  
  // Simulación del botón "Comprar"
  const btnsComprar = document.querySelectorAll(".btn-comprar");
  btnsComprar.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Taller añadido al carrito. Próximamente implementaremos la función de pago.");
    });
  });
  
  // Desplazamiento suave al hacer clic en enlaces del menú
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeIcon = document.getElementById("close-icon");

    // Abrir el menú hamburguesa
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // Cerrar el menú hamburguesa
    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});
 // funcion de preguntas frecuentes abre el signo de mas para ver la informacion
function toggleFaq(element) {
  const faqItem = element.parentNode;
  faqItem.classList.toggle("open");
}
