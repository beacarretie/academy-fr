# Studio Tattoos Frontend database

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#requisitos-mínimos">Requisitos mínimos</a></li>
    <li><a href="#pautas-recomendadas-para-el-desarrollo-del-proyecto">Pautas recomendadas para el desarrollo del proyecto</a></li>
    <li><a href="#funcionalidades-mínimas-requeridas-(MVP)">Funcionalidades mínimas requeridas (MVP)</a></li>
    <li><a href="#tecnologías">Tecnologías</a></li>
    <li><a href="#mejoras">Mejoras</a></li>
    <li><a href="#vídeo">Vídeo</a></li>
    
  </ol>
</details>

## Objetivo
El proyecto final de Bootcamp Full Stack consta de dos partes, Frontend y Backend. Se espera que el alumnado demuestre todos los conocimientos adquiridos a lo largo de la formación.
Respecto a la parte frontend, el alumnado combinará los conocimientos adquiridos en las tecnologías Frontend React y Redux.

El objetivo será crear una SPA (Single Page Application) de temática libre. Para esto elegimos una aplicación que recogerá las citas entre profesorado y alumnado de una academia.
Esta aplicación se espera que se desarrolle en React.

## Requisitos mínimos

1. Presentación de un README imprescindible en cada repositorio.
2. Aplicar Redux
3. Componentes funcionales creados utilizando Hooks.
4. Estructura de carpetas correcta, tanto de componentes containers como de servicios.
5. Uso de CSS modularizado (cada componente con su CSS funcional propio).
6. React-router-dom para gestor de vistas sin refrescar la página (SPA).
7. Vistas que cubran las necesidades de registro, login y edición de perfil.
8. Vistas que nos permitan consumir los Endpoints creados de la API en referencia a los dos CRUDS obligatorios.

## Pautas recomendadas para el desarrollo del proyecto

1. Los componentes no podrán sobrepasar las 300 líneas de código.
2. Las funciones no deberán sobrepasar las 75 líneas de código.
3. Homogeneidad de código.
4. Aplicación de buenas prácticas de desarrollo, tales como:
5. Utilizar nombres de variables, funciones y clases descriptivos y significativos.
6. Escribir código legible y fácil de entender, con una estructura clara y coherente.
7. Escribir comentarios claros y concisos que expliquen el propósito y la funcionalidad del código.
8. Utilizar constantes en lugar de valores literales para hacer el código más fácil de mantener y modificar.
9. Dividir el código en funciones o métodos más pequeños y específicos, para hacerlo más fácil de entender y depurar.
10. Evitar la duplicación de código, utilizando funciones o métodos genéricos en su lugar.
11. Utilizar estructuras de control de flujo de forma clara y coherente, evitando anidaciones excesivas.
12. Utilizar excepciones para manejar errores y situaciones imprevistas, en lugar de usar comprobaciones condicionales complejas.
13. Realizar pruebas unitarias para asegurarse de que el código funcione correctamente en todas las situaciones previstas.
14. Uso correcto de GIT.

Extras:
- Uso de tecnologías complementarias a Redux (useContext; etc...)
- Frontend disponible en producción con AWS o proyecto dockerizado.

## Funcionalidades mínimas requeridas (MVP)

Teniendo en cuenta los requisitos, podemos asesorar al respecto de las vistas necesarias para el correcto funcionamiento de la aplicación:

1. Los servicios de registro necesarios.
2. Los servicios de login necesarios.
3. Las vistas de perfil necesarias.
4. Vista de citas que tengo como estudiante (solo las propias).
5. Creación y modificación de citas.
6. Listado de todo el profesorado y sus datos de contacto (público para todos)
7. Vista de todos los usuarios y citas existentes en la plataforma (como administrador).

Extras:

- Ver una cita en detalle.
- Paginación
- Búsqueda dinámica de citas.
- Editar y borrar datos ajenos (como administrador).

## Tecnologías

Para el desarrollo de esta parte frontal usaremos ReactJs instalado mediante
Vite, junto con componentes funcionales, asumiendo buenas prácticas en la medida
de lo posible (max 400 líneas por componente y 75 por función).
Nos valdremos de las nomenclaturas de ES6 en adelante, el dominio sobre las promesas, 
hooks, props, así como la funcionalidad de async/await.

## Mejoras

Se tendrá en cuenta la buena explicación del mismo en el README con ilustraciones y animaciones (gif, svg, etc.) al igual que los comentarios de calidad en el código.

## Vídeo

Pequeña demo de las funcionalidades que se pueden hacer desde la aplicación. 

- Vista de listado de profesores y su contacto
- Registro de usuarios
- Login de usuarios (dependiendo del rol redirigirá a una vista u otra)
- Vista de perfil estudiante (vista de datos de perfil y su modificación) +  Vista de citas y su posible eliminación.
- Vista de perfil de profesor. La misma que estudiante pero pudiendo crear y modificar citas. (el perfil estudiante no podrá crear citas. Para asegurar la disponibilidad del profesor, deberá contactar con el desde el listado de contactos y este profesor será quien cree la cita y será visible desde el panel de ambos)
- Vista de perfil admin. Vista y eliminación de usuarios y citas de todo el alumnado y profesorado de la academia.

<video src={academy-fr} autoPlay loop muted>

</details>