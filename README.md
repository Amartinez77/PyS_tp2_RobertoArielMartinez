# 🏋️‍♂️ Be | Strong - Sitio Web para Gimnasio

**Be | Strong** es un sitio web moderno y responsive desarrollado para un gimnasio, con el objetivo de ofrecer a los usuarios una experiencia visual atractiva y funcional para conocer las clases, entrenadores, planes, blog y formas de contacto.

[![Preview del Sitio](https://i.postimg.cc/VkYSv8j4/Captura-de-pantalla-2025-04-18-001529.png)](https://amartinez77.github.io/PyS_tp2_RobertoArielMartinez/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌐 Demo

🔗 [Ver sitio en vivo](https://amartinez77.github.io/PyS_tp2_RobertoArielMartinez/) 

---

## 📁 Estructura del Proyecto

```bash
BeStrong/ 
  ├── index.html 
  ├── pages/ │ 
    ├── clases.html │ 
    ├── entrenadores.html │ 
    ├── planes.html │ 
    ├── blog.html │ 
    └── contacto.html 
  ├── assets/ │ 
    ├── css/ │ 
      │ └── style.css │ 
    ├── js/ │ 
      │ └── main.js │ 
    ├── img/ │ 
      │ ├── imagenes del sitio │ 
    └── bootstrap/ │ 
      ├── css/ │ 
        │ └── bootstrap.min.css │ 
      └── js/ 
        │ └── bootstrap.bundle.min.js
```


---

## 🚀 Funcionalidades Destacadas

- Diseño responsive usando **Bootstrap 5**
- Navbar con logo adaptable (estilo completo en desktop y simplificado en mobile)
- Filtros de clases por categoría (sin JS o con jQuery)
- Galería tipo Masonry
- Contadores animados con CountUp.js
- Páginas individuales para clases, entrenadores, planes, blog y contacto
- Sección de comentarios con jQuery dinámico
- Animaciones con AOS.js

---

## 🛠️ Tecnologías Utilizadas

- HTML5 / CSS3
- Bootstrap 5
- JavaScript / jQuery
- CountUp.js
- AOS (Animate On Scroll)
- Masonry.js

---

## 📸 Capturas

[![Captura-de-pantalla-2025-04-18-002230.png](https://i.postimg.cc/4dCsK6DZ/Captura-de-pantalla-2025-04-18-002230.png)](https://postimg.cc/zLk96gDP)

---

## 🎨 Decisiones de diseño

El diseño del sitio **Be | Strong** busca transmitir una estética moderna, limpia y profesional, ideal para un gimnasio que combina fuerza, bienestar y estilo.

### 📐 Estructura general

- Diseño responsive usando **Bootstrap 5** (versión descargada localmente).
- Navegación fija superior (`fixed-top`) para acceso rápido entre secciones.
- Páginas distribuidas en una carpeta `/pages` para mantener un orden modular.
- Secciones principales: Clases, Entrenadores, Planes, Blog y Contacto.

### 🎨 Paleta de colores

La combinación de colores fue elegida para equilibrar fuerza y elegancia:

| Color         | Uso                                | Código     |
|---------------|-------------------------------------|------------|
| Rojo fuerte   | Acentos, separadores (`|`) del logo | `#e63946`  |
| Rojo oscuro   | Hover del logo                     | `#c1121f`  |
| Gris oscuro   | Fondo del navbar                    | `#212529`  |
| Blanco        | Fondo de tarjetas y textos          | `#ffffff`  |
| Gris claro    | Fondos secundarios y hover sutil    | `#f8f9fa`  |

### 🔠 Tipografía

- **Fuente principal**: `"Arial", sans-serif` (limpia y legible)
- **Logo**: usa estilo `inline-flex` con fondo translúcido y efecto hover.
- Hover sobre `Be | Strong` con efecto `transform: scale(1.3)` para dar dinamismo visual.

### 📱 Responsive

- El sitio está optimizado para móviles, tabletas y escritorios.
- En pantallas pequeñas:
  - El **navbar** se convierte en menú hamburguesa.
  - El logo se simplifica a texto plano con estilo minimalista.
  - Las tarjetas de clases se apilan verticalmente (1 por fila).
- En pantallas medianas o grandes:
  - Las tarjetas se muestran de a 2 por fila.

---

Estas decisiones apuntan a mejorar la experiencia de usuario, la estética y la escalabilidad del proyecto.

## 🚀 Instalación y uso

Este proyecto no requiere instalación de dependencias externas (como NPM o frameworks JS). Todo está incluido de forma local, por lo que solo necesitás un navegador para ejecutarlo.

### ✅ Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Editor de código recomendado: [Visual Studio Code](https://code.visualstudio.com/)
- Servidor local opcional para ver el sitio correctamente (por ejemplo, Live Server en VS Code)

### 🔧 Clonar el repositorio

```bash
git clone https://github.com/Amartinez77/PyS_tp2_RobertoArielMartinez.git
cd be-strong


## 🧑‍💻 Autor

Desarrollado por **Roberto Ariel Jesus Martinez**  
📧 Contacto: ariel.mtz85@gmail.com

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.




