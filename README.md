# 🍽️ Maison Dorée — Fine Dining Landing Page

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)

Landing page de alta gama para restaurante de fine dining francés, desarrollada como parte de un portfolio de proyectos web profesionales.




## ✨ Features

- **SEO optimizado** → Metadata completa, OpenGraph, Twitter Cards y robots.txt
- **100% Responsive** → Mobile first, adaptado a todos los dispositivos
- **Animaciones fluidas** → Parallax, scroll animations y transiciones con Framer Motion
- **Performance** → Fuentes optimizadas con `next/font`, lazy loading en imágenes
- **UX/UI de alto nivel** → Diseño inspirado en branding de restaurantes Michelin
- **Navbar inteligente** → Transparente en hero, glass effect al hacer scroll
- **Formulario de reservas** → Con validación y feedback visual al usuario

---

## 🗂️ Secciones

|
 Sección 
|
 Descripción 
|
|
|
**
Hero
**
|
 Full screen con parallax y animaciones de entrada 
|
|
**
Nosotros
**
|
 Historia del restaurante con stats animados 
|
|
**
Menú
**
|
 Cards por categoría con tabs interactivos 
|
|
**
Experiencia
**
|
 Galería grid con hover effects 
|
|
**
Reservas
**
|
 Formulario completo con validación 
|
|
**
Reviews
**
|
 Slider de testimonios con cards sincronizadas 
|
|
**
Footer
**
|
 Contacto, horarios, redes y mapa 
|

---

## 🛠️ Stack
Next.js 14 → App Router, SSG, SEO
TypeScript → Tipado estático
Tailwind CSS 4 → Estilos utility-first
Framer Motion → Animaciones y transiciones
Lucide React → Iconografía
next/font → Google Fonts optimizadas

text

---

## 🚀 Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/landing-restaurant.git
cd landing-restaurant
2. Instalar dependencias
bash
npm install
3. Correr en desarrollo
bash
npm run dev
4. Build para producción
bash
npm run build
npm start
📁 Estructura del proyecto
text
landing-restaurant/
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Root layout con metadata SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── Navbar.tsx           # Navegación sticky con glass effect
│   ├── Hero.tsx             # Sección hero con parallax
│   ├── About.tsx            # Historia y stats del restaurante
│   ├── Menu.tsx             # Menú interactivo por categorías
│   ├── Experience.tsx       # Galería de experiencia
│   ├── Reservations.tsx     # Formulario de reservas
│   ├── Testimonials.tsx     # Slider de testimonios
│   └── Footer.tsx           # Footer completo
├── lib/
│   └── constants.ts         # Datos del restaurante y menú
└── public/
    └── logo.png             # Logo del restaurante
🎨 Paleta de colores
Color	Hex	Uso
Gold	#C9A96E	Acentos, CTAs, íconos
Gold Light	#E8D5B0	Gradientes, hovers
Dark	#1A1A1A	Fondo principal
Dark Secondary	#2A2A2A	Fondo secciones alternas
📱 Responsive
Breakpoint	Dispositivo
< 768px	Mobile
768px — 1024px	Tablet
> 1024px	Desktop
📈 SEO
✅ Title y description optimizados
✅ OpenGraph para redes sociales
✅ Twitter Cards
✅ Robots configurado
✅ Canonical URL
✅ Lang attribute en HTML
✅ Alt text en imágenes
✅ Aria-labels en botones
🚀 Deploy
El proyecto está configurado para deployar en Vercel con cero configuración.


Desarrollado por Lorena Artieda


