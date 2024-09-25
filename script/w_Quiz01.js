document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add('hide');
});

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quizAppElement = document.getElementById('quiz-app');
const resultsElement = document.createElement('div');
resultsElement.setAttribute('id', 'results');
resultsElement.classList.add('results', 'hide');
quizAppElement.appendChild(resultsElement);

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', () => selectAnswer(button));
      answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  if (correct) {
      score++;
  }
  setStatusClass(selectedButton, correct);

  setTimeout(() => {
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
          nextButton.classList.remove('hide');
      } else {
          concludeQuiz();
      }
  }, 1000); // Adjust delay as needed
 
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function concludeQuiz() {
  questionContainerElement.classList.add('hide');
  nextButton.classList.add('hide');

  resultsElement.classList.remove('hide');
  resultsElement.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} out of ${shuffledQuestions.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
  `;
  quizAppElement.appendChild(resultsElement);
}

function restartQuiz() {
  resultsElement.classList.add('hide');
  score = 0;
  currentQuestionIndex = 0;
  startGame();
}

const questions = [
  {
      question: "It’s a great movie. I have … that movie many times.",
      answers: [
          { text: "a) saw", correct: false },
          { text: "b) seen ", correct: true },
          { text: "c) see", correct: false },
          { text: "d) none", correct: false }
      ]
  },
  {
      question: "Have you … really strange or  interesting food?",
      answers: [
          { text: "ever eaten", correct: true },
          { text: "eat", correct: false },
          { text: "even ate", correct: false },
          { text: "never eaten ", correct: false }
      ]
  },
  {
      question: "(A) … your brother talked to you yet? _____________  (B) Yes, he ….",
      answers: [
          { text: "Has / did", correct: false },
          { text: "did / has", correct: false },
          { text: "Has / has ", correct: true },
          { text: "have / have", correct: false }
      ]
  },
  {
      question: "My family and I … to many different countries around the world.",
      answers: [
          { text: "did fly", correct: false },
          { text: "have flown ", correct: true },
          { text: "has flown", correct: false },
          { text: "flown", correct: false }
      ]
  },
  {
      question: "My sister … ridden a bicycle. She is afraid that she will fall off.",
      answers: [
          { text: "never ", correct: false },
          { text: "has never", correct: true },
          { text: "did ever", correct: false },
          { text: "has ever ", correct: false }
      ]
  },
  {
      question: "I’m sorry, but I … finished my homework yet.",
      answers: [
          { text: "haven’t", correct: true },
          { text: "hasn’t", correct: false },
          { text: "have", correct: false },
          { text: "did", correct: false }
      ]
  },
  {
      question: "Eva, Thomas, and Robert … Hong Kong many times.",
      answers: [
          { text: "been to", correct: false },
          { text: "do been to", correct: false },
          { text: "have been to", correct: true },
          { text: "have been", correct: false }
      ]
  },
  {
      question: "Have you finished answering all the questions …?",
      answers: [
          { text: "never", correct: false },
          { text: "ever", correct: false },
          { text: "yet", correct: true },
          { text: "to", correct: false }
      ]
  },
  {
      question: "She has a car, so she … there many times.",
      answers: [
          { text: "did drove", correct: false },
          { text: "has driven", correct: true },
          { text: "have drive", correct: false },
          { text: "has drove", correct: false }
      ]
  },
  {
      question: "I’ve cleaned the kitchen, but I … the living room yet.",
      answers: [
          { text: "have cleaned", correct: false },
          { text: "haven’t clean", correct: false },
          { text: "haven’t cleaned", correct: true },
          { text: "did cleaned", correct: false }
      ]
  }
];