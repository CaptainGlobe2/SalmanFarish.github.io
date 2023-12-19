var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = 'Phone number should contain only digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email address is required';
        return false;
    }

    // Regular expression for basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Enter a valid email address';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(message.length === 0){
        messageError.innerHTML = 'Enter some Message'
        return false;
    }
    if(left>0){
        messageError.innerHTML= left + 'more characters required'
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMessage() || !validateEmail() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please check all The fields are filled';
        setTimeout(function(){submitError.style.display='none';},3000)
        return false;
    }
}