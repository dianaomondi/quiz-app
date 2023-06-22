const questions = [
    {
        question: "Which is the largest animal in the word",
        answers: [
            { text: "Shark",correct: faise},
            { text: "Blue Whale",correct: true},
            { text: "Elephant",correct: faise},
            { text: "Giraffe",correct: faise},
            
        ]
    },
    {
        question: "Which is the smallest country in the word",
        answers: [
            { text: "Vatican city",correct: true},
            { text: "Bhutan",correct: faise},
            { text: "Nepal",correct: faise},
            { text: "Shri lanka",correct: faise},
            
        ]

    },
    {
        question: "Which is the largest desert in the word",
        answers: [
            { text: "Kalahari",correct: faise},
            { text: "Gobi",correct: faise},
            { text: "Sahara",correct: faise},
            { text: "Antarctica",correct: true},
            
        ]
    },
    {
        question: "Which is the smallest continent in the word",
        answers: [
            { text: "Asia",correct: faise},
            { text: "Australia",correct: true},
            { text: "Arctic",correct: faise},
            { text: "Africa",correct: faise},
            
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();