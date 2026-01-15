# ⚽ SportsDB - Proyecto ReactJS

**Alumno:** Jorge Sánchez Gallego  
**Profesor:** Antonio Rosales  
**Escuela/Curso:** Prometeo  
**Asignatura:** Desarrollo de Aplicaciones Web (ReactJS)

---

## 📖 Descripción del Proyecto

**SportsDB** es una aplicación web SPA (Single Page Application) desarrollada con **React** y **Vite** que permite a los usuarios explorar información detallada sobre competiciones deportivas, centrándose principalmente en la **Premier League**.

La aplicación consume datos en tiempo real de la API pública **TheSportsDB** y ofrece una experiencia de usuario fluida, moderna y totalmente adaptativa (Responsive), permitiendo a los fans no solo ver estadísticas y plantillas, sino también simular una "afiliación" a sus clubes favoritos.

---

## 🚀 Características Principales

* **Navegación Fluida:** Sistema de enrutado dinámico para navegar entre Inicio, Liga y Detalles del Equipo.
* **Gestión de Datos:** Consumo de API externa mediante Custom Hooks para una separación limpia de la lógica.
* **Sistema de Socios (Context API):** Funcionalidad global que permite al usuario hacerse socio de múltiples equipos. La aplicación "recuerda" el estado de membresía a través de toda la navegación.
* **Formularios Avanzados:** Gestión de formularios optimizada y validada mediante `react-hook-form`.
* **Optimización de Rendimiento:** Uso de `Link state` para pasar datos entre rutas y evitar peticiones innecesarias a la API.
* **Diseño Responsive:** Interfaz moderna