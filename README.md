# 🚀 Portafolio CV - Full Stack Developer & Cybersecurity Analyst

Una página web moderna, responsive y profesional que sirve como Currículum Vitae y portafolio personal. Diseñada para presentar habilidades como Full Stack Developer, SOC Cybersecurity Analyst y futuro DevSecOps.

## ✨ Características

- **Diseño Moderno y Responsive**: Adaptable a todos los dispositivos
- **Animaciones Suaves**: Efectos visuales con AOS (Animate On Scroll)
- **Secciones Completas**: Hero, Sobre Mí, Experiencia, Educación, Certificaciones, Habilidades, Proyectos, Badges y Contacto
- **Sección Especial de IA**: Para cursos y proyectos de Inteligencia Artificial
- **Formulario de Contacto Funcional**: Con validaciones y notificaciones
- **Optimización SEO**: Meta tags y estructura semántica
- **Código Limpio**: Fácil de personalizar y mantener

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con CSS Grid y Flexbox
- **JavaScript Vanilla**: Funcionalidades interactivas
- **AOS Library**: Animaciones al hacer scroll
- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Tipografías Inter y Poppins

## 📁 Estructura del Proyecto

```
portfolio-cv/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── assets/             # Carpeta de recursos
│   ├── profile.jpg     # Foto de perfil
│   ├── project1.jpg    # Imágenes de proyectos
│   ├── project2.jpg
│   ├── project3.jpg
│   └── cv.pdf          # Archivo CV para descarga
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Clonar o Descargar
```bash
git clone [tu-repositorio]
cd portfolio-cv
```

### 2. Personalizar Contenido

#### Información Personal
Edita el archivo `index.html` y actualiza:
- Nombre completo
- Roles profesionales
- Descripción personal
- Información de contacto
- Enlaces a redes sociales

#### Experiencia Laboral
En la sección de experiencia, actualiza:
- Nombres de empresas
- Cargos y fechas
- Logros y métricas específicas

#### Educación y Certificaciones
- Agrega tus títulos académicos
- Incluye certificaciones con logos
- Actualiza la sección de cursos de IA

#### Habilidades Técnicas
Modifica los niveles de habilidad en `script.js`:
```javascript
// En la función animateSkillBars()
const level = bar.getAttribute('data-level'); // Cambia los valores en HTML
```

#### Proyectos
- Agrega imágenes de proyectos en `assets/`
- Actualiza descripciones y tecnologías
- Incluye enlaces a GitHub y demos

### 3. Agregar Imágenes

#### Foto de Perfil
- Coloca tu foto profesional en `assets/profile.jpg`
- Formato recomendado: 300x300px, JPG o PNG

#### Imágenes de Proyectos
- Agrega capturas de pantalla de tus proyectos
- Nombra como `project1.jpg`, `project2.jpg`, etc.
- Formato recomendado: 400x300px

#### CV para Descarga
- Coloca tu CV en PDF en `assets/cv.pdf`
- El botón "Descargar CV" lo enlazará automáticamente

### 4. Personalizar Colores

En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #2563eb;      /* Color principal */
    --secondary-color: #06b6d4;    /* Color secundario */
    --accent-color: #10b981;       /* Color de acento */
    /* ... más colores */
}
```

### 5. Desplegar

#### Opción 1: GitHub Pages
1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://tuusuario.github.io/turepositorio`

#### Opción 2: Netlify
1. Conecta tu repositorio de GitHub
2. Netlify detectará automáticamente los archivos
3. Tu sitio se desplegará automáticamente

#### Opción 3: Vercel
1. Conecta tu repositorio
2. Vercel desplegará automáticamente
3. Obtendrás una URL personalizada

## 🎨 Personalización Avanzada

### Agregar Nuevas Secciones
1. Crea la estructura HTML en `index.html`
2. Agrega estilos en `styles.css`
3. Incluye animaciones en `script.js`

### Modificar Animaciones
```javascript
// En script.js, modifica las configuraciones de AOS
AOS.init({
    duration: 800,        // Duración de animación
    easing: 'ease-in-out', // Tipo de easing
    once: true,           // Animar solo una vez
    offset: 100           // Offset para trigger
});
```

### Agregar Nuevas Funcionalidades
- Formularios adicionales
- Galerías de imágenes
- Blog integrado
- Chat en vivo
- Analytics

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Mantenimiento

### Actualizar Contenido
- Modifica directamente los archivos HTML
- Los cambios se reflejan inmediatamente
- No requiere compilación

### Agregar Nuevas Certificaciones
1. Agrega el HTML en la sección de certificaciones
2. Incluye el logo de la institución
3. Actualiza fechas y detalles

### Modificar Proyectos
1. Reemplaza imágenes en `assets/`
2. Actualiza descripciones en HTML
3. Modifica tecnologías utilizadas

## 🚀 Optimizaciones Recomendadas

### Performance
- Comprime imágenes antes de subir
- Usa formatos WebP cuando sea posible
- Minimiza archivos CSS y JS para producción

### SEO
- Actualiza meta tags en `index.html`
- Agrega Open Graph tags
- Incluye schema markup

### Accesibilidad
- Agrega atributos alt a imágenes
- Usa contraste adecuado
- Implementa navegación por teclado

## 📞 Soporte

Si necesitas ayuda para personalizar tu portafolio:

1. Revisa este README
2. Consulta la documentación de las librerías utilizadas
3. Abre un issue en el repositorio

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta creando tu portafolio profesional! 🎉**

*Desarrollado con ❤️ para la comunidad de desarrolladores* 