let dropmenu = document.querySelector(".dropmenu"),
  overlay = document.querySelector(".overlay"),
  close = document.querySelector(".close");
dropmenu.addEventListener("click", () => {
  (overlay.style.display = "block"),
    (document.querySelector("body").style.overflow = "hidden");
}),
  close.addEventListener("click", () => {
    (overlay.style.display = "none"),
      (document.querySelector("body").style.overflow = "auto");
  });
let menunav = document.querySelectorAll(".menushow ul li"),
  section = document.querySelector(".menushow .type"),
  handelmoving = (e, n) => {
    e.addEventListener("click", () => {
      (section.style.transform = `translateX(${n}%)`),
        menunav.forEach((e) => {
          e.classList.remove("active");
        }),
        e.classList.add("active");
    });
  };
for (let e = 0; e < menunav.length; e++)
  menunav[e] && handelmoving(menunav[e], 100 * e);
