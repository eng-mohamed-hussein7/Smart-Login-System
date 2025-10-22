btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  var url = window.location.href;
  login(emailInput.value, passwordInput.value, url.includes("oldTheme"));  
  
});

// document.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   if (e.key == "Enter") {
//     login(emailInput.value, passwordInput.value);
//   }
// });
