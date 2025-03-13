const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-button');

let shuffledQuestions,currentQuestionIndex;
let quizScore = 0;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() =>Math.random() -0.5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
    quizScore = 0;
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions(currentQuestionIndex))
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach((answer) =>{
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.append(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct)

    Array.from(answerButtonElement.children).forEach((button) =>{
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }

    if(selectedButton.dataset == correct){
        quizScore++;
    }

    document.getElementById('righ-answer').innerText = quizScore

}


function setStatusClass(element, correct) {
    clearStatusClass(element)
        if(correct){
            element.classList.add("correct");

        }else{
            element.classList.add("wrong");
        }
    
}


function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question: 'which one of these is a JavaScript framework?',
        answer :[
                {text:'python',correct:false},
                {text:'Django',correct:false},
                {text:'React',correct:true},
                {text:'Eclipse',correct:false},  
        ],
    },
    {
        question: 'Who is the prime minister of India?',
        answer :[
                {text:'Modi',correct:true},
                {text:'Rahul Gandhi',correct:false},
               
        ],
    },

    {
        question: 'What is 4 X 3?',
        answer :[
                {text:'12',correct:true},
                {text:'23',correct:false},
        ],
    },
]
