
// first name vaildation
function validateFirstName () {
  var fName= document.getElementById("firstName").value;
  var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
  if(rel.test(fName)){
    document.getElementById("firstNamePrompt").style.color="green";
    document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("firstNamePrompt").style.color="Red";
    document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2-15 charcherts</strong>";
    return false;
  }
}
// last name validation
function validateLastName () {
  var lName= document.getElementById("lastName").value;
  var rel2 = /^[a-zA-Z\s\'\-]{2,15}$/;
  if(rel2.test(lName)){
    document.getElementById("lastNamePrompt").style.color="green";
    document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("lastNamePrompt").style.color="Red";
    document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2-15 charcherts</strong>";
    return false;
  }
}
// email vaildation
function validateMails() {
  var mName= document.getElementById("signupmail").value;
var rel4 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(rel4.test(mName)){
    document.getElementById("mailsPrompt1").style.color="green";
    document.getElementById("mailsPrompt1").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("mailsPrompt1").style.color="Red";
    document.getElementById("mailsPrompt1").innerHTML="<strong>Use correct format</strong>";
    return false;
  }
}
// password formpage validation
var rel;
function validatePassword() {
  var pasName= document.getElementById("pwd").value;
  var rel5 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  rel=pasName;
  if(rel5.test(pasName)){
    document.getElementById("passPrompt").style.color="green";
    document.getElementById("passPrompt").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("passPrompt").style.color="Red";
    document.getElementById("passPrompt").innerHTML="<strong>Use atlest one uppercase letter,special character and numbers</strong>";
    return false;
  }
}

 // repeat Password
 function validateRePassword() {
   var repasName= document.getElementById("Pwd").value;

   if(repasName == rel) {
     document.getElementById("repassPrompt").style.color="green";
     document.getElementById("repassPrompt").innerHTML="<strong>Password Matched</strong>";
     return true;
   }
   else {
     document.getElementById("repassPrompt").style.color="Red";
     document.getElementById("repassPrompt").innerHTML="<strong>Password not match</strong>";
     return false;
   }
 }
