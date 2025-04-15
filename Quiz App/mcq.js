const questions = [
  {
    text: "1) Which animal is known as the 'Ship of the Desert'?",
    options: ["Horse", "Elephant", "Camel", "Donkey"],
    ans: "Camel"
  },
  {
    text: "2) Where is Himalayan Mountaineering Institute located?",
    options: ["Shimla", "Darjeeling, India", "Sikkim", "Dehradun"],
    ans: "Darjeeling, India"
  },
  {
    text: "3) For how many disciplines is Nobel Prize awarded?",
    options: ["5", "6 disciplines", "4", "7"],
    ans: "6 disciplines"
  },
  {
    text: "4) Name the tennis player who is known as “The King of Clay”?",
    options: ["Novak Djokovic", "Roger Federer", "Andy Murray", "Rafael Nadal"],
    ans: "Rafael Nadal"
  },
  {
    text: "5) Which Indian city has been declared a World Heritage City (WHC)?",
    options: ["Mumbai", "Hyderabad", "Ahmadabad", "Delhi"],
    ans: "Ahmadabad"
  },
  {
    text: "6) What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ans: "Canberra"
  },
  {
    text: "7) Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    ans: "Mars"
  },
  {
    text: "8) Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    ans: "William Shakespeare"
  },
  {
    text: "9) How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    ans: "7"
  },
  {
    text: "10) Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    ans: "Carbon Dioxide"
  }
];

let index = 0;
let timerInterval;
let timeLeft = 60;

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  const timer = document.getElementById("timer");
  timer.textContent = ` Time Left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = ` Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("anstext").textContent = "⏱ Time's up!";
      document.getElementById("anstext").style.color = "orange";

      setTimeout(() => {
        index = (index + 1) % questions.length;
        showQuestion(index);
      }, 1000);
    }
  }, 1000);
}

function showQuestion(i) {
  const q = questions[i];
  document.getElementById('quetext').textContent = q.text;
  const optionsContainer = document.getElementById('options');
  const ansText = document.getElementById('anstext');

  optionsContainer.innerHTML = '';
  ansText.textContent = '';
  ansText.style.display = 'block';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;

    btn.onclick = () => {
      clearInterval(timerInterval);
      if (opt === q.ans) {
        ansText.textContent = "✅ Correct!";
        ansText.style.color = "green";
      } else {
        ansText.textContent = `❌ Wrong! .....Right Answer: ${q.ans}`;
        ansText.style.color = "rgb(243, 121, 121)";
      }

      setTimeout(() => {
        index = (index + 1) % questions.length;
        showQuestion(index);
      }, 2000);
    };

    optionsContainer.appendChild(btn);
  });

  startTimer();
}

showQuestion(index);
