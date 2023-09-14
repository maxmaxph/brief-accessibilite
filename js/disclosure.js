let discButton = document.getElementById("useDsicl");
let disclosure = document.getElementById("disclosureWindow");

document.addEventListener("DOMContentLoaded", () => {
  // visibilité de ma disclosure //
  discButton.addEventListener("click", (e) => {
    if (disclosure.style.display === "block") {
      disclosure.style.display = "none";
    } else {
      disclosure.style.display = "block";
    }
  });

  // Fermer la disclosure avec un clic en dehors du disclosure //
  document.addEventListener("click", (e) => {
    if (e.target !== discButton && !disclosure.contains(e.target)) {
      disclosure.style.display = "none";
    }
  });

  // Fermer la disclosure avec la touche Échap (bonus) //
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      disclosure.style.display = "none";
    }
  });
});
