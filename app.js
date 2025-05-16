const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');
const icon4 = document.getElementById('icon-4');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

userName.addEventListener('keyup', () => {
    if(/^[a-zA-Z0-9_-]{3,20}$/.test(userName.value.trim())){
        icon.classList.add('valid');
        icon.classList.remove('invalid');
        userName.classList.remove('error');
    }else{
        icon.classList.add('invalid');
        userName.classList.add('error');
        icon.classList.remove('valid');
    }
});
email.addEventListener('keyup', () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(email.value.trim())){
        icon2.classList.add('valid');
        icon2.classList.remove('invalid');
        email.classList.remove('error');
    }else{
        icon2.classList.add('invalid');
        email.classList.add('error');
        icon2.classList.remove('valid');
    }
});
password.addEventListener('keyup', () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,20}$/;
    if(regex.test(password.value)){
        icon3.classList.add('valid');
        icon3.classList.remove('invalid');
        password.classList.remove('error');
        console.log(password.value + 'Valid');
    }else{
        icon3.classList.add('invalid');
        password.classList.add('error');
        icon3.classList.remove('valid');
        console.log(password.value + ' ivalid');
    }
});
confPassword.addEventListener('blur', () => {
    if(confPassword.value == password.value){
        icon4.classList.add('valid');
        icon4.classList.remove('invalid');
        confPassword.classList.remove('error');
        if(confPassword.value == ""){
            icon4.classList.remove('valid');
        }    
    }else{
        icon4.classList.add('invalid');
        confPassword.classList.add('error');
        icon4.classList.remove('valid');
    }
});
form.addEventListener('submit', (event) => {
    const nUser = /^[a-zA-Z0-9_-]{3,20}$/.test(userName.value.trim());
    const nEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim());
    const nPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,20}$/.test(password.value);
    if(userName.value == "" || !nUser) {
        event.preventDefault();
        alert('The form is stope from submission');
    }else if(email.value == "" ||  !nEmail) {
        event.preventDefault();
        alert('The form is stope from submission');
    }else if(password.value == "" || !nPassword) {
        event.preventDefault();
        alert('The form is stope from submission');
    }else if(confPassword.value == "" || confPassword.value != password.value){
            event.preventDefault();
            alert('The form is stope from submission');
            }
});