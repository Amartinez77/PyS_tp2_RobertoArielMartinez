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

// filtro clases.html
$(document).ready(function () {
  $(".filter-btn").click(function () {
    // Quitar clase activa de todos los botones
    $(".filter-btn").removeClass("active");
    // Agregar clase activa al botón actual
    $(this).addClass("active");

    // Obtener el valor del filtro
    const filterValue = $(this).attr("data-filter");

    if (filterValue === "*") {
      $(".grid-item").show();
    } else {
      $(".grid-item").hide();
      $(filterValue).show();
    }
  });

  // rating entrenadores.html

  $(".progress-bar").each(function () {
    let $bar = $(this);
    let width = $bar.data("width");
    $bar.animate(
      { width: width },
      {
        duration: 1000,
        step: function (now) {
          $bar.text(Math.floor(now) + "%");
        },
      }
    );
  });

  // toggle planes.html

  // Cambiar precio mensual/anual
$('#billingSwitch').on('change', function () {
  $('.price').each(function () {
    const isAnnual = $('#billingSwitch').is(':checked');
    const newPrice = isAnnual ? $(this).data('annually') : $(this).data('monthly');
    $(this).text(newPrice);
  });
});

// Activar tooltips de Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(t => new bootstrap.Tooltip(t));



});
