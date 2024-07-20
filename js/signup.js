// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }

let singemail = document.getElementById("singemail");
let signpassword = document.getElementById("signpassword");
let signupbtn = document.getElementById("signupbtn");

signupbtn.onclick = (e) => {
  if (singemail.value.length > 0 && signpassword.value.length > 0) {
    window.localStorage.setItem("email", singemail.value);
    window.localStorage.setItem("password", signpassword.value);
    console.log(singemail.value, signpassword.value);
    singemail.value = "";
    signpassword.value = "";
  } else {
    e.preventDefault();
  }
};
