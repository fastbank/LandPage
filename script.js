// Atualiza o ano automaticamente para evitar manutenção manual no rodapé.
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

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
