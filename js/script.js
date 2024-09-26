document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const navbar = document.querySelector(".navbar");
  const loginBtn = document.querySelector("#login");
  const loginForm = document.querySelector(".login-form");
  const closeLoginForm = document.querySelector(".login-form form .fa-times");

  menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });

  loginBtn.addEventListener("click", function () {
    loginForm.classList.add("popup");
  });

  closeLoginForm.addEventListener("click", function () {
    loginForm.classList.remove("popup");
  });

  window.addEventListener("load", onScrollOrLoad);
  window.addEventListener("scroll", onScrollOrLoad);

  function onScrollOrLoad() {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
    loginForm.classList.remove("popup");

    document.querySelectorAll("section").forEach(function (section) {
      let top = window.scrollY;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      let offset = section.offsetTop - 200;

      if (top > offset && top < offset + height) {
        document.querySelectorAll(".navbar ul li a").forEach(function (link) {
          link.classList.remove("active");
        });
        const activeLink = navbar.querySelector(`[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }
});
