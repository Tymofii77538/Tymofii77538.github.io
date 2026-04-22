// Student ID: 77538

//task 4
const themeButton = document.getElementById('themeButton');
const themeLink = document.querySelector('link[rel="stylesheet"]');

themeButton.addEventListener('click', () => {
    const currentPath = themeLink.getAttribute('href');
    themeLink.setAttribute('href', currentPath === 'red.css' ? 'green.css' : 'red.css');
});
// task 5
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    console.log("Validation started..."); 

    document.querySelectorAll('.error-text').forEach(el => el.innerText = '');
    
    let isValid = true;
    const nameRegex = /\d/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || nameRegex.test(firstName)) {
        document.getElementById('firstNameError').innerText = "Imię jest wymagane i nie może mieć cyfr.";
        isValid = false;
    }

    if (!lastName || nameRegex.test(lastName)) {
        document.getElementById('lastNameError').innerText = "Nazwisko jest wymagane i nie może mieć cyfr.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Wprowadź poprawny adres e-mail.";
        isValid = false;
    }

    if (!message) {
        document.getElementById('messageError').innerText = "Wiadomość nie może być pusta.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').innerText = "Twoja wiadomość została odprawiona.";
        form.reset();
    }
});
