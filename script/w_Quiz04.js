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
      question: "I have a friend … speaks four languages.",
      answers: [
          { text: " that he", correct: false },
          { text: "who ", correct: true },
          { text: " who him", correct: false },
          { text: "which", correct: false }
      ]
  },
  {
      question: "The Internet is a place ... you can get cheap technology products.",
      answers: [
          { text: "where", correct: true },
          { text: "that", correct: false },
          { text: "which", correct: false },
          { text: "who ", correct: false }
      ]
  },
  {
      question: 'E-mails ... advertise things are called "spam"',
      answers: [
          { text: "that", correct: true },
          { text: "who", correct: false },
          { text: "which", correct: true },
          { text: "where", correct: false }
      ]
  },
  {
      question: 'A "technophobe" is someone  … is scared of technology.',
      answers: [
          { text: "where", correct: false },
          { text: "who", correct: true },
          { text: "that he", correct: false },
          { text: "that", correct: false }
      ]
  },
  {
      question: "We should only buy products … can be recycled.",
      answers: [
          { text: "who ", correct: false },
          { text: "that", correct: true },
          { text: "that they", correct: false },
          { text: "which", correct: true }
      ]
  },
  {
      question: "That's the shop ... I bought those shoes.",
      answers: [
          { text: "where", correct: true },
          { text: "who", correct: false },
          { text: "where he", correct: false },
          { text: "that", correct: false }
      ]
  },
  {
      question: "I can't find the CD ... I borrowed from you.",
      answers: [
          { text: "what", correct: false },
          { text: "who", correct: false },
          { text: "that", correct: true },
          { text: "that is ", correct: false }
      ]
  },
  {
      question: "Do you remember the park ...  we met?",
      answers: [
          { text: "which", correct: false },
          { text: "who", correct: false },
          { text: "where", correct: true },
          { text: "that", correct: false }
      ]
  },
  {
      question: "There were three people at the party ... knew me.",
      answers: [
          { text: "that who", correct: false },
          { text: "which", correct: false },
          { text: "that they" , correct: false },
          { text: "who", correct: true }
      ]
  },
  {
      question: "This is the computer ...  I bought from my friend.",
      answers: [
          { text: "what", correct: false },
          { text: "who", correct: false },
          { text: "which", correct: true },
          { text: "that wich", correct: false }
      ]
  },
  {
      question: "The two men ... robbed the bank were wearing masks.",
      answers: [
          { text: "that they", correct: false },
          { text: "which", correct: false },
          { text: "who", correct: true },
          { text: "that wich", correct: false }
      ]
  },
  {
      question: "Working is the only thing ... makes him happy.",
      answers: [
          { text: "that it", correct: false },
          { text: "who", correct: false },
          { text: "which", correct: true },
          { text: "that wich", correct: false }
      ]
  },
  {
      question: "The police are looking for the place ... he is hiding.",
      answers: [
          { text: "that it", correct: false },
          { text: "who", correct: false },
          { text: "where", correct: true },
          { text: "that where", correct: false }
      ]
  },
  {
      question: "I want to see the film ... everybody's talking about.",
      answers: [
          { text: "that it", correct: false },
          { text: "who", correct: false },
          { text: "which", correct: true },
          { text: "that wich", correct: false }
      ]
  },
  {
      question: "What's the name of the man ...  lives next door?",
      answers: [
          { text: "that he", correct: false },
          { text: "where", correct: false },
          { text: "who", correct: true },
          { text: " that who", correct: false }
      ]
  }
]
