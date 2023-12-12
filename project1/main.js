let navbar = document.querySelector(".navbar");
let navbarClick = document.querySelector("#menu-icon");
navbarClick.onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

