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


  $('#billingSwitch').on('change', function () {
    const isAnnual = $(this).is(':checked');

    // Actualizar precios
    $('.price').each(function () {
      const newPrice = isAnnual ? $(this).data('annually') : $(this).data('monthly');
      $(this).text(newPrice);
    });

    // Actualizar etiquetas visuales
    if (isAnnual) {
      $('#anualLabel').addClass('active');
      $('#mensualLabel').removeClass('active');
    } else {
      $('#mensualLabel').addClass('active');
      $('#anualLabel').removeClass('active');
    }
  });

  // Ejecutar al cargar para reflejar el estado inicial
  $('#billingSwitch').trigger('change');

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

  // Mostrar respuestas
$('.reply-link').on('click', function (e) {
  e.preventDefault();
  const replyForm = $(this).parent().find('.reply-form');
  replyForm.toggleClass('d-none');
  console.log('¿Está visible?', !replyForm.hasClass('d-none'));
});
  
  
// Manejar el envío de la respuesta
$(document).on('click', '.reply-form button', function () {
  const $form = $(this).closest('.reply-form');
  const respuestaTexto = $form.find('input').val().trim();

  if (respuestaTexto) {
    const nuevaRespuesta = `
      <div class="respuesta d-flex mt-3">
    <div class="avatar me-2">
      <img src="https://www.gravatar.com/avatar/?d=mp&s=40" alt="avatar" class="rounded-circle" width="40">
    </div>
    <div class="respuesta-body bg-light p-2 rounded border">
      <strong>Anónimo:</strong>
      <p class="mb-0">${respuestaTexto}</p>
    </div>
  </div>
    `;

    // Insertar la respuesta después del formulario
    $form.after(nuevaRespuesta);

    // Limpiar el input y ocultar el formulario
    $form.find('input').val('');
    $form.addClass('d-none');
  }
});

  $('#formComentario').on('submit', function (e) {
  e.preventDefault();

  const nombre = $('#nombre').val().trim();
  const comentario = $('#comentario').val().trim();

  if (!nombre || !comentario) return;

  const nuevoComentario = `
    <div class="comment mb-3 d-flex">
      <div class="avatar me-3">
        <img src="https://www.gravatar.com/avatar/?d=mp&s=50" alt="avatar" class="rounded-circle" width="50">
      </div>
      <div class="comment-body">
        <strong>${nombre}</strong>
        <p>${comentario}</p>
        <a href="#" class="reply-link">Responder</a>
        <div class="reply-form mt-2 d-none">
          <input type="text" class="form-control mb-2" placeholder="Escribí tu respuesta...">
          <button class="btn btn-sm btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  `;

    $('#comentarios').append(nuevoComentario);
    // Activar responder en los comentarios nuevos
$('.reply-link').off('click').on('click', function (e) {
  e.preventDefault();
  $(this).siblings('.reply-form').toggleClass('d-none');
});
  $('#formComentario')[0].reset();
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

  $(".rating-static").each(function () {
  const rating = parseFloat($(this).data("rating"));
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star filled"></i>';
  }

  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt filled"></i>';
  }

  const remaining = totalStars - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }

  $(this).html(starsHtml);
});

  AOS.refresh();
});
