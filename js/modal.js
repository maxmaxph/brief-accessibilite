const modal = document.getElementById("modalWindow");
const openButton = document.getElementById("openMod");
const closeButton = modal.querySelector("button"); //je selectionne egalement le closeButton //
const overlay = document.getElementById("overlay"); //fond grisé à l'ouverture de la modale //

document.addEventListener("DOMContentLoaded", () => {

  const focusable = modal.querySelectorAll(
    'button, [href], [tabindex]:not([tabindex="-1"])'
  );
  const [firstFocusable, ...rest] = Array.from(focusable);
  const lastFocusable = rest.pop();

  // je modifie l'evenement pour ouvrir la modale //
  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    firstFocusable.focus(); // Mettre le focus sur le premier élément focusable //
    overlay.style.display = "block"; // Afficher le fond grisé (overlay) //
  });

  // j'ai préféré créer un  evenement pour fermer la modale également //
  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    openButton.focus(); // Retourner le focus au bouton d'ouverture //
    overlay.style.display = "none"; // Cacher le fond grisé (overlay) //
  });

  // je commande avec mon clavier quand ma modale est open //
  document.addEventListener("keydown", (event) => {
    // Je ferme la modal avec la touche ECHAP! //
    if (
      event.key === "Escape" &&
      modal.getAttribute("aria-hidden") === "false"
    ) {
      closeButton.click();
    }

    // je "piège" le focus à l'intérieur de la modale //
    if (event.key === "Tab" && modal.getAttribute("aria-hidden") === "false") {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus(); // Si on est sur le premier élément et qu'on appuie sur Shift+Tab, ca va au dernier élément //
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus(); // Si on est sur le dernier élément et qu'on appuie sur Tab, retourner au premier élément //
      }
    }
  });
});
