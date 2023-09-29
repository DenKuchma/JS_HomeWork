const animals = [
    'кошка',
    'собака',
    'кролик',
    'лиса',
    'слон',
    'тигр',
    'лев',
    'заяц',
    'медведь',
    'олень',
    'волк',
    'жираф',
    'кенгуру',
    'пингвин',
    'орел',
    'дельфин',
    'крокодил',
    'черепаха',
    'лягушка',
    'жаба'
];
//импорт с другого файлика
let secretWord = '';
let guessedWord = [];
let incorrectGuesses = 0;


const createHumanBody = (classlist, parent = document.body, tag = 'div') => {
    const node = document.createElement(tag);
    if (classlist instanceof Array) {
        node.classList.add(...classlist); 
    } else{
        node.classList.add(...classlist.split(' '));
    }
    parent.appendChild(node);
}
const createHumanImage = (imageSrc, parent = document.body) => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('img-result')
    parent.appendChild(img);
}
const getElemFromHTML = (element) => document.querySelector(element);
const humanBodyCreate = createHumanBody('human')

const wordDisplay = getElemFromHTML('#word-display');
const letterInput = getElemFromHTML('#letter-input');
const checkButton = getElemFromHTML('#check-letter');
const resultDiv = getElemFromHTML('#result');
const resetButton = getElemFromHTML('#reset-game');


class HumanBody {
    constructor(parent) {
        this.parent = parent;
    }
    createHead(){
        createHumanBody('head', this.parent);
    }
    createBody(){
        createHumanBody('body', this.parent);
    }
    createLeftArm(){
        createHumanBody('arm left-arm', this.parent);
    }
    createRightArm(){
        createHumanBody('arm right-arm', this.parent);
    }
    createLeftLeg(){
        createHumanBody('leg left-leg', this.parent);
    }
    createRightLeg(){
        createHumanBody('leg right-leg', this.parent);
    }
}

const game = new HumanBody(getElemFromHTML('.human'));

function *playGame(){
    yield createSecretWord(animals)
    yield game.createHead()
    yield game.createBody()
    yield game.createLeftArm()
    yield game.createRightArm()
    yield game.createLeftLeg()
    yield game.createRightLeg()
}


const gameIterator = playGame();

document.addEventListener('DOMContentLoaded', () => {
    gameIterator.next();
});

const createSecretWord = (words) => {
    secretWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(secretWord.length).fill('_');
    guessedWord[0] = secretWord[0]
    wordDisplay.textContent = guessedWord.join(' ');
}

function checkLetter() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';
    
    if (secretWord.includes(letter)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        wordDisplay.textContent = guessedWord.join(' ');

        if (!guessedWord.includes('_')) {
            resultDiv.textContent = 'Поздравляю, ты живой!';
            checkButton.disabled = true;
            getElemFromHTML('.human').style.display = 'none';
            createHumanImage('https://99px.ru/sstorage/86/2016/03/image_862203162226395152539.gif')
        }
    } else {
        incorrectGuesses++;
        gameIterator.next();
    }

    if (incorrectGuesses >= 7) {
        resultDiv.textContent = 'Игра окончена, и очень плачевно...';
        checkButton.disabled = true;
        getElemFromHTML('.human').style.display = 'none';
        createHumanImage('https://www.meme-arsenal.com/memes/83fa8acc714d0d8f867816445cbc09ca.jpg')
    }
}

function resetGame() {
    location.reload();
}


checkButton.addEventListener('click', checkLetter);
resetButton.addEventListener('click', resetGame);

