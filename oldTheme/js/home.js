window.onload = function () {
  var btnLogout = document.querySelector("nav button");
  var usernameInHeaderSection = document.querySelector("header h1");
  var isLogin = sessionStorage.getItem("isLogin");
  var url = window.location.href;

  if (isLogin == "true") {
    usernameInHeaderSection.textContent = sessionStorage.getItem("username");
  } else {
    if (url.includes("oldTheme")) {
      window.location.href = "../../oldTheme/index.html";
    } else {
      window.location.href = "../index.html";
    }
  }

  btnLogout.addEventListener("click", function () {
    sessionStorage.setItem("isLogin", "false");
    sessionStorage.removeItem("username");

    if (url.includes("oldTheme")) {
      window.location.href = "../../oldTheme/index.html";
    } else {
      window.location.href = "../index.html";
    }
  });
};
