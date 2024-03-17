document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".mobile-menu");
    var toggleBtn = document.getElementById("toggle-menu");
    menu.style.display = "none";
    toggleBtn.addEventListener("click", function () {
      if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
    window.addEventListener("resize", function () {
      var windowWidth = window.innerWidth;
      if (windowWidth >= 992) {
        menu.style.display = "none";
      }
    });
  });
  