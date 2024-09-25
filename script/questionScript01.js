let quiz01 = []

let questionsW02_01 = [
  '1. Have you ever been to South America?',
  '2. Have you ever taken a long trip on a boat',
  '3. Have you ever forgotten a friend’s name? ',
  '4. Have you ever danced cumbias? ',
  '5. What’s a sport you’ve always wanted to try? '
]
let questionsW02_02 = [
  '1. When are you outgoing? When are you shy?',
  '2. Do you prefer serious or easygoing people? Why?',
  '3. When are you on time? Are you ever late? ',
  '4. What are people in your family like? '
]

let questionsW02_03 = [
  '1. Have you ever taken a surfing class?',
  '2. Have you ever sung in front of an audience?',
  '3. Have you ever seen one of the Twilight movies?',
  '4. Have you ever tried a food you didn’t like?',
  '5. What’s a country you’ve never been to but would like to visit? '
]
let questionsW02_04 = [
  '1. When is it important to be patient?',
  '2. When is it the most important to be polite?',
  '3. When are you creative?',
  '4. What are your friends like?',
  '5. What’s a sport you’ve always wanted to try? '
]
let questionsW02_05 = [
  '1. Have you ever found some money?',
  '2. Have you ever lost something valuable?',
  '3. Have you ever been to Paris?',
  '4. Have you ever been in a hospital?',
  '5. What’s a subject you’ve always wanted to know more about? '
]
let questionsW02_06 = [
  '1. Have you ever been to South America?',
  '2. Have you ever taken a long trip on a boat',
  '3. Have you ever forgotten a friend’s name? ',
  '4. Have you ever danced cumbias? ',
  '5. What’s a sport you’ve always wanted to try? '
]
let questionsW02_07 = [
  '1. Have you ever met a famous person?',
  '2. Have you ever had Russian food?',
  '3. Have you ever done something embarrassing? ',
  '4. Have you ever won a contest?',
  '5. What’s a skill or a talent you’ve always wanted to have?'
]
let questionsW02_08 = [
  '1. Have you ever been to South America?',
  '2. Have you ever taken a long trip on a boat',
  '3. Have you ever forgotten a friend’s name? ',
  '4. Have you ever danced cumbias? ',
  '5. What’s a sport you’ve always wanted to try? '
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

console.log(quiz01)
let btt_Press  = function() {
   document.getElementById('q01').innerHTML  = questGen(questionsW02_01);
   document.getElementById('q02').innerHTML  = questGen(questionsW02_02);
   document.getElementById('q03').innerHTML  =questGen(questionsW02_03)
   document.getElementById('q04').innerHTML  =  questGen(questionsW02_04)
   document.getElementById('q05').innerHTML  = questGen(questionsW02_05)
   document.getElementById('q06').innerHTML  = questGen(questionsW02_06)
   document.getElementById.q07.innerHTML  = questGen(questionsW02_07)
   document.getElementById.q08.innerHTML  = questGen(questionsW02_08)
};

button1.addEventListener('click', btt_Press);