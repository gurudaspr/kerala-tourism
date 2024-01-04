// signup

function handleSubmit() {
    const message = document.getElementById('signupAlert');
    const form = document.getElementById('signupform');
    const name = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    message.style.display = "none";
    if (name.length == 0) {
        message.innerText = "Please enter your username";
        message.style.display = "block"
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        message.innerText = "Please enter a valid email";
        message.style.display = "block"
        return false;

    }
    if (password.length < 8) {
        message.innerText = "Password length must be greater than 8 ";
        message.style.display = "block"
        return false;

    }
    message.classList.remove('alert-danger');
    message.classList.add('alert-success');
    message.innerText = "Success";
    message.style.display = "block"
    form.reset();
                        

}


//Login
function handleLoginSubmit() {
const message = document.getElementById('loginAlert');
const form = document.getElementById('loginform');
const name = document.getElementById('loginUsername').value;
const password = document.getElementById('loginPassword').value;
message.style.display = "none";
if (name.length == 0) {
    message.innerText = "Please enter your username";
    message.style.display = "block"
    return false;
}
if (password.length == 0) {
    message.innerText = "Enter your password ";
    message.style.display = "block"
    return false;

}
message.classList.remove('alert-danger');
message.classList.add('alert-success');
message.innerText = "Success";
message.style.display = "block"
form.reset();

}

//contact

function handleContactSubmit() {
   
    const message = document.getElementById('contactAlert');
    const form = document.getElementById('contactForm');
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const conMessage = document.getElementById('contactMessage').value;
    const subject = document.getElementById('contactSubject').value;
    message.style.display = "none";
    if (name.length == 0) {
        message.innerText = "Please enter your name";
        message.style.display = "block"
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        message.innerText = "Please enter a valid email";
        message.style.display = "block"
        return false;

    }
    if (subject.length ==0) {
        message.innerText = "Subject cannot be empty ";
        message.style.display = "block"
        return false;

    }
    if (conMessage.length ==0) {
        message.innerText = "Message cannot be empty ";
        message.style.display = "block"
        return false;

    }
    message.classList.remove('alert-danger');
    message.classList.add('alert-success');
    message.innerText = "Message sent";
    message.style.display = "block"
    form.reset();
    return false;                 
}