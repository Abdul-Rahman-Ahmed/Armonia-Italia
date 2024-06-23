let menunav = document.querySelectorAll(".menushow ul li"),
  section = document.querySelector(".menushow .type");

let handelmoving = (el, distance) => {
  el.addEventListener("click", () => {
    section.style.transform = `translateX(${distance}%)`;
    menunav.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
};
for (let i = 0; i < menunav.length; i++) {
  menunav[i] && handelmoving(menunav[i], i * 100);
}
