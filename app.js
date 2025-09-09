// --- Datos (10 filas) ---
const rows = [
  {
    ticket_number: "2025082227000053",
    ticket_title: "Formatos para la generación de los lotes de pago para Tesorería Nacional .",
    customer: "911_SOIN",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "- -",
    note_subject: "RE: [Ticket#2025082227000053] Formatos para la generación de los lotes de pago para Tesorería Nacional .",
    note_body: "Se confirma sesión de nómina hoy a las 9am por Teams. Solicitan grabación de la reunión previa.",
    note_time_unit: 30,
    note_create_time: "2025-09-02 10:10:14",
    ticket_state: "Pending Customer Info",
    ticket_create_time: "2025-08-22 09:10:42",
  },
  {
    ticket_number: "2025090127000171",
    ticket_title: "CASO INDER 1166 | ALERTA INDER | Disk Usage on /home Inder_BD_Prod",
    customer: "INDER",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "- -",
    note_subject: "text/plain; charset=utf-8",
    note_body: "Alerta por uso de disco. Validar estado post liberación automática.",
    note_time_unit: 10,
    note_create_time: "2025-09-02 10:00:17",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-09-01 12:42:11",
  },
  {
    ticket_number: "2025082627000341",
    ticket_title: "Traslado de Activos",
    customer: "ARESEP",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "- -",
    note_subject: "RE: [Ticket#2025082627000341] Traslado de Activos",
    note_body: "Unificar responsable CF 1023→1028 y luego traspaso CF 1028→1038 para permitir cambio.",
    note_time_unit: 25,
    note_create_time: "2025-09-02 10:00:15",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-08-26 16:26:03",
  },
  {
    ticket_number: "2025090127000171",
    ticket_title: "CASO INDER 1166 | ALERTA INDER | Disk Usage on /home Inder_BD_Prod",
    customer: "INDER",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "Melvin Brenes Gómez",
    note_subject: "Re: [Ticket#2025090127000171] ...",
    note_body: "Espacio liberado automáticamente; la alerta ya no debería estar presente.",
    note_time_unit: 12,
    note_create_time: "2025-09-02 09:52:04",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-09-01 12:42:11",
  },
  {
    ticket_number: "2025090127000171",
    ticket_title: "CASO INDER 1166 | ALERTA INDER | Disk Usage on /home Inder_BD_Prod",
    customer: "INDER",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "Alfonso Vargas Chaves",
    note_subject: "Nota",
    note_body: "Esto se liberó automáticamente hoy temprano.",
    note_time_unit: 14,
    note_create_time: "2025-09-02 09:50:41",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-09-01 12:42:11",
  },
  {
    ticket_number: "2025090127000171",
    ticket_title: "CASO INDER 1166 | ALERTA INDER | Disk Usage on /home Inder_BD_Prod",
    customer: "INDER",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "Melvin Brenes Gómez",
    note_subject: "Actualización del responsable!",
    note_body: "Alfonso por favor tu apoyo sobre la situación reportada.",
    note_time_unit: 8,
    note_create_time: "2025-09-02 09:45:16",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-09-01 12:42:11",
  },
  {
    ticket_number: "2025090127000171",
    ticket_title: "CASO INDER 1166 | ALERTA INDER | Disk Usage on /home Inder_BD_Prod",
    customer: "INDER",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "Melvin Brenes Gómez",
    note_subject: "Actualización de propietario!",
    note_body: "prop",
    note_time_unit: 5,
    note_create_time: "2025-09-02 09:44:26",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-09-01 12:42:11",
  },
  {
    ticket_number: "2025082627000341",
    ticket_title: "Traslado de Activos",
    customer: "ARESEP",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "Evans Andres Campos Solis",
    note_subject: "Re: [Ticket#2025082627000341] Traslado de Activos",
    note_body: "Detectada inconsistencia entre catálogo y responsable del activo. Proceder con traslados.",
    note_time_unit: 22,
    note_create_time: "2025-09-02 09:44:13",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-08-26 16:26:03",
  },
  {
    ticket_number: "2025082912340001",
    ticket_title: "Error de carga de planillas",
    customer: "CENCINAI",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "- -",
    note_subject: "Validación de formato XLSX",
    note_body: "Ajuste de mapeo y reintento de importación en pruebas.",
    note_time_unit: 20,
    note_create_time: "2025-09-02 10:18:00",
    ticket_state: "Work In Progress",
    ticket_create_time: "2025-08-29 11:03:00",
  },
  {
    ticket_number: "2025083009450020",
    ticket_title: "Reporte de viáticos trimestral",
    customer: "CONAVI",
    queue_name: "ERP::SIFCR_SOP",
    soin_user: "- -",
    note_subject: "Filtros por región",
    note_body: "Se agregan filtros por zona y rango de fechas; pendiente validación del usuario.",
    note_time_unit: 40,
    note_create_time: "2025-09-02 10:22:00",
    ticket_state: "Pending Customer Info",
    ticket_create_time: "2025-08-30 09:45:00",
  },
];

// --- Helpers ---
const stateBadge = (state) => {
  const map = {
    "Work In Progress": "bg-blue-100 text-blue-800",
    "Pending Customer Info": "bg-orange-100 text-orange-800",
    "Closed": "bg-gray-100 text-gray-800",
  };
  const cls = map[state] || "bg-gray-100 text-gray-800";
  return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}">${state}</span>`;
};

const escapeHtml = (str) =>
  String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderRows = (data) =>
  data
    .map(
      (r, i) => `
      <tr class="${i % 2 ? "bg-gray-50" : ""} hover:bg-gray-100">
        <td class="td col-number">${escapeHtml(r.ticket_number)}</td>
        <td class="td col-title wrap">${escapeHtml(r.ticket_title)}</td>
        <td class="td col-customer">${escapeHtml(r.customer)}</td>
        <td class="td col-queue">${escapeHtml(r.queue_name)}</td>
        <td class="td col-user">${escapeHtml(r.soin_user)}</td>
        <td class="td col-subject wrap">${escapeHtml(r.note_subject)}</td>
        <td class="td col-body wrap">
        <p class="line-clamp-2" title="${escapeHtml(r.note_body)}">${escapeHtml(r.note_body)}</p>
        </td>
        <td class="td col-timeunit">${Number(r.note_time_unit) || 0}</td>
        <td class="td col-notecreated">${escapeHtml(r.note_create_time)}</td>
        <td class="td col-state">${stateBadge(r.ticket_state)}</td>
        <td class="td col-created">${escapeHtml(r.ticket_create_time)}</td>
      </tr>
    `
    )
    .join("");

const toCSV = (data) => {
  const headers = [
    "ticket_number",
    "ticket_title",
    "customer",
    "queue_name",
    "soin_user",
    "note_subject",
    "note_body",
    "note_time_unit",
    "note_create_time",
    "ticket_state",
    "ticket_create_time",
  ];
  const rowsCsv = data.map((obj) =>
    headers
      .map((h) => {
        const val = String(obj[h] ?? "").replaceAll('"', '""');
        return `"${val}"`;
      })
      .join(",")
  );
  return [headers.join(","), ...rowsCsv].join("\n");
};

const download = (filename, text) => {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// --- Eventos / Init ---
document.addEventListener("DOMContentLoaded", () => {
  // Asegura que la vista de previsualización esté visible
  const previewView = document.getElementById("previewView");
  if (previewView && previewView.classList.contains("hidden")) {
    previewView.classList.remove("hidden");
  }

  // Renderizar 5 filas (ajusta si quieres otro número)
  const previewBody = document.getElementById("previewBody");
  const resultCount = document.getElementById("resultCount");
  if (previewBody) {
    const firstRows = rows.slice(0, 5);
    previewBody.innerHTML = renderRows(firstRows);
    if (resultCount) {
      resultCount.textContent = `Mostrando ${firstRows.length} de ${rows.length} registros`;
    }
  }

  // Exportar data completa
  const btnExportar = document.getElementById("btnExportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", () => {
      const csv = toCSV(rows);
      download("soin_preview.csv", csv);
    });
  }
});

