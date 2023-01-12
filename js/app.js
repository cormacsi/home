var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();