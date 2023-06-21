document.getElementById("password").addEventListener("input", passwordValidate);
let passwords = [];
function savePassword(e){
    const a = document.getElementById('password').value;
    passwords.push(a);
}
function passwordValidate(e) {
    const a = e.target.value;
    var Number = hasNumber(a);
    var UpperCase = hasUpperCase(a);
    var LowerCase = hasLowerCase(a);
    var TheMinimumValue = hasTheMinimumValue(a);
    var SpecialsChars = hasSpecialsChars(a);
    var newPassword = isNewPassword(a);
    var test = Number && UpperCase && LowerCase && TheMinimumValue && SpecialsChars & newPassword;
    console.log(passwords)
    if (test)
        document.getElementById('resultado').innerText = "Senha valida!"
    else
        document.getElementById('resultado').innerText = "Senha invalida!"
}

function hasNumber(password) {
    return /\d/.test(password);
}
function hasUpperCase(password) {
    return /[A-Z]/.test(password);
}
function hasLowerCase(password) {
    return /[a-z]/.test(password);
}
function hasTheMinimumValue(password) {
    return password.length >= 10;
}
function hasSpecialsChars(password) {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
}
function isNewPassword(password) {
    return !passwords.includes(password);
}