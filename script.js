const sectionLinks = document.querySelectorAll('a[href^="#"]');

// Ajusta a rolagem para considerar o cabeçalho fixo.
sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.offsetHeight : 0;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

const cookieBanner = document.getElementById("cookie-banner");
const cookieAcceptButton = document.getElementById("cookie-accept");
const cookieConsentKey = "cookieConsentAccepted";

// Salva o aceite de cookies no navegador para não exibir o aviso novamente.
function hasAcceptedCookies() {
  try {
    return localStorage.getItem(cookieConsentKey) === "true";
  } catch (error) {
    return false;
  }
}

function saveCookieConsent() {
  try {
    localStorage.setItem(cookieConsentKey, "true");
  } catch (error) {
    return;
  }
}

if (cookieBanner && !hasAcceptedCookies()) {
  cookieBanner.hidden = false;
}

if (cookieBanner && cookieAcceptButton) {
  cookieAcceptButton.addEventListener("click", () => {
    saveCookieConsent();
    cookieBanner.hidden = true;
  });
}
