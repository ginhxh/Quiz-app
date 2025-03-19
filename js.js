const categories = document.querySelectorAll(".Ctegorie-name");
const serch = document.querySelector(".hero-put");
const aucn = document.querySelector(".aucn");
serch.addEventListener("keyup", () => {
  categories.forEach((categorie) => {
    if (
      categorie.textContent.toLowerCase().includes(serch.value.toLowerCase())
    ) {
      categorie.parentElement.style.display = "";
      aucn.style.display = "none";
    } else {
      categorie.parentElement.style.display = "none";
      aucn.style.display = "block";
    }
  });
});
