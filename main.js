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
    //const categories = ["SUPERSTAR'S TEAM"];

    const categories = ['TEAM?', 'US HISTORY', 'HIP-HOP', 'CARTOONS', 'AFRICA', 'CITY NICKNAMES'];

    const questions = [[100,"LARRY BIRD"],[200,"MAGIC JOHNSON"],[300,"SIDNEY CROSBY"],[400,"KOBE BRYANT"],[500,"DEREK JETER"]];

    const categoryCells = document.querySelectorAll('.cat');
    categoryCells.forEach((el, i)=>{
        el.innerText = categories[i];
        questions.forEach((el,j)=>{
            const cell = document.querySelector(`#ques${i}-${j}`);
            cell.innerText = `$${questions[j][0]}`;        
        });
    });
}
 
addClickEvents();
showCategories();