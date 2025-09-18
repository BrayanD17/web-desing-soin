/* Navegación entre pantallas por data-action
   - notas     -> (placeholder) notas.html
   - cierre    -> (placeholder) cierre.html
   - historial -> historial.html (ya creada)
*/

const ROUTES = {
  notas: 'notas.html',        // cuando tengas esta pantalla, crea el archivo
  cierre: 'cierre.html',      // cuando tengas esta pantalla, crea el archivo
  historial: 'historial.html' // ya implementada
};

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.getAttribute('data-action');
  const href = ROUTES[action];

  if (href) {
    // Puedes pasar un query param si quieres saber desde dónde llegó:
    // window.location.href = `${href}?from=index`;
    window.location.href = href;
  }
});

// Maneja el toggle de la sección "Resultados previos"
document.getElementById('toggleResultPrevios').addEventListener('click', function() {
  const savedSessions = document.getElementById('resultPrevios');
  const icon = document.getElementById('toggleResultIcon');
  
  // Cambia el estado de visibilidad
  savedSessions.classList.toggle('hidden');
  
  // Cambia la flecha (abre/cierra)
  icon.textContent = savedSessions.classList.contains('hidden') ? 'expand_more' : 'expand_less';
});


// Maneja el toggle de la sección "Sesiones guardadas"
document.getElementById('toggleSavedSessions').addEventListener('click', function() {
  const savedSessions = document.getElementById('savedSessions');
  const icon = document.getElementById('toggleSavedIcon');
  
  // Cambia el estado de visibilidad
  savedSessions.classList.toggle('hidden');
  
  // Cambia la flecha (abre/cierra)
  icon.textContent = savedSessions.classList.contains('hidden') ? 'expand_more' : 'expand_less';
});
