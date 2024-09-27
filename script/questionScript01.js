let quiz01 = []

let questionsW02_01 = [
  'Have you ever been to South America?',
  'Have you ever taken a long trip on a boat',
  'Have you ever forgotten a friend’s name? ',
  'Have you ever danced cumbias? ',
  'What’s a sport you’ve always wanted to try? '
]
let questionsW02_02 = [
  'When are you outgoing? When are you shy?',
  'Do you prefer serious or easygoing people? Why?',
  'When are you on time? Are you ever late? ',
  'What are people in your family like? '
]

let questionsW02_03 = [
  'Have you ever taken a surfing class?',
  'Have you ever sung in front of an audience?',
  'Have you ever seen one of the Twilight movies?',
  'Have you ever tried a food you didn’t like?',
  'What’s a country you’ve never been to but would like to visit? '
]
let questionsW02_04 = [
  'What are young people like around here?',
  'Is it ever OK to be selfish? When? ',
  'When are your friends competitive?',
  'When are you a hard worker?'
]
let questionsW02_05 = [
  'Have you ever found some money?',
  'Have you ever lost something valuable?',
  'Have you ever been to Paris?',
  'Have you ever been in a hospital?',
  'What’s a subject you’ve always wanted to know more about? '
]
let questionsW02_06 = [
  'What are people in your neighborhood like?',
  'Do you learn languages easily? Or is it difficult?',
  'Do you think most people are honest? Why orwhy not? ',
  'How could you be more organized? '
]
let questionsW02_07 = [
  'Have you ever met a famous person?',
  'Have you ever had Russian food?',
  'Have you ever done something embarrassing? ',
  'Have you ever won a contest?',
  'What’s a skill or a talent you’ve always wanted to have?'
]
let questionsW02_08 = [
  'When is it important to be patient?',
  'When is it the most important to be polite?',
  'When are you creative?  ',
  'What are your friends like?'
]
let questGen = (arrayQuest) =>{
  for (let i = 0; i< arrayQuest.length; i++){
    return arrayQuest[Math.floor(Math.random()*arrayQuest.length)]    
  }
}

let quest01 = questGen(questionsW02_01)
let quest02 = questGen(questionsW02_02)
let quest03 = questGen(questionsW02_03)
let quest04 = questGen(questionsW02_04)

quiz01.push(quest01)
quiz01.push(quest02)
quiz01.push(quest03)
quiz01.push(quest04)


let btt_Press  = function() {
   document.getElementById('q01').innerHTML  = questGen(questionsW02_01);
   document.getElementById('q02').innerHTML  = questGen(questionsW02_02);
   document.getElementById('q03').innerHTML  =questGen(questionsW02_03)
   document.getElementById('q04').innerHTML  =  questGen(questionsW02_04)
   document.getElementById('q05').innerHTML  = questGen(questionsW02_05)
   document.getElementById('q06').innerHTML  = questGen(questionsW02_06)
   document.getElementById('q07').innerHTML  = questGen(questionsW02_07)
   document.getElementById('q08').innerHTML  = questGen(questionsW02_08)
};

button1.addEventListener('click', btt_Press);