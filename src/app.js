var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var groupOfSocials = document.querySelectorAll(".socials");

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    menu.classList.add("close-menu");
    console.log(menu);
  } else {
    menu.classList.add("show-menu");
    menu.classList.remove("close-menu");
  }
});
groupOfSocials.forEach((social) => {
  social.addEventListener("mouseover", () => {
    social.children[0].firstChild.style.fill = "#fff";
  });

  social.addEventListener("mouseout", () => {
    social.children[0].firstChild.style.fill = "";
  });
});
