// Phone menu and footer year. The site works fully without this file.
(function () {
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    var label = toggle.querySelector(".label");
    function setOpen(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Close" : "Menu";
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
