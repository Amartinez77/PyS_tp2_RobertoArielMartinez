// Inicialización de librerías
document.addEventListener("DOMContentLoaded", function () {
  // AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
  });

  // Mobile-first: Menú desplegable mejorado
  $(".dropdown-toggle").on("click", function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this).next(".dropdown-menu").slideToggle();
    }
  });
});
