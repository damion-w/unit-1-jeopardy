/* Confirms this file is connected to index.html */
// const jsGreeting = document.createElement('p');
// jsGreeting.innerText = "main.js is connected";
// document.body.prepend(jsGreeting);

function showQuestion(e) {
    const clickedCell = e.target.id;
    currentGame.setCurrentCell(Number(clickedCell[4]), Number(clickedCell[6]));
    questionModal.style.display = 'block';
    const questionBox = document.querySelector('#questionBox');

    questionBox.innerText = gameBoard[currentGame.getCurrentCell()[0]].getQuestions()[currentGame.getCurrentCell()[1]].getQuestionStr(); 
}

function submitAnswer(evt) {
    evt.preventDefault();
    questionModal.style.display = 'none';

    if (evt.target.answer.value.toUpperCase() === gameBoard[currentGame.getCurrentCell()[0]].getQuestions()[currentGame.getCurrentCell()[1]].getAnswer().toUpperCase()) {
        alert("You got it right!!")
        currentGame.playerTurn.addToScore(gameBoard[currentGame.getCurrentCell()[0]].getQuestions()[currentGame.getCurrentCell()[1]].getValue());
        const updatedScore = document.querySelector(`#p${currentGame.getPlayerTurn().getPositionNum()}score`);
        updatedScore.innerText = `$${currentGame.getPlayerTurn().getScore()}`;

        const questionCell = document.querySelector(`#ques${currentGame.getCurrentCell()[0]}-${currentGame.getCurrentCell()[1]}`);
        questionCell.innerText = "";
        questionCell.removeEventListener('click', showQuestion);
    }
    else {
        alert(`WRONG!!! The correct answer is "${gameBoard[currentGame.getCurrentCell()[0]].getQuestions()[currentGame.getCurrentCell()[1]].getAnswer().toUpperCase()}"`);
        currentGame.playerTurn.minusFromScore(gameBoard[currentGame.getCurrentCell()[0]].getQuestions()[currentGame.getCurrentCell()[1]].getValue());
        const updatedScore = document.querySelector(`#p${currentGame.getPlayerTurn().getPositionNum()}score`);
        updatedScore.innerText = `$${currentGame.getPlayerTurn().getScore()}`;

        switch (currentGame.getPlayerTurn().getPositionNum()) {
            case 1:
                currentGame.setPlayerTurn(player2);
                break;
            case 2:
                currentGame.setPlayerTurn(player3);
                break;
            case 3:
                currentGame.setPlayerTurn(player1);
                break;
            default:
                alert("FATAL ERROR: UNKNOWN POSITION");
        }
    }
}

function showCategories() {
    const categoryCells = document.querySelectorAll('.cat');
    categoryCells.forEach((el,i)=>{
        el.innerText = gameBoard[i].getName().toUpperCase();
        gameBoard[i].getQuestions().forEach((e,j)=>{
            const cell = document.querySelector(`#ques${i}-${j}`);
            cell.innerText = `$${gameBoard[i].questions[j].getValue()}`;            
        })
    });
}

function setPlayerNames(player1Name, player2Name, player3Name) {
    player1.setName("Damion");
    document.querySelector('#p1name').innerText = player1.getName();

    player2.setName("Bilen");
    document.querySelector('#p2name').innerText = player2.getName();

    player3.setName("Nofia");
    document.querySelector('#p3name').innerText = player3.getName();
}

class Game {
    setPlayerTurn(player) {
        this.playerTurn = player;
        const whosTurn = document.createElement('p');
        whosTurn.innerText = `${this.getPlayerTurn().getName()}, its your turn!`;
        document.body.append(whosTurn);
    }
    getPlayerTurn() {
        return this.playerTurn;
    }
    setPlayerNames(player1Name, player2Name, player3Name) {
        player1.setName("Damion");
        document.querySelector('#p1name').innerText = player1.getName();

        player2.setName("Bilen");
        document.querySelector('#p2name').innerText = player2.getName();

        player3.setName("Nofia");
        document.querySelector('#p3name').innerText = player3.getName();
    }
    setCurrentCell(col,row) {
        this.currentCellColumn = col;
        this.currentCellRow = row;
    }
    getCurrentCell() {
        return [this.currentCellColumn,this.currentCellRow]
    }
}

class CategoryAndQuestions {
    constructor (name, questions) {
        this.name = name;
        this.questions = questions;
    }
    getName() {
        return this.name;
    }
    getQuestions() {
        return this.questions;
    }
}

class Question {
    constructor(value, questionStr, answer) {
        this.value = value;
        this.questionStr = questionStr;
        this.answer = answer;
    }
    getValue() {
        return this.value;
    }
    getQuestionStr() {
        return this.questionStr;
    }
    getAnswer() {
        return this.answer;
    }
}

/* Team? Category */
const teamsQues0 = new Question(100,"LARRY BIRD","BOSTON CELTICS");
const teamsQues1 = new Question(200,"MAGIC JOHNSON","LOS ANGELES LAKERS");
const teamsQues2 = new Question(300,"LISA LESLIE","LOS ANGELES SPARKS");
const teamsQues3 = new Question(400,"DEREK JETER","NEW YORK YANKEES");
const teamsQues4 = new Question(500,"SIDNEY CROSBY","PITTSBURGH PINGUINS");
const teamsQuestions = [teamsQues0, teamsQues1, teamsQues2, teamsQues3, teamsQues4];
const teams = new CategoryAndQuestions("Superstar's Teams", teamsQuestions);

/* Role Play Category */
const rolePlayQues0 = new Question(100, 'SMOKEY FROM "FRIDAY"', "CHRIS TUCKER");
const rolePlayQues1 = new Question(200, 'SCARFACE FROM SCARFACE"', "AL PACINO");
const rolePlayQues2 = new Question(300, 'DOUGHBOY FROM "BOYZ N THE HOOD"', "ICE CUBE");
const rolePlayQues3 = new Question(400, 'TINA TURNER FROM "WHATS LOVE GOT TO DO WITH IT"', "ANGELA BASSETT");
const rolePlayQues4 = new Question(500, 'RON BURGANDY FROM "ANCHORMAN: THE LEGEND OF RON BURGANDY"', "WILL FERRELL");
const rolePlayQuestions = [rolePlayQues0, rolePlayQues1, rolePlayQues2, rolePlayQues3, rolePlayQues4];
const rolePlay = new CategoryAndQuestions("ROLE PLAY?", rolePlayQuestions);

/* Africa Category */
const africaQues0 = new Question(100, "THIS COUNTRY ON THE ATLANTIC COAST IS AFRICA'S MOST POPULUS", "NIGERIA");
const africaQues1 = new Question(200, 'Asmara is the capital & largest city of this country that was formerly part of Ethiopia', "ERITREA");
const africaQues2 = new Question(300, 'The capital city of this Horn of Africa nation has the same name as the country', "DJIBOUTI");
const africaQues3 = new Question(400, 'This large country is alphabetically first of the countries in Africa', "ALGERIA");
const africaQues4 = new Question(500, 'In 1462 an explorer gave this country its name possibly because a nearby mountain resembled a lion', "SIERRA LEONE");
const africaQuestions = [africaQues0, africaQues1, africaQues2, africaQues3, africaQues4];
const africa = new CategoryAndQuestions("AFRICA", africaQuestions);

/*  REALITY TV Category */
const realityTVQues0 = new Question(100, "If you've been Keeping Up with the Kardashians you'll know she's the oldest of the 3 sisters", "KOURTNEY");
const realityTVQues1 = new Question(200, 'This Maroon 5 band member has been a coach on The Voice for all 12 seasons of the show', "ADAM LEVINE");
const realityTVQues2 = new Question(300, 'You are evicted is the elimination catchphrase on this reality TV show', "BIG BROTHER");
const realityTVQues3 = new Question(400, "Palau Micronesia & Vanuatu have all been exotic settings for this TV show", "SURVIVOR");
const realityTVQues4 = new Question(500, 'On Deadliest Catch crews risk life & limb to catch the snow or king ONE OF THESE', "CRAB");
const realityTVQuestions = [realityTVQues0, realityTVQues1, realityTVQues2, realityTVQues3, realityTVQues4];
const realityTV = new CategoryAndQuestions("REALITY TV", realityTVQuestions);

/*  Georgia Category */
const georgiaQues0 = new Question(100, 'Have a cookie in Savannah & visit the birthplace of Juliette Gordon Low who founded this group in 1912', "THE GIRL SCOUTS");
const georgiaQues1 = new Question(200, 'Georgia has 2 official state nicknames-- Empire State of the South & this fruity one', "THE PEACH STATE");
const georgiaQues2 = new Question(300, 'He ran an unsuccessful 1966 campaign for governor before a successful one 4 years later', "JIMMY CARTER");
const georgiaQues3 = new Question(400, "There's a University of Georgia campus in this city that shares its name with a European capital", "ATHENS");
const georgiaQues4 = new Question(500, "Flags honoring the nations who have hosted this surround the fountain in Atlanta's Centennial Park", "THE OLYMPICS");
const georgiaQuestions = [georgiaQues0, georgiaQues1, georgiaQues2, georgiaQues3, georgiaQues4];
const georgia = new CategoryAndQuestions("GEORGIA", georgiaQuestions);

/* Sounds Good To Me Category */
const soundsQues0 = new Question(100, 'If your high-flying idea turns out to be a dud it lands with this sound that rhymes with dud', "THUD");
const soundsQues1 = new Question(200, 'Hearing this hyphenated sound of tiny feet means you have kids in the house or mice', "PITTER-PATTER");
const soundsQues2 = new Question(300, 'Hearing this hyphenated sound MEANS SOMEONE IS AT YOUR DOOR AND YOUR DOORBELL MIGHT NOT BE WORKING', "KNOCK-KNOCK");
const soundsQues3 = new Question(400, 'Hearing this hyphenated sound MEANS SOMEONE IS AT YOUR DOOR AND YOUR DOORBELL IS WORKING', "DING-DONG");
const soundsQues4 = new Question(500, "After a few hours in the hot sun I'm ready to drink a cold beverage this way also an engine sound", "CHUG");
const soundsQuestions = [soundsQues0, soundsQues1, soundsQues2, soundsQues3, soundsQues4];
const sounds = new CategoryAndQuestions("SOUNDS GOOD!", soundsQuestions);

const gameBoard = [teams, rolePlay, africa, realityTV, georgia, sounds];

class Player {
    constructor(positionNum) {
        this.positionNum = positionNum;
        this.score = 0;
    }
    
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPositionNum() {
        return this.positionNum;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
    addToScore(val) {
        this.score += val;
    }
    minusFromScore(val) {
        this.score -= val;
    }
}

const questionCells = document.querySelectorAll('.ques');
questionCells.forEach((el) => {
    el.addEventListener('click', showQuestion);
});

const answer = document.querySelector('#ansform');
answer.addEventListener('submit', submitAnswer);

const idkButton = document.querySelector('#idk');
idkButton.addEventListener('click', (e) => {
    questionModal.style.display = 'none';
});

const currentGame = new Game();
const player1 = new Player(1);
const player2 = new Player(2);
const player3 = new Player(3);

currentGame.setPlayerNames("Damion", "Bilen", "Nofia");
currentGame.setPlayerTurn(player1);
showCategories();