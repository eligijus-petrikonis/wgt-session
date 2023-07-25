const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  const opened = hamburger.classList.contains("opened");
  if (opened) hamburger.classList.remove("opened");
  else hamburger.classList.add("opened");
});

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  hamburger.classList.remove("opened");
});
