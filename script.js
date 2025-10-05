(function initializeSiteInteractions() {
  function setCurrentYear() {
    var yearNode = document.getElementById('year');
    if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  }

  function wireBookingLinks() {
    var links = document.querySelectorAll('[data-booking-url]');
    links.forEach(function(link) {
      var url = link.getAttribute('data-booking-url');
      if (url && url.trim().length > 0) {
        link.setAttribute('href', url);
      }
    });
  }

  /* confetti removed */

  setCurrentYear();
  wireBookingLinks();
})();


