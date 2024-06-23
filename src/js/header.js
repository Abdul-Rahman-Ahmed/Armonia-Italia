let dropmenu = document.querySelector(".dropmenu"),
  overlay = document.querySelector(".overlay"),
  close = document.querySelector(".close");

dropmenu.addEventListener("click", () => {
  overlay.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});

