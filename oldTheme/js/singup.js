btnSignUP.addEventListener("click", function (e) {
  signUPEvent(e);
  e.preventDefault();
});
// document.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   if (e.key == "Enter") {
//     signUPEvent(e);
//   }
// });

function signUPEvent() {
  removeMessageList();
  if (
    InputIsValid(nameInput) &&
    InputIsValid(emailInput) &&
    InputIsValid(passwordInput)
  ) {
    createAccount(nameInput.value, emailInput.value, passwordInput.value);
    window.location.href = "../index.html";
  }
}
