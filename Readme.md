## E-commerce Dango

Este proyecto es una aplicación web de comercio electrónico desarrollada con HTML, CSS (usando TailwindCSS), y JavaScript. Incluye características como un menú de navegación responsivo, carruseles de imágenes y texto usando SwiperJS, y un carrito de compras funcional almacenado en `localStorage`.

### Características

- **Navegación Responsiva**: Un menú de navegación adaptable que incluye un botón de hamburguesa para dispositivos móviles.
- **Carruseles**: Dos carruseles SwiperJS, uno para el texto y otro para las imágenes en la sección del héroe. Además, un carrusel para productos destacados.
- **Carrito de Compras**: Un carrito de compras funcional con almacenamiento en `localStorage`, permitiendo a los usuarios añadir y eliminar productos.

### Tecnologías Utilizadas

- **HTML**
- **CSS con TailwindCSS**
- **JavaScript**
- **SwiperJS**: Para los carruseles de imágenes y texto.

### Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/PolCarva/e-commerce-dango.git
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd ecommerce-dango
   ```

3. Abre el archivo `index.html` en tu navegador preferido.

### Estructura del Proyecto

```
ecommerce-dango/
├── assets/
│   ├── FotoHero.png
│   ├── hero01.png
│   ├── product01.png
│   ├── product02.png
│   ├── product03.png
│   └── product04.png
├── style.css
├── app.js
└── index.html
```

### Archivos Clave

- **index.html**: Contiene la estructura principal de la página y los elementos HTML.
- **style.css**: Archivo de estilos personalizados.
- **app.js**: Archivo de JavaScript que maneja la lógica del carrusel y el carrito de compras.

### Uso

#### Navegación

- El menú de navegación es responsivo y cambiará a un botón de hamburguesa en dispositivos móviles. Haciendo clic en el botón, el menú se desplegará.

#### Carrusel de Texto e Imágenes

- Los carruseles de texto e imágenes en la sección del héroe cambiarán automáticamente y también pueden ser controlados mediante los botones de navegación.

#### Carrito de Compras

- Los productos pueden ser añadidos al carrito haciendo clic en el botón "Buy Now".
- El contenido del carrito se almacena en `localStorage` y se muestra en un modal.
- Los productos pueden ser eliminados del carrito mediante el botón "Remove".

### Despliegue

El proyecto está desplegado en Vercel y se puede acceder a través del siguiente enlace: [E-commerce Dango](https://e-commerce-dango.vercel.app/)

