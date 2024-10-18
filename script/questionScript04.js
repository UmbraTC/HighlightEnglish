
// Works with any list: 

let quiz01 = []

let questionsW02_01 = [
  'Do you know someone  who can cook perfectly?',
  "What is something you can't live without?",
  'Is there any country that you would like to live in the future?',
  'Is there something that reminds you of your childhood?'
]
let questionsW02_02 = [
  ' How are your friends different from you? ',
  ' Who do you hang out with on weekends?',
  ' What kind of people do you get along with best? ',
  ' Do you think it’s OK to socialize with people you work with? '
]

let questionsW02_03 = [
  'What foods can improve your mood?',
  ' How many fruits and vegetables should you eat every day?',
  ' How much fast food do you eat? ',
  'Do you like (baked / mashed / . . . ) potatoes?'
  ]

let questionsW02_04 = [
  ' What’s a good age to settle down? ',
  ' What’s the best way to break up with someone you’ve dated for a long time? ',
  ' How do you keep in touch with your old friends?',
  'Do you have any friends who are much older or younger than you? '
]
let questionsW02_05 = [
  'What foods should people avoid?',
  ' Do you think green tea is good for your health?',
  'Do you usually have enough time to cook dinner? What do you make? ',
  ' Do you like (smoked / fried / . . . ) fish?'
]
let questionsW02_06 = [
  ' Are you still friends with anyone you grew up with? Who? ',
  ' What kind of people do you get along well with?',
  ' What are some good things to do when you go out on a date?',
  'Do you think a long-distance relationship can work out? Why or why not? '
]
let questionsW02_07 = [
  'How can you lose weight quickly? Is it healthy?',
  'How much cheese and other milk products should you eat? ',
  ' Do you ever eat too much? When?',
  'Do you like (steamed / stir-fried / . . . ) vegetables? '
]
let questionsW02_08 = [
  'What do you usually do with your friends on the weekends?',
  ' Is there anyone in your past you’d like to get in touch with? Who? ',
  '  If you want to meet someone, should you use an online dating service? Why or why not?  ',
  ' Do you think it’s important to like the people you work with? Why or why not?'
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