(function () {
  "use strict";

  var preview = new URLSearchParams(window.location.search).has("preview");

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
        var opts = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Madrid"
        };
        dateSpan.textContent =
          openDate.toLocaleDateString("es-ES", opts).replace(",", " a las");
      }
    }
  });
})();
