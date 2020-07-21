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
    const categories = ['US History', 'Basketball', 'Literature', 'Musicians', 'Africa', 'Baking Ingredients'];

    const categoryCells = document.querySelectorAll('.cat');
    categoryCells.forEach((el, i)=>{
        el.innerText = categories[i].toUpperCase();
    });
}

 class Category {
     constructor(name, description, questions) {
         this.name = name;
         this.description = description;
         this.questions = questions;
     }

     getCategoryName() {
         return this.name;
     }

     getDescription() {
         return this.description;
     }
     
     getQuestions() {
         return this.questions;
     }
 }
 
addClickEvents();
showCategories();