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
