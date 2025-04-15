document.addEventListener("DOMContentLoaded", function () {
  // AOS (Animate On Scroll)
  AOS.init();

  // Menú desplegable mobile
  $(".dropdown-toggle").on("click", function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this).next(".dropdown-menu").slideToggle();
    }
  });

  // Elementos con números a animar
  const statElements = document.querySelectorAll(".stat-number");

  const startCountUp = () => {
    statElements.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target"));
      const countUpInstance = new countUp.CountUp(el, target, {
        duration: 2,
        separator: ".",
      });
      if (!countUpInstance.error) {
        countUpInstance.start();
      } else {
        console.error(countUpInstance.error);
      }
    });
  };

  // Detectar scroll hacia la sección de estadísticas
  const statsSection = document.querySelector("#stats");

  let hasStarted = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          startCountUp();
          observer.disconnect(); // Ya no hace falta observar
        }
      });
    },
    { threshold: 0.3 }
  );

  if (statsSection) {
    observer.observe(statsSection);
  }

  // slider testimonios index
  $(document).ready(function () {
    const $carousel = $("#testimonialCarousel");

    $carousel.carousel({
      interval: 3000, // 3 segundos
      pause: "hover",
      wrap: true,
    });
  });
});
