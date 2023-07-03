document.getElementById("password").addEventListener("input", passwordValidate);
let passwords = [];
let isValid = false;
function savePassword(e) {
    const a = document.getElementById('password').value;
    if (isNewPassword(a) && isValid)
        passwords.push(a);
    else if (!isNewPassword(a))
        document.getElementById('resultado').innerText = "Essa senha já existe"
    else if (!isValid)
        document.getElementById('resultado').innerText = "Essa senha não é valida"
}
function passwordValidate(e) {
    const a = e.target.value;
    var Number = hasNumber(a);
    var UpperCase = hasUpperCase(a);
    var LowerCase = hasLowerCase(a);
    var TheMinimumValue = hasTheMinimumValue(a);
    var SpecialsChars = hasSpecialsChars(a);
    var test = Number && UpperCase && LowerCase && TheMinimumValue && SpecialsChars;
    isValid = test;
    console.log(passwords)
    if (test)
        document.getElementById('resultado').innerText = "Senha valida!"
}

function hasNumber(password) {
    if (/\d/.test(password))
        document.getElementById("num").style.color = "green";
    else
        document.getElementById("num").style.color = "red";
    return /\d/.test(password);
}
function hasUpperCase(password) {
    if (/[A-Z]/.test(password))
        document.getElementById("mai").style.color = "green";
    else
        document.getElementById("mai").style.color = "red";
    return /[A-Z]/.test(password);
}
function hasLowerCase(password) {
    if (/[a-z]/.test(password))
        document.getElementById("minu").style.color = "green";
    else
        document.getElementById("minu").style.color = "red";
    return /[a-z]/.test(password)
}
function hasTheMinimumValue(password) {
    if (password.length >= 10)
        document.getElementById("min").style.color = "green";
    else
        document.getElementById("min").style.color = "red";
}
function hasSpecialsChars(password) {
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password))
        document.getElementById("esp").style.color = "green";
    else
        document.getElementById("esp").style.color = "red";
}
function isNewPassword(password) {
    return !passwords.includes(password);
}