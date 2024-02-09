// Components
const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const qContainer = document.getElementById("q-container");
const aContainer = document.getElementById("answers");

// Variables for shuffled array of quetstions and current question index
let shuffledQuestions, currentQIndex;

startBtn.addEventListener("click", startGame);

// Start Game
function startGame() {
  console.log("Game started");
  // Hide start button
  startBtn.classList.add("hide");

  // Reveal next button and question
  nextBtn.classList.remove("hide");
  qContainer.classList.remove("hide");

  // 50% change number will be positive, or negative
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  // starting at question 1
  currentQIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  console.log("Next question");
  // picks random question from shuffled array
  showQuestion(shuffledQuestions[currentQIndex]);
}

function selectAnswer() {
  console.log("Answer selected");
}

function showQuestion(question) {
  // updates question text element
  qContainer.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    console.log(button);
    button.addEventListener("click", selectAnswer);
    aContainer.appendChild(button);
  });
}

const questions = [
  {
    question: `What is 2 + 2?`,
    answers: [
      // 4 options for buttons
      { text: `4`, correct: true },
      { text: `22`, correct: false },
      { text: `2`, correct: false },
      { text: `0`, correct: false },
    ],
  },
];
