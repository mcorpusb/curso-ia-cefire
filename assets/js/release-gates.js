(function () {
  "use strict";

  var preview = new URLSearchParams(window.location.search).has("preview");

  /* ── 1. Apertura del contenido de la página ── */

  document.querySelectorAll(".release-gate").forEach(function (gate) {
    var openAt = gate.getAttribute("data-open-at");
    if (!openAt) return;

    var openDate = new Date(openAt);
    var now = new Date();
    var notice = gate.querySelector(".release-gate__notice");
    var content = gate.querySelector(".release-gate__content");
    var dateSpan = gate.querySelector(".release-gate__date");

    if (!notice || !content) return;

    if (preview || now >= openDate) {
      notice.hidden = true;
      content.hidden = false;
    } else {
      notice.hidden = false;
      content.hidden = true;

      if (dateSpan) {
        dateSpan.textContent = formatDateES(openDate);
      }
    }
  });

  /* ── 2. Indicadores de bloqueo en el menú lateral ── */

  var gates = window.__releaseGates;
  if (!gates || !gates.length) return;

  var now = new Date();

  // Recoger todos los enlaces de navegación del sidebar
  var navLinks = document.querySelectorAll(
    ".site-nav a, .nav-list a, .navigation-list a"
  );

  gates.forEach(function (entry) {
    var openDate = new Date(entry.openAt);
    if (now >= openDate) return; // ya abierto, nada que hacer

    // Buscar el enlace del sidebar cuyo href coincida
    var link = findNavLink(navLinks, entry.url);
    if (!link) return;

    // Guardar título original y aplicar marca de bloqueo
    var originalText = link.textContent.trim();
    link.classList.add("is-locked");
    link.setAttribute(
      "title",
      "Disponible el " + formatShortDateES(openDate)
    );

    // Construir contenido: 🔒 Título + fecha
    link.textContent = "";

    var titleSpan = document.createElement("span");
    titleSpan.textContent = "\uD83D\uDD12 " + originalText;
    link.appendChild(titleSpan);

    var dateLine = document.createElement("span");
    dateLine.className = "nav-lock-date";
    dateLine.textContent = "Disponible el " + formatShortDateES(openDate);
    link.appendChild(dateLine);
  });

  /* ── Helpers ── */

  function formatDateES(date) {
    var opts = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Madrid"
    };
    return date.toLocaleDateString("es-ES", opts).replace(",", " a las");
  }

  function formatShortDateES(date) {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Europe/Madrid"
    });
  }

  function findNavLink(links, targetUrl) {
    // Normaliza quitando trailing slash para comparar
    var norm = function (url) {
      return url.replace(/\/+$/, "").replace(/\.html$/, "");
    };
    var target = norm(targetUrl);

    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (!href) continue;
      if (norm(href) === target || norm(links[i].href) === norm(window.location.origin + targetUrl)) {
        return links[i];
      }
    }
    // Fallback: buscar por pathname absoluto
    for (var j = 0; j < links.length; j++) {
      try {
        var linkPath = new URL(links[j].href, window.location.origin).pathname;
        if (norm(linkPath) === target) return links[j];
      } catch (e) { /* ignorar URLs inválidas */ }
    }
    return null;
  }
})();
