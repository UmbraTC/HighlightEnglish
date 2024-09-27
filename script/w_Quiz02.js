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
      question: "Russia is … country in the world.",
      answers: [
          { text: " big", correct: false },
          { text: "the biggest  ", correct: true },
          { text: " bigger", correct: false },
          { text: "the bigest", correct: false }
      ]
  },
  {
      question: "Australia is big, but Canada is … Australia",
      answers: [
          { text: "bigger than", correct: true },
          { text: "biggest", correct: false },
          { text: "biggest than", correct: false },
          { text: "big ", correct: false }
      ]
  },
  {
      question: "That restaurant … restaurant in our town",
      answers: [
          { text: "worst", correct: false },
          { text: "is the baddest ", correct: false },
          { text: "is the worst", correct: true },
          { text: "is bad ", correct: false }
      ]
  },
  {
      question: "David … person in our English  class.",
      answers: [
          { text: "the most tall", correct: false },
          { text: "is the tallest ", correct: true },
          { text: "has the most tall", correct: false },
          { text: "the most tallest", correct: false }
      ]
  },
  {
      question: "Asian elephants are heavy, but African elephants are even ….",
      answers: [
          { text: "heavy ", correct: false },
          { text: "heavier", correct: true },
          { text: "heavier  than", correct: false },
          { text: "heaviest than ", correct: false }
      ]
  },
  {
      question: "We never watch that TV program. It’s … program on TV!.",
      answers: [
          { text: "the most boring", correct: true },
          { text: "the boringest", correct: false },
          { text: "the more boring", correct: false },
          { text: "more boring than", correct: false }
      ]
  },
  {
      question: "That … road in the entire country!.",
      answers: [
          { text: "most danger", correct: false },
          { text: "do been dangerous", correct: false },
          { text: "is the most dangerous", correct: true },
          { text: "most dangerous ", correct: false }
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
      question: "Reading a book with a nice, hot cup of tea  … than doing exercise.",
      answers: [
          { text: "is the most relaxing", correct: false },
          { text: "is more relaxing", correct: true },
          { text: "relaxing the most " , correct: false },
          { text: "more relaxing", correct: false }
      ]
  },
  {
      question: "Noel and David … people that I know",
      answers: [
          { text: "is the most interesting", correct: false },
          { text: "is interested", correct: false },
          { text: "are the most interesting", correct: true },
          { text: "are interested", correct: false }
      ]
  },
  {
      question: "Did you know that crossing a busy street is … flying in an airplane?",
      answers: [
          { text: "most dangerous than", correct: false },
          { text: "the more dangerous", correct: false },
          { text: "more dangerous than ", correct: true },
          { text: " the most dangerous than", correct: false }
      ]
  }
];
{
      question: "People didn’t ...  have TV",
      answers: [
          { text: "used to", correct: false },
          { text: "used", correct: false },
          { text: "use to ", correct: true },
          { text: " have to", correct: false }
      ]
  }
{
      question: "I ...  study Japanese ",
      answers: [
          { text: "use to", correct: false },
          { text: "used", correct: false },
          { text: "useD to ", correct: true },
          { text: " have to", correct: false }
      ]
  };