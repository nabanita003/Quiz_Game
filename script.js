const questionSets = {
  aptitude: [
    { question: "1) What is 5 + 7?", options: ["10", "12", "14", "15"], answer: "12" },
    { question: "2) If a train travels 60km in 1 hour, how far in 2 hours?", options: ["120km", "60km", "100km", "90km"], answer: "120km" },
    { question: "3) What is 15% of 200?", options: ["20", "25", "30", "35"], answer: "30" },
    { question: "4) Find the next number: 2, 4, 8, 16, ...?", options: ["18", "20", "32", "24"], answer: "32" },
    { question: "5) If 3x = 15, what is x?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "6) What is 7 squared?", options: ["42", "48", "49", "56"], answer: "49" },
    { question: "7) Simplify: 12 ÷ 3 + 4", options: ["8", "7", "6", "5"], answer: "8" },
    { question: "8) If a rectangle has length 10 and width 5, area is?", options: ["50", "15", "25", "30"], answer: "50" },
    { question: "9) Solve: 9 - 3 + 2", options: ["6", "8", "7", "4"], answer: "8" },
    { question: "10) What is 10% of 50?", options: ["4", "5", "6", "7"], answer: "5" },
  ],
  reasoning: [
    { question: "1) Find the odd one out: Apple, Banana, Carrot, Grape", options: ["Apple", "Banana", "Carrot", "Grape"], answer: "Carrot" },
    { question: "2)If all bloops are razzies and all razzies are lazzies, are all bloops definitely lazzies?", options: ["Yes", "No", "Cannot say", "Maybe"], answer: "Yes" },
    { question: "3)What comes next: 1, 3, 6, 10, 15, ...?", options: ["21", "18", "20", "24"], answer: "21" },
    { question: "4)Choose the missing number: 2, 4, 8, 16, ?", options: ["32", "18", "20", "24"], answer: "32" },
    { question: "5)Which figure completes the series?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Triangle" },
    { question: "6)Find the next letter: A, C, F, J, O, ...", options: ["U", "T", "S", "R"], answer: "U" },
    { question: "7)If today is Monday, what day will be 3 days after Friday?", options: ["Monday", "Tuesday", "Saturday", "Sunday"], answer: "Tuesday" },
    { question: "8)Find the number that does not belong: 2, 4, 7, 8, 10", options: ["2", "4", "7", "10"], answer: "7" },
    { question: "9)If you rearrange the letters 'CIFAIPC' you get?", options: ["Pacific", "Capific", "Pacifci", "Cipafic"], answer: "Pacific" },
    { question: "10)How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
  ],
  english: [
    { question: "1) Choose the correct spelling:", options: ["Recieve", "Receive", "Recive", "Receeve"], answer: "Receive" },
    { question: "2) Fill in the blank: She ___ to the store.", options: ["go", "goes", "going", "gone"], answer: "goes" },
    { question: "3) Select the synonym of 'happy':", options: ["Sad", "Angry", "Joyful", "Tired"], answer: "Joyful" },
    { question: "4) What is the antonym of 'cold'?", options: ["Hot", "Warm", "Cool", "Freezing"], answer: "Hot" },
    { question: "5) Choose the correct sentence:", options: ["He don't like it.", "He doesn't like it.", "He didn't liked it.", "He isn't liking it."], answer: "He doesn't like it." },
    { question: "6) Fill in the blank: They have ___ their work.", options: ["done", "do", "did", "doing"], answer: "done" },
    { question: "7) Identify the noun in the sentence: 'The cat sleeps.'", options: ["Cat", "Sleeps", "The", "None"], answer: "Cat" },
    { question: "8) Choose the plural form of 'child':", options: ["Childs", "Children", "Childes", "Child"], answer: "Children" },
    { question: "9) Fill in the blank: I have ___ a book.", options: ["read", "reads", "reading", "red"], answer: "read" },
    { question: "10) Select the correct preposition: He is good ___ math.", options: ["at", "in", "on", "for"], answer: "at" },
  ],
  technical: [
    { question: "1) What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
    { question: "2) Which language is used for styling web pages?", options: ["HTML", "JQuery", "CSS", "XML"], answer: "CSS" },
    { question: "3) Inside which HTML element do we put the JavaScript?", options: ["<js>", "<script>", "<javascript>", "<scripting>"], answer: "<script>" },
    { question: "4) Which company developed the Java programming language?", options: ["Sun Microsystems", "Apple", "Microsoft", "Google"], answer: "Sun Microsystems" },
    { question: "5) What is the value of binary 1010?", options: ["10", "12", "15", "8"], answer: "10" },
    { question: "6) What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "7) Which of these is a NoSQL database?", options: ["MySQL", "Oracle", "MongoDB", "SQL Server"], answer: "MongoDB" },
    { question: "8) What is the main function of an Operating System?", options: ["Manage hardware", "Run programs", "Control memory", "All of the above"], answer: "All of the above" },
    { question: "9) What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Real Access Memory"], answer: "Random Access Memory" },
    { question: "10) What is the full form of CPU?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Performance Unit", "Computer Processing Unit"], answer: "Central Processing Unit" },
  ],
};

// Elements
const sectionSelection = document.getElementById('sectionSelection');
const quizBox = document.getElementById('quizBox');
const quizTitle = document.getElementById('quizTitle');
const timeLeftEl = document.getElementById('timeLeft');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');

let currentSection = '';
let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 15;

// Utility to get current logged in user or null
function getCurrentUser() {
  return localStorage.getItem("currentUser") || null;
}

function startTimer() {
  let timeLeft = timePerQuestion;
  timeLeftEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      handleAnswer(null); // treat as wrong answer and move on
    }
  }, 1000);
}

function showQuestion() {
  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  const optionLabels = ['a', 'b', 'c', 'd'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span class="option-number">${optionLabels[i]})</span> <span class="option-text">${opt}</span>`;
    btn.onclick = () => handleAnswer(opt);
    optionsEl.appendChild(btn);
  });

  updateProgress();
  scoreEl.textContent = `Score: ${score}`;
  startTimer();
}

function updateProgress() {
  const progressPercent = ((currentIndex) / questions.length) * 100;
  progressEl.style.width = progressPercent + '%';
}

function handleAnswer(selected) {
  clearInterval(timer);
  const correctAnswer = questions[currentIndex].answer;
  if (selected === correctAnswer) {
    score++;
  }

  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.includes(correctAnswer)) {
      btn.classList.add('correct');
    } else if (btn.textContent.includes(selected)) {
      btn.classList.add('wrong');
    }
  });

  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }, 1000);
}
//error
document.addEventListener('DOMContentLoaded', () => {
  const sectionSelection = document.getElementById('sectionSelection');

  if (sectionSelection) {
    sectionSelection.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentSection = btn.dataset.section;
        questions = questionSets[currentSection];
        currentIndex = 0;
        score = 0;

        quizTitle.textContent = `Quiz: ${btn.textContent}`;
        sectionSelection.style.display = 'none';
        quizBox.style.display = 'flex';
        progressEl.style.width = '0%';

        showQuestion();
      });
    });
  }
});

// Leaderboard functions

function getLeaderboardData() {
  return JSON.parse(localStorage.getItem('leaderboardData')) || [];
}

function saveLeaderboardData(data) {
  localStorage.setItem('leaderboardData', JSON.stringify(data));
}

function addScoreToLeaderboard(player, score, totalQuestions) {
  const data = getLeaderboardData();

  const accuracy = ((score / totalQuestions) * 100).toFixed(2);

  data.push({ player, score, totalQuestions, accuracy, timestamp: Date.now() });

  data.sort((a, b) => b.score - a.score);

  if (data.length > 10) data.length = 10;

  saveLeaderboardData(data);
  renderLeaderboard();
}

function renderLeaderboard() {
  const leaderboardBody = document.getElementById('leaderboard-body');
  const data = getLeaderboardData();

  leaderboardBody.innerHTML = '';

  if (data.length === 0) {
    leaderboardBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No scores yet. Take a quiz!</td></tr>`;
    return;
  }

  data.forEach((entry, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.player}</td>
      <td>${entry.score} / ${entry.totalQuestions}</td>
      <td>${entry.accuracy}%</td>
    `;
    leaderboardBody.appendChild(tr);
  });
}


// function endQuiz() {
//   clearInterval(timer);

//   // Calculate accuracy safely
//   let accuracy = questions.length > 0 
//       ? ((score / questions.length) * 100).toFixed(2) 
//       : 0;

//   // Display completion message
//   questionEl.textContent = `Section "${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}" Completed!`;
//   optionsEl.innerHTML = `
//     <p style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">
//       Your Score: ${score} / ${questions.length}
//     </p>
//     <p style="font-size: 16px; margin-bottom: 15px;">
//       Accuracy: ${accuracy}%
//     </p>
//     <button id="saveScoreBtn" style="padding:10px 20px; font-size:16px; cursor:pointer; margin-right:10px;">
//       Save Score
//     </button>
//     <button id="backToSectionsBtn" style="padding:10px 20px; font-size:16px; cursor:pointer; margin-right:10px;">
//       Back to Sections
//     </button>
//     <button id="tryAgainBtn" style="background:lightgreen; padding:10px 20px; margin:5px; cursor:pointer;">
//       Try Again
//     </button>
//     <button id="resetGameBtn" style="background:red; color:white; padding:10px 20px; margin:5px; cursor:pointer;">
//       Reset Game
//     </button>
//   `;

//   scoreEl.textContent = `Score: ${score} / ${questions.length}`;
//   progressEl.style.width = '100%';

//   // Save score button
//   document.getElementById('saveScoreBtn').addEventListener('click', () => {
//     const player = getCurrentUser() || prompt("Enter your name to save your score:");

//     if (!player || player.trim() === "") {
//       alert("Name cannot be empty. Score not saved.");
//       return;
//     }

//     addScoreToLeaderboard(player.trim(), score, questions.length);
//     alert("Score saved to leaderboard!");
//     document.getElementById('saveScoreBtn').disabled = true;
//   });

//   // Back to section selection
//   document.getElementById('backToSectionsBtn').addEventListener('click', () => {
//     sectionSelection.style.display = 'block';
//     quizBox.style.display = 'none';
//   });

//   // Try Again (restart same section without going to section selection)
//   document.getElementById('tryAgainBtn').addEventListener('click', () => {
//     startQuiz(currentSection); // This should re-run quiz logic for same section
//   });

//   // Reset Game (clear progress & go back to section selection)
//   document.getElementById('resetGameBtn').addEventListener('click', () => {
//     score = 0;
//     currentQuestionIndex = 0;
//     sectionSelection.style.display = 'block';
//     quizBox.style.display = 'none';
//   });
// }

function startQuiz(section) {
    currentSection = section;
    questions = [...questionSets[currentSection]];
    currentIndex = 0;
    score = 0;

    sectionSelection.style.display = 'none';
    quizBox.style.display = 'flex';
    showQuestion();
}


function endQuiz() {
  clearInterval(timer);

  // Calculate accuracy safely
  let accuracy = questions.length > 0 
      ? ((score / questions.length) * 100).toFixed(2) 
      : 0;

  // show popup
  showThankYouPopup();

  // Display completion message
  questionEl.textContent = `Section "${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}" Completed!`;
  optionsEl.innerHTML = `
    <p style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">
      Your Score: ${score} / ${questions.length}
    </p>
    <p style="font-size: 16px; margin-bottom: 15px;">
      Accuracy: ${accuracy}%
    </p>
    <button id="saveScoreBtn" style="padding:10px 20px; font-size:16px; cursor:pointer; margin-right:10px;">
      Save Score
    </button>
    <button id="backToSectionsBtn" style="padding:10px 20px; font-size:16px; cursor:pointer; margin-right:10px;">
      Back to Sections
    </button>
    <button id="tryAgainBtn" style="background:lightgreen; padding:10px 20px; margin:5px; cursor:pointer;">
      Try Again
    </button>
    <button id="resetGameBtn" style="background:red; color:white; padding:10px 20px; margin:5px; cursor:pointer;">
      Reset Game
    </button>
  `;

  scoreEl.textContent = `Score: ${score} / ${questions.length}`;
  progressEl.style.width = '100%';

  // Save score button
  document.getElementById('saveScoreBtn').addEventListener('click', () => {
    const player = getCurrentUser() || prompt("Enter your name to save your score:");

    if (!player || player.trim() === "") {
      alert("Name cannot be empty. Score not saved.");
      return;
    }

    addScoreToLeaderboard(player.trim(), score, questions.length);
    alert("Score saved to leaderboard!");
    document.getElementById('saveScoreBtn').disabled = true;
  });

  // Back to section selection
  document.getElementById('backToSectionsBtn').addEventListener('click', () => {
    sectionSelection.style.display = 'block';
    quizBox.style.display = 'none';
  });

 // Try Again button
document.getElementById('tryAgainBtn').addEventListener('click', () => {
    clearInterval(timer);
    score = 0;
    currentIndex = 0; // or currentQuestionIndex if that’s what your code uses
    startQuiz(currentSection); // reuse the same start logic
});



  // Reset Game (clear progress & go back to section selection)
  document.getElementById('resetGameBtn').addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    sectionSelection.style.display = 'block';
    quizBox.style.display = 'none';
  });
}


// Render leaderboard on page load
document.addEventListener('DOMContentLoaded', () => {
  renderLeaderboard();
});



// ---------- Thank you popup ----------
function showThankYouPopup(autoCloseMs = 4000) {
  // overlay
  const overlay = document.createElement('div');
  overlay.id = 'thankyou-overlay';
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0,0,0,0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '9999';

  // modal
  const modal = document.createElement('div');
  modal.style.background = '#fff';
  modal.style.padding = '22px';
  modal.style.borderRadius = '10px';
  modal.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
  modal.style.textAlign = 'center';
  modal.style.maxWidth = '90%';
  modal.style.minWidth = '280px';

  modal.innerHTML = `
    <h2 style="margin:0 0 8px 0;">🎉 Thank you for completing the quiz!</h2>
    <p style="margin:0 0 12px 0;">Your performance has been recorded on the results screen.</p>
    <button id="closeThankYouBtn" style="padding:8px 14px; cursor:pointer;">Close</button>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const close = () => { 
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  };

  document.getElementById('closeThankYouBtn').addEventListener('click', close);

  // auto close
  if (autoCloseMs > 0) {
    setTimeout(close, autoCloseMs);
  }
}

//quit button


// quitBtn.addEventListener("click", function () {
//     if (confirm("Are you sure you want to quit the quiz?")) {
//         // Stop timer safely
//         if (typeof timerInterval !== "undefined") {
//             clearInterval(timerInterval);
//         }

//         // Directly set display styles instead of relying on .hidden
//         quizBox.style.display = "none";
//         sectionSelection.style.display = "block";

//         // Reset score and timer
//         scoreDisplay.textContent = "Score: 0";
//         timeDisplay.textContent = "15";
//     }
// });

document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "quitBtn") {
        if (confirm("Are you sure you want to quit the quiz?")) {
            if (typeof timerInterval !== "undefined") {
                clearInterval(timerInterval);
            }
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("sectionSelection").style.display = "block";
            document.getElementById("score").textContent = "Score: 0";
            document.getElementById("timeLeft").textContent = "15";
        }
    }
});


