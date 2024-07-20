let loginemail = document.getElementById("loginemail");
let loginpassword = document.getElementById("loginpassword");
let loginbtn = document.getElementById("loginbtn");

loginbtn.onclick = (e) => {
  if (
    loginemail.value == window.localStorage.getItem("email") &&
    loginpassword.value == window.localStorage.getItem("password")
  ) {
    loginbtn.setAttribute("href", "home.html");
  } else {
    e.preventDefault();
    window.alert("Email Or Password Wrong");
    loginemail.value = "";
    loginpassword.value = "";
  }
};
