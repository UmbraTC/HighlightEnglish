
// Works with any list: 

let quiz01 = []

let questionsW02_01 = [
  'What’s the largest city you’ve ever visited?',
  'What’s the most exciting trip you’ve ever taken?',
  'What’s the most popular monument in this country? '
]
let questionsW02_02 = [
  'When you were a kid, did your parents make you work around the house?',
  'What did your parents think about your friends?',
  'Who was your favorite relative when you were growing up? Why?  ',
  'What did you use to do on summer break? '
]

let questionsW02_03 = [
  'What’s the nicest beach you’ve ever seen?',
  'What’s the most interesting place you’ve ever visited?',
  'What’s the best thing for a tourist to see in this country?'
  ]

let questionsW02_04 = [
  'When you were younger, what did your parents make you do that you didn’t like? ',
  'What were your parents always telling you to do when you were a child?',
  'Who was your favorite aunt or uncle? Why?',
  'What did your family use to do on weekends?'
]
let questionsW02_05 = [
  'What’s the most beautiful natural feature you’ve ever seen?',
  'What’s the most difficult time you’ve ever had on a trip?',
  'What’s the most interesting place to visit in this country?'
]
let questionsW02_06 = [
  'Is it better to wait until you’re older to get married? ',
  'How much time should kids spend on the Internet? ',
  'Should kids have a pet when they’re growing up? ',
  'Is it important for a child to have brothers and sisters?'
]
let questionsW02_07 = [
  'What’s the highest building you’ve ever been in?',
  'What’s the best vacation you’ve ever had?  ',
  'What’s the best time to visit this country? '
]
let questionsW02_08 = [
  'Is it OK for children to watch a lot of TV?',
  'Is it a good idea for teenagers to work? ',
  'Is it a good idea for families to eat meals together?',
  'Should kids get in trouble if they don’t spend  enough time with their parents?'
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