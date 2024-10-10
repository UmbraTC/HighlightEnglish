
// Works with any list: 

let quiz01 = []

let questionsW02_01 = [
  'What foods are good for your health?',
  'Do you think it’s good to eat beef every day?',
  'Do you have enough time to eat a good breakfast every day? What do you eat?',
  'Do you like (fried / boiled / . . .) eggs?'
]
let questionsW02_02 = [
  '. What are you doing tomorrow night?',
  ' What’s a decision you’re going to have to make soon?',
  'How much time do you spend talking on the phone? ',
  'What can you do to get rid of clutter? '
]

let questionsW02_03 = [
  'What foods can improve your mood?',
  ' How many fruits and vegetables should you eat every day?',
  ' How much fast food do you eat? ',
  'Do you like (baked / mashed / . . . ) potatoes?'
  ]

let questionsW02_04 = [
  'Are you going to do anything this weekend?',
  ' What’s something you have to do, but you’d rather not do?',
  'Do you think people use their cell phones too much?',
  'What should you do with old magazines?'
]
let questionsW02_05 = [
  'What foods should people avoid?',
  ' Do you think green tea is good for your health?',
  'Do you usually have enough time to cook dinner? What do you make? ',
  ' Do you like (smoked / fried / . . . ) fish?'
]
let questionsW02_06 = [
  ' What are you doing after class?',
  'What’s something you’d rather not spend time on?',
  'Do you ever not answer your phone? When?',
  'What should you do with old books?'
]
let questionsW02_07 = [
  'How can you lose weight quickly? Is it healthy?',
  'How much cheese and other milk products should you eat? ',
  ' Do you ever eat too much? When?',
  'Do you like (steamed / stir-fried / . . . ) vegetables? '
]
let questionsW02_08 = [
  'What are your plans for lunch tomorrow?',
  ' What’s something you’ve done a lot of thinking about lately?',
  'Do you mind if people talk on their cell phones when you’re with them? ',
  ' What should you do with your old clothes?'
]

// iterador  + callBack function 

let questGen = (arrayQuest) =>{
  for (let i = 0; i< arrayQuest.length; i++){
    return arrayQuest[Math.floor(Math.random()*arrayQuest.length)]    
  }
}

// html link

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

// event listener 
button1.addEventListener('click', btt_Press);