/*************************************** start input variable ***************************************/
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
/*************************************** end input variable ***************************************/

/*************************************** start btns ***************************************/
var btnLogin = document.getElementById("login");
var btnSignUP = document.getElementById("signUP");
/*************************************** end btns ***************************************/

var validationSection = document.getElementById("validation");

/*************************************** storage Data ***************************************/
var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

/*************************************** Start Auth Method ***************************************/
function createAccount(name, email, password) {
  var account = {
    name: name,
    email: email,
    password: hashPassword(password),
  };
  accounts.push(account);
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function login(email, password, isOldTheme) {
  removeMessageList();
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].email == email) {
      if (hashPassword(password) == accounts[i].password) {
        sessionStorage.setItem("isLogin", "true");
        sessionStorage.setItem("username", `welcome ${accounts[i].name}`);
        if (isOldTheme) {
          window.location.href = "../../oldTheme/pages/home.html";
        } else {
          window.location.href = "../pages/home.html";
        }

        return;
      } else {
        showMessage("password is incorrect");
        return;
      }
    }
  }
  showMessage("user not found");
}
/***************************************  End Auth Method  ***************************************/
/*************************************** start helper method ***************************************/
function InputIsValid(element) {
  var accountRegex = {
    name: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/,
  };
  if (accountRegex[element.id].test(element.value)) {
    if (element.id == "email") {
      if (checkEmail(element.value)) {
        showMessage("Email is exist");
        return false;
      }
    }
    return true;
  } else {
    showMessage(`${element.id} is not valid`);
    return false;
  }
}

function showMessage(innerMassage) {
  var warning = document.createElement("p");
  var massage = document.createTextNode(innerMassage);
  warning.classList.add("text-danger");
  warning.append(massage);
  validationSection.append(warning);
}

function removeMessageList() {
  for (var i = 0; i < validationSection.childNodes.length; i++) {
    validationSection.childNodes[i].remove();
  }
}

function checkEmail(email) {
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].email.toLowerCase() == email.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function hashPassword(password) {
  return btoa(password);
}
/***************************************  end helper method  ***************************************/
