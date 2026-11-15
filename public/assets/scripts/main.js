document.addEventListener("DOMContentLoaded", function () {
  setupMenu();
  setupActiveLinks();
  setupFooterYear();
});

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("main-menu");

  toggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu(toggle, menu);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu(toggle, menu);
      toggle.focus();
    }
  });
}

function closeMenu(toggle, menu) {
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menú");
}

function setupActiveLinks() {
  const links = document.querySelectorAll(".nav-links a");
  const sections = Array.from(links).map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        markActive(links, "#" + entry.target.id);
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

function markActive(links, hash) {
  links.forEach(function (link) {
    const isActive = link.getAttribute("href") === hash;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupFooterYear() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}
