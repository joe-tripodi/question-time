const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

questions = [
"What’s one thing you’re afraid to tell anyone else?",
"What are three things about me that attracted you to me when we first met?",
"When did you know you loved me?",
"What does the perfect day look like for you?",
"What is something you’ve always wanted to ask me but haven’t?",
"What have I done that has made you proud? When was it?",
"What is your biggest regret?",
"If you could relive one day of our relationship what day would it be?",
"What do you like about our physical relationship? How could we improve?",
"Which of the five senses are most sensual to you?",
"What do you need most in a friend right now?",
"What do you believe is missing from your life?",
"How have you evolved in the last 5 years?",
"What are your goals for our relationship?",
"What are some of your dreams for your life?",
"How would you like to change in the next year?",
"What legacy do you want to leave behind?",
"Where in your life do you feel most unfulfilled?",
"What would you change about your financial situation and why?",
"Where would you like us to travel to and why?",
"What is an adventure you want to have before you die?",
"How has your perspective on the world changed in the last two years?",
"If you could have dinner with one person living or dead, who would it be and why?",
"If you could have someone else’s life, who would it be?",
"What historical event would you want to be present for and why?",
"If we lived for 100 years, what would you want our lives to look like?",
"How do you feel about monogamy?",
"What career would you choose if you had unlimited money?",
"What were some of the highlights of your childhood?",
"What is your favorite memory of us?",
"What has been your happiest moment this year so far?",
"Which relative are you closest to and why?",
"Who is the most difficult person in your life to get along with and why?",
"What influenced your decision to have kids or not have kids?",
"Who is your childhood hero and why?",
"If you could change us into an animal pair, which one would you choose?",
"If you could choose any country for us to live in, which one would you choose?",
"What do you think is the best part about our relationship?",
"If you could change one of your characteristics, which one would it be?",
"What would you change about the way we met?",
"What is the biggest adversity you’ve had in the last 5 years and how did you overcome it?",
"What is your philosophy for living a happy life?",
"How do your daily habits change when you’re feeling stressed?",
"What are you doing currently that your future self would thank you for?",
"What would be the theme song of our relationship?",
"What have you learned about relationships from your parents?",
"What are your top 3 values?",
"What is your timeline for our relationship (marriage, children, career, retirement, etc)",
"How am I similar to your parent(s)?",
"How do you need support from me when you’re sad or frustrated?",
];

seen = {};

header = document.getElementById("header")
header.innerHTML = `Question time: ${Object.keys(seen).length}/${questions.length}`
button = document.getElementById("question-button")
button.addEventListener("click", ()=>{
  
  if (Object.keys(seen).length == questions.length){
    button.innerHTML = "No more questions"
    return;
  }
  index = getRandomInteger(0, questions.length)
  while(seen[index] == true){
    index = getRandomInteger(0, questions.length)
  }
  if (seen[index] == undefined){
    qEl = document.getElementById("question");
    seen[index] = true;
    qEl.innerHTML = `<p>${questions[index]}</p>`
    q = document.getElementById(`question-${index}`)
    if (q != undefined){
      q.classList.add("cross_out");
    }
    header.innerHTML = `Question time: ${Object.keys(seen).length}/${questions.length}`
  }
});

allQs = document.getElementById("question-list");
for (let i = 0; i < questions.length; i++){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(questions[i]));
  li.setAttribute("id", `question-${i}`);
  li.classList.add("question")
  allQs.appendChild(li);
  allQs.style.display = "none";
}
list_header = document.getElementById("list_header")
list_header.addEventListener("click", ()=>{
  if (allQs.style.display == "none"){
    allQs.style.display="block";
  } else {
    allQs.style.display="none";
  }
})

function resetAllQuestions(){
  for(let i = 0; i<questions.length; i++){
    q = document.getElementById(`question-${i}`)
    if (q != undefined){
      q.classList.remove("cross_out");
    }
  }
}

reset = document.getElementById("reset")
reset.addEventListener("click", ()=> {
  seen = {}
  header.innerHTML = `Question time: ${Object.keys(seen).length}/${questions.length}`
  resetAllQuestions();
  qEl = document.getElementById("question");
  qEl.innerHTML = ""
})
