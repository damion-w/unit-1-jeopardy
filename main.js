/* Confirms this file is connected to index.html */
const jsGreeting = document.createElement('p');
jsGreeting.innerText = "main.js is connected";
document.body.prepend(jsGreeting);

/* Adds click events to each cell */
function addClickEvents() {
    const questionCells = document.querySelectorAll('.ques');
    questionCells.forEach((el) => {
        el.addEventListener('click', showQuestion);
    });
}

function showQuestion() {
    alert(`I'm supposed to show a question`);
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    overlay.addEventListener('click', (e)=> {
        overlay.style.display = 'none';
    });
}

addClickEvents();
