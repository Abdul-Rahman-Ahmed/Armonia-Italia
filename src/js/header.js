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

// let appetizers = [
//   {
//     name: "بروشيتا بالطماطم والريحان",
//     des: "خبز محمص مع زيتون وثوم وطماطم وزيت زيتون.",
//     price: "80 ج.م",
//     src: "/imgs/dishes/Appetizers/Bruschetta.png",
//   },
//   {
//     name: "أرانشيني (كرات الأرز المحشية)",
//     des: "أرز، جبن موزاريلا، بقسماط، زيت للقلي",
//     price: "90 ج.م",
//     src: "/imgs/dishes/Appetizers/Arancini.png",
//   },
//   {
//     name: "كابوناتا",
//     des: "خضروات مشوية مع صلصة الطماطم والثوم والبقدونس.",
//     price: "65 ج.م",
//     src: "/imgs/dishes/Appetizers/Caponata.png",
//   },
//   {
//     name: "أنتيباستو",
//     des: "مجموعة من الخضروات المشوية مع صلصة البيستو.",
//     price: "60 ج.م",
//     src: "/imgs/dishes/Appetizers/Antipasto.png",
//   },
// ];
