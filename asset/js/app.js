// Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// Show & Hide AreYouGamer Text
const joinUs = document.querySelector(".joinUs");
const gamer = document.querySelector(".gamer");
const gamerDiv = document.querySelector(".gamer-div");
const joinUsDiv = document.querySelector(".joinUs-div");

gamer.classList.remove('d-none');

gamerDiv.addEventListener('mouseover', () => {
  gamer.classList.add('d-none');
  joinUs.classList.remove('d-none');
})

joinUsDiv.addEventListener('mouseleave', () => {
  joinUs.classList.add('d-none');
  gamer.classList.remove('d-none');
})
