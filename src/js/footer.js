const copyrightText = document.querySelector(
  "footer .copyright-container span.year"
);
const currentYear = new Date().getFullYear();

copyrightText.textContent = currentYear;
