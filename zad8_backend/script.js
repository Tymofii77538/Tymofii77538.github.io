// Numer albumu: 77538

// task 4
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

// task 8
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        
        document.querySelectorAll('.error').forEach(el => el.innerText = '');
        
        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('message').value;

        if (!fName || !lName || !email || !msg) {
            alert("Wszystkie pola są wymagane!");
            return;
        }

        const payload = {
            firstName: fName,
            lastName: lName,
            email: email,
            message: msg,
            studentId: "77538"
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            });

            if (response.ok) {
                document.getElementById('successMessage').innerText = "Dane pomyślnie wysłane na serwer (ID: 77538)!";
                document.getElementById('successMessage').style.color = "green";
                contactForm.reset();
            }
        } catch (error) {
            console.error("Błąd komunikacji:", error);
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

        if (sList) {
            sList.innerHTML = ''; 
            data.skills.forEach(s => {
                const li = document.createElement('li');
                li.textContent = s;
                sList.appendChild(li);
            });
        }

        if (pList) {
            pList.innerHTML = '';
            data.projects.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p;
                pList.appendChild(li);
            });
        }
    } catch (e) {
        console.log("Oczekiwanie na data.json...");
    }
}
loadData();

// task 7
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    function renderTasks() {
        if (!taskList) return; 
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <span>${task}</span>
                <button class="delete-btn" data-index="${index}">Usuń</button>
            `;
            taskList.appendChild(li);
        });
    }

    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            const text = taskInput.value.trim();
            if (text !== "") {
                tasks.push(text);
                localStorage.setItem('myTasks', JSON.stringify(tasks));
                taskInput.value = '';
                renderTasks();
            }
        });
    }

    if (taskList) {
        taskList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const index = e.target.getAttribute('data-index');
                tasks.splice(index, 1);
                localStorage.setItem('myTasks', JSON.stringify(tasks));
                renderTasks();
            }
        });
    }

    renderTasks();
});
