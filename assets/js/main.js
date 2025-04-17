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

  // Slider testimonios index
  $(document).ready(function () {
    const $carousel = $("#testimonialCarousel");

    $carousel.carousel({
      interval: 3000,
      pause: "hover",
      wrap: true,
    });
  });
});

// jQuery DOM ready
$(document).ready(function () {
  // Filtro clases.html
  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    const filterValue = $(this).attr("data-filter");

    if (filterValue === "*") {
      $(".grid-item").show();
    } else {
      $(".grid-item").hide();
      $(filterValue).show();
    }
  });

  // Rating entrenadores.html
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

  // Toggle planes.html
  $('#billingSwitch').on('change', function () {
    $('.price').each(function () {
      const isAnnual = $('#billingSwitch').is(':checked');
      const newPrice = isAnnual ? $(this).data('annually') : $(this).data('monthly');
      $(this).text(newPrice);
    });
  });

  // Tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(t => new bootstrap.Tooltip(t));

  // Filtro blog.html
  $('.filter-btn').click(function () {
    const category = $(this).data('filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (category === 'all') {
      $('.blog-post').removeClass('d-none');
    } else {
      $('.blog-post').addClass('d-none');
      $(`.blog-post[data-category="${category}"]`).removeClass('d-none');
    }
  });

  // Contacto avanzado solo en contacto.html
  if ($('#contactForm').length > 0) {
    $('#contactForm input, #contactForm textarea').on('input', function () {
      if (this.checkValidity()) {
        $(this).removeClass('is-invalid').addClass('is-valid');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
      }
    });

    $('#contactForm').on('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      $('#contactForm input[required], #contactForm textarea[required]').each(function () {
        if (!this.checkValidity()) {
          $(this).addClass('is-invalid');
          isValid = false;
        }
      });

      if (isValid) {
        $('#spinner').fadeIn();

        setTimeout(function () {
          $('#spinner').fadeOut();
          $('#confirmModal').modal('show');
          $('#contactForm')[0].reset();
          $('#contactForm input, #contactForm textarea').removeClass('is-valid is-invalid');
        }, 2000);
      }
    });
  }

  AOS.refresh();
});
