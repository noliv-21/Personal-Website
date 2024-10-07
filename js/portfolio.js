const Name_input = document.getElementById('Name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const message = document.getElementById('message');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const phone_error = document.getElementById('phone_error');
const message_error = document.getElementById('message_error');

console.log('js connected');

// Validation status flags
let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isMessageValid = false;

Name_input.addEventListener('keyup', () => {
    const name_check = /^[a-zA-Z\s']{2,100}$/;

    if (Name_input.value.trim() === '') {
        name_error.innerHTML = "*Name is required";
        isNameValid = false;
    } else if (!Name_input.value.match(name_check)) {
        name_error.innerHTML = "*Name is invalid";
        isNameValid = false;
    } else {
        name_error.textContent = "";
        isNameValid = true;
    }
})

email.addEventListener('keyup', () => {
    const email_check = /^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.value.trim() === '') {
        email_error.innerHTML = "*E-Mail is required";
        isEmailValid=false;
    }
    else if (!email.value.match(email_check)) {
        email_error.innerHTML = "*E-mail is not in correct format";
        isEmailValid=false;
    }
    else {
        email_error.textContent = "";
        isEmailValid=true;
    }
})

phone.addEventListener('keyup', () => {
    const phone_check = /^\d{10}$/;

    if (!phone.value.match(phone_check)) {
        phone_error.innerHTML = "*Phone number is invalid";
        isPhoneValid=false;
    }
    else {
        phone_error.textContent = "";
        isPhoneValid=true;
    }
})

// form.addEventListener('submit', (e) => {
//     if (message.value.trim() === '' || message.value == null) {
//         e.preventDefault();
//         message_error.innerHTML = "*Message should not be empty";
//     }
//     else {
//         message_error.textContent = "";
//     }
// })

form.addEventListener('submit', (e) => {
    //message existence checking
    if (message.value.trim() === '' || message.value == null) {
        e.preventDefault();
        message_error.innerHTML = "*Message should not be empty";
        isMessageValid=false;
    }
    else {
        message_error.textContent = "";
        isMessageValid=true;
    }

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
        e.preventDefault();
    }
})
//     const formData = new FormData(form);
//     const data = new URLSearchParams(formData).toString();
//     fetch('/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: data
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // Form submission was successful
//             alert('Your message has been sent successfully.');
//             form.reset(); // Clear the form fields
//         } else {
//             // Form submission failed
//             alert('An error occurred. Please try again later.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again later.');
//     });
// })