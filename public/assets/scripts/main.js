document.addEventListener("DOMContentLoaded", function () {
  setupMenu();
  setupActiveLinks();
  setupAccessibility();
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


const TEXT_SIZES = ["", "text-size-lg", "text-size-xl"];
const STORAGE_TEXT_SIZE = "contigo-text-size";
const STORAGE_CONTRAST = "contigo-contrast";

function setupAccessibility() {
  const downButton = document.querySelector('[data-text-size="down"]');
  const upButton = document.querySelector('[data-text-size="up"]');
  const contrastButton = document.querySelector('[data-contrast="toggle"]');

  let level = Number(readPreference(STORAGE_TEXT_SIZE, "0"));
  if (!Number.isInteger(level) || level < 0 || level >= TEXT_SIZES.length) {
    level = 0;
  }
  applyTextSize(level, downButton, upButton);

  applyContrast(readPreference(STORAGE_CONTRAST, "off") === "on", contrastButton);

  downButton.addEventListener("click", function () {
    level = Math.max(0, level - 1);
    applyTextSize(level, downButton, upButton);
    savePreference(STORAGE_TEXT_SIZE, String(level));
  });

  upButton.addEventListener("click", function () {
    level = Math.min(TEXT_SIZES.length - 1, level + 1);
    applyTextSize(level, downButton, upButton);
    savePreference(STORAGE_TEXT_SIZE, String(level));
  });

  contrastButton.addEventListener("click", function () {
    const isOn = contrastButton.getAttribute("aria-pressed") !== "true";
    applyContrast(isOn, contrastButton);
    savePreference(STORAGE_CONTRAST, isOn ? "on" : "off");
  });
}

function applyTextSize(level, downButton, upButton) {
  TEXT_SIZES.forEach(function (className) {
    if (className) {
      document.documentElement.classList.remove(className);
    }
  });

  if (TEXT_SIZES[level]) {
    document.documentElement.classList.add(TEXT_SIZES[level]);
  }

  downButton.disabled = level === 0;
  upButton.disabled = level === TEXT_SIZES.length - 1;
}

function applyContrast(isOn, button) {
  document.documentElement.classList.toggle("high-contrast", isOn);
  button.setAttribute("aria-pressed", String(isOn));
}

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // El navegador puede bloquear el almacenamiento; la página sigue funcionando.
  }
}

function setupFooterYear() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}
