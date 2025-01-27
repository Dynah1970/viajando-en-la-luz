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
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.parentElement.querySelector('.description');
        const isHidden = description.style.display === 'none' || description.style.display === '';
        description.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Leer menos' : 'Leer más';
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

 // Agregar acción al botón de WhatsApp
 const whatsappButton = document.querySelector('.whatsapp');
 whatsappButton.addEventListener('click', () => {
     window.location.href = "https://wa.me/1234567890"; // Reemplazar con tu número
 });


 // expandir la lectura en terapias htmldocument.querySelectorAll('.expand').forEach(button => {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.parentElement.querySelector('.description');
        const isHidden = description.style.display === 'none' || description.style.display === '';
        description.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Leer menos' : 'Leer más';
    });
});


//contacto html para talleres  => {
   // Mostrar/ocultar opciones según el interés
   document.getElementById('interes').addEventListener('change', function() {
    const seleccion = this.value;
    document.querySelector('.opciones-talleres').style.display = seleccion === 'taller' ? 'block' : 'none';
    document.querySelector('.opciones-terapias').style.display = seleccion === 'terapia' ? 'block' : 'none';
});
