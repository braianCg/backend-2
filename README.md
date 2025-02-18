# backend-2
# Backend con Express, Handlebars y WebSocket

Este proyecto es una aplicación backend construida con Express, Handlebars y WebSocket. Proporciona una API para gestionar productos y carritos de compras, y utiliza Handlebars como motor de plantillas para renderizar vistas en el servidor.

## Requisitos

- Node.js v22.12.0 o superior
- npm (Node Package Manager)
Navega al directorio del proyecto:

Instala las dependencias del proyecto:

Uso
Ejecutar el servidor en modo desarrollo
Para iniciar el servidor en modo desarrollo, ejecuta el siguiente comando:

El servidor se ejecutará en http://localhost:3000.

Rutas de la API
GET /api/products: Obtiene todos los productos.
POST /api/products: Crea un nuevo producto.
GET /api/cart: Obtiene todos los carritos de compras.
Configuración de Handlebars
Las vistas de Handlebars se encuentran en el directorio views. Puedes agregar y modificar plantillas en este directorio.

Configuración de WebSocket
El servidor WebSocket está configurado para aceptar conexiones y manejar mensajes. Puedes personalizar el comportamiento en el archivo index.js.

Estructura del Proyecto
back/
├── src/
│   ├── app/
│   │   └── index.js
│   ├── config/
│   │   └── index.js
│   ├── data/
|   |   └──cart.json
│   │   └── products.json
│   ├── middlewares/
│   │   └── index.js
|   |   └──logger.js
|   |   └──multer.js
|   |   └──validationMiddleware-js
│   ├── routes/
│   │   ├── index.js
│   │   ├── products.js
│   │   └── cart.js
│   └── views/
│       └── index.hbs
└── package.json


Ejemplo de Plantilla Handlebars
Contribuir
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
Crea un Pull Request.