https://github.com/user-attachments/assets/23e8d8a6-2686-425a-ab8c-ab50625427d5



🧠 Description of Your Quiz App Code
📦 1. Questions Data
js
Copy
Edit
const questions = [ ... ];
This array holds 10 multiple-choice questions.

Each question has:

text: the question

options: an array of possible answers

ans: the correct answer

🧩 2. Quiz Logic Variables
js
Copy
Edit
let index = 0;
let timerInterval;
let timeLeft = 60;
index tracks the current question number.

timerInterval controls the countdown.

timeLeft is the seconds left to answer a question (default: 60 seconds per question).

⏱ 3. Timer Function
js
Copy
Edit
function startTimer() { ... }
Starts a 60-second timer.

Updates the timer every second.

If time runs out:

Shows "⏱ Time's up!"

Automatically moves to the next question after 1 second.

❓ 4. Show Question Function
js
Copy
Edit
function showQuestion(i) { ... }
Displays the question text and multiple options.

Clears previous answers and options.

Creates buttons for each answer option.

When an answer is clicked:

Timer stops

Shows if the answer is ✅ correct or ❌ wrong

Displays the right answer if wrong

Moves to the next question after 2 seconds

🚀 5. Start the Quiz
js
Copy
Edit
showQuestion(index);
This line starts the quiz by showing the first question (index = 0).
