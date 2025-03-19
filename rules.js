const summarys = document.querySelectorAll(".summary");
const details = document.querySelectorAll(".details");

details.forEach((detail) => {
  detail.addEventListener("click", () => {
    let content = detail.lastElementChild;
    console.log(content);
    if (content.style.display === "none" || !content.style.display)
      content.style.display = "block";
    else content.style.display = "none";
  });
});
