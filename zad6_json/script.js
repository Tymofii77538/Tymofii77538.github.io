 //Student ID: 77538 


 //task 4
const themeBtn = document.getElementById('themeButton');
const toggleBtn = document.getElementById('toggleSectionButton');
const themeLink = document.querySelector('link[rel="stylesheet"]');
const sectionToToggle = document.getElementById('listsSection');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const current = themeLink.getAttribute('href');
        themeLink.setAttribute('href', current === 'red.css' ? 'green.css' : 'red.css');
    });
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sectionToToggle.style.display = sectionToToggle.style.display === 'none' ? 'block' : 'none';
    });
}

// task 5
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop refresh
        document.querySelectorAll('.error').forEach(el => el.innerText = '');
        
        let valid = true;
        const nameRegex = /\d/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('message').value;

        if (nameRegex.test(fName) || !fName) { 
            document.getElementById('firstNameError').innerText = "Błąd imienia"; 
            valid = false; 
        }
        if (nameRegex.test(lName) || !lName) { 
            document.getElementById('lastNameError').innerText = "Błąd nazwiska"; 
            valid = false; 
        }
        if (!emailRegex.test(email)) { 
            document.getElementById('emailError').innerText = "Błąd email"; 
            valid = false; 
        }
        if (!msg) { 
            document.getElementById('messageError').innerText = "Błąd wiadomości"; 
            valid = false; 
        }

        if (valid) {
            document.getElementById('successMessage').innerText = "Wysłano!";
            contactForm.reset();
        }
    });
}

// task 6
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const sList = document.getElementById('skillsList');
        const pList = document.getElementById('projectsList');

        if (sList) data.skills.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            sList.appendChild(li);
        });

        if (pList) data.projects.forEach(p => {
            const li = document.createElement('li');
            li.textContent = p;
            pList.appendChild(li);
        });
    } catch (e) {
        console.log("Waiting for data.json...");
    }
}
loadData();