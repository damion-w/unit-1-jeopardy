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

function showCategories() {
    const categories = ['US History'];

    const questions = [[100, `This person was the 44th president of the United States.`]];

    const categoryCells = document.querySelectorAll('.cat');
    categoryCells.forEach((el, i)=>{
        el.innerText = categories[i].toUpperCase();
        indexStartPoint = 7;
        questions.forEach((el,i)=>{
            const cell = document.querySelector(`#ques${indexStartPoint + i}`);
            cell.innerText = questions[i][0];
        })
    });
}


 
addClickEvents();
showCategories();