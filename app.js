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
document.getElementById('toggleResults').addEventListener('click', function() {
  const results = document.getElementById('resultsPrevios');
  const icon = document.getElementById('toggleIcon');
  
  // Cambia el estado de visibilidad
  results.classList.toggle('hidden');
  
  // Cambia la flecha (abre/cierra)
  icon.textContent = results.classList.contains('hidden') ? 'expand_more' : 'expand_less';
});


