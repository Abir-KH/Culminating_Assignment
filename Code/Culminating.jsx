//side bar menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//sign up form
function validateForm() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (usernameInput.value.length < 6) {
    alert("Username must be at least 6 characters long.");
    return false; // Returning false prevents the form from submitting
  }

  if (passwordInput.value.length < 12) {
    alert("Password must be at least 12 characters long.");
    return false; // Returning false prevents the form from submitting
  }

  alert("You are successfully signed in!");
  window.open("home.html"); // random https, should be linked with homepage
  return true; // If you want the form to submit after successful validation
} 
//info button function
function showInfo() {
  var infoBox = document.getElementById("infoBox");
  if (infoBox.style.display === "none") {
      infoBox.style.display = "block";  
  } else {
      infoBox.style.display = "none";
  }
}
function myFunction() {
  window.open("https://cfs.nrcan.gc.ca/statsprofile/");
}