/* Placeholder para lógica futura:
   - Navegación a Pantalla 2
   - Cargar sesiones previas desde API
   - Persistencia local (localStorage) para “Resultados previos”
*/

// Ejemplo de hook para click (descomentá y adapta cuando tengas rutas/estados)
document.addEventListener('click', (e) => {
  const target = e.target.closest('.card-action');
  if (target) {
    // TODO: navegar a la pantalla correspondiente (Notas / Cierre / Historia)
    // e.g., window.location.href = '/pantalla-2.html?accion=notas'
    // o disparar un modal / sección dinámica.
    // console.log('Acción seleccionada');
  }
});
