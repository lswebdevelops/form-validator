// checking email validity
const email = document.getElementById('email');
email.addEventListener('input', function (event) {
    if(email.validity.typeMismatch){
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
}); 
//checking name validity
const userName = document.getElementById('name');
userName.addEventListener('input', function (event) {
    if(name.validity.typeMismatch){
        name.setCustomValidity("I am expecting a name!");
    } else {
        name.setCustomValidity("");
    }
});



// checking if both passwords are the same

function checkPasswords(){
    const pass1 = document.getElementById('input[name="password"]').value;
    const pass2 = document.getElementById('input[name="password2"]').value;
    if(pass1 !== pass2){
        alert("Passwords don't match");
        return false;
    }
    return true;
}

// checking if all fields are filled
function checkForm(form) {
if (form.name.value===""){
    alert('Please enter a name');
    return false;
}
if (form.email.value===""){
    alert('Please enter an email address');
    return false;
}
if (form.phone.value===""){
    alert('Please enter a phone number');
    return false;
}
if (form.zip.value===""){
    alert('Please enter a zip code');
    return false;
}
if (form.password.value===""){
    alert('Please enter a password');
    return false;
}
if (form.password2.value==="" || form.pages.value <= 0){
    alert('Please enter the password again');
    return false;
}
return true;
}