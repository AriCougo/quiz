const btns = document.querySelectorAll('.btn');
const next = document.getElementById('next-btn');

const Quizzquestions = [
    {
        title: 'how many members are in stray kids?',
        option1: 7,
        option2: 8,
        option3: 9
    },
    {
        title: 'who is the youngest?',
        option1: 'felix',
        option2: 'seungmin',
        option3: 'jeongin'
    },
    {
        title: 'which is the debut song?',
        option1: 'hellevator',
        option2: 'distric 9',
        option3: 'side effetcs'
    },
    {
        title: 'with which song stray kids won for the first time at M Countdown?',
        option1: 'miroh',
        option2: 'mirror',
        option3: 'gods menu'
    },
    {
        title: 'which song has the lyrics, i am here always?',
        option1: 'waiting for us',
        option2: 'sorry i love you',
        option3: 'gone away'
    },
]

const correctOptions = [
    {
        correct: 8
    },
    {
        correct: "jeongin"
    },
    {
        correct: "distric 9"
    },
    {
        correct: "miroh"
    },
    {
        correct: "waiting for us"
    },
    
]

const title = document.getElementById('title');
const firstBtn = document.getElementById('option1');
const secondBtn = document.getElementById('option2');
const thirdBtn = document.getElementById('option3');

let questionIndex = 0;

function showQuestion () {
    const question = Quizzquestions[questionIndex];
    title.innerText = question.title;
    firstBtn.innerText = question.option1;
    secondBtn.innerText = question.option2;
    thirdBtn.innerText = question.option3;
}

const scoreElement = document.getElementById('score');
let score = 0;

function chosenOption(event) {
    const element = event.target;
    const currentCorrect = correctOptions[questionIndex].correct;

    if (element.textContent == currentCorrect) {
        element.style.backgroundColor = 'green';
        score ++
        
    } else {
        element.style.backgroundColor = 'red';
        if(score > 0){
            score --;
        }
    }

    scoreElement.innerText = score;
    next.disabled = false;

    btns.forEach(btn => {
        btn.disabled = true;
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', chosenOption);
})

next.addEventListener('click', function(){

    questionIndex = (questionIndex + 1) % Quizzquestions.length;
    
    if(questionIndex === 0){
        score = 0;
        scoreElement.innerText = score;
    }

    btns.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.disabled = false;
    });

    next.disabled = true;

    showQuestion(questionIndex);

})









    
    





