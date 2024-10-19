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
      question: "Sam ... lunch at the cafeteria tomorrow",
      answers: [
          { text: "is having", correct: true },
          { text: "has", correct: false },
          { text: "had", correct: false },
          { text: "had have", correct: false }
      ]
  },
  {
      question: "Mrs. Perkins ... her students a test in a few days.",
      answers: [
          { text: "gave", correct: false },
          { text: "have given", correct: false },
          { text: "is giving", correct: true },
          { text: "gives ", correct: false }
      ]
  },
  {
      question: "Hurry! The train ... in ten minutes",
      answers: [
          { text: "left", correct: false },
          { text: "gone", correct: false },
          { text: "is leaving", correct: true },
          { text: "leave", correct: true }
      ]
  },
  {
      question: "Tomorrow is Saturday! I ... late!",
      answers: [
          { text: "slept", correct: false },
          { text: "am sleeping", correct: true },
          { text: "sleeps" , correct: false },
          { text: "will sleep", correct: true }
      ]
  },
  {
      question: "Sally, turn off the TV! We ... dinner soon",
      answers: [
          { text: "eat", correct: false },
          { text: "ate", correct: false },
          { text: "are eating", correct: true },
          { text: "had eaten", correct: false }
      ]
  },
  {
      question: "No, we ...  a meeting today. It’s at three o’clock tomorrow",
      answers: [
          { text: "had", correct: false },
          { text: "are having", correct: false },
          { text: "are not having", correct: true },
          { text: " had have", correct: false }
      ]
  }
]
