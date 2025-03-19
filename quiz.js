const qstions = [
  {
    gener: "sport",
    totalQuestion: 5,
    qestins: [
      {
        qston: "Which country won the FIFA World Cup in 2022?",
        annswers: ["Brazil", "France", "Argentina", "Germany"],
        answer: "Argentina",
      },
      {
        qston: "How many players are on a standard soccer team?",
        annswers: ["9", "10", "11", "12"],
        answer: "11",
      },
      {
        qston: "Which sport is played at Wimbledon?",
        annswers: ["Cricket", "Tennis", "Golf", "Rugby"],
        answer: "Tennis",
      },
      {
        qston: "Who is known as 'The Greatest' in boxing?",
        annswers: [
          "Mike Tyson",
          "Muhammad Ali",
          "Floyd Mayweather",
          "Manny Pacquiao",
        ],
        answer: "Muhammad Ali",
      },
      {
        qston: "Which country hosted the 2016 Summer Olympics?",
        annswers: ["China", "Japan", "Brazil", "USA"],
        answer: "Brazil",
      },
    ],
  },
  {
    gener: "MySQL",
    totalQuestion: 5,
    qestins: [
      {
        qston: "What does SQL stand for?",
        annswers: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Query Logic",
          "System Query Layer",
        ],
        answer: "Structured Query Language",
      },
      {
        qston: "Which command is used to delete a table in MySQL?",
        annswers: ["REMOVE", "DELETE", "DROP", "ERASE"],
        answer: "DROP",
      },
      {
        qston: "What is the default port for MySQL?",
        annswers: ["3306", "8080", "5432", "27017"],
        answer: "3306",
      },
      {
        qston: "Which keyword is used to sort results in MySQL?",
        annswers: ["FILTER", "SORT", "ORDER BY", "GROUP BY"],
        answer: "ORDER BY",
      },
      {
        qston: "Which MySQL function is used to count rows?",
        annswers: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
        answer: "COUNT()",
      },
    ],
  },
  {
    gener: "JavaScript",
    totalQuestion: 5,
    qestins: [
      {
        qston:
          "What is the correct syntax for referring to an external JavaScript file?",
        annswers: [
          '<script href="script.js">',
          '<script name="script.js">',
          '<script src="script.js">',
          '<script file="script.js">',
        ],
        answer: '<script src="script.js">',
      },
      {
        qston: "Which keyword is used to declare a variable in JavaScript?",
        annswers: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
      {
        qston: "What does 'DOM' stand for in JavaScript?",
        annswers: [
          "Data Object Model",
          "Document Object Model",
          "Dynamic Object Management",
          "Display Object Model",
        ],
        answer: "Document Object Model",
      },
      {
        qston: "Which method is used to add an element to the end of an array?",
        annswers: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
      },
      {
        qston: "What is the output of `typeof null` in JavaScript?",
        annswers: ["null", "undefined", "object", "number"],
        answer: "object",
      },
    ],
  },
  {
    gener: "PHP",
    totalQuestion: 5,
    qestins: [
      {
        qston: "What does PHP stand for?",
        annswers: [
          "Personal Home Page",
          "Preprocessed Hypertext Processor",
          "PHP: Hypertext Preprocessor",
          "Private Hosting Protocol",
        ],
        answer: "PHP: Hypertext Preprocessor",
      },
      {
        qston: "Which function is used to output data in PHP?",
        annswers: ["print()", "echo()", "output()", "display()"],
        answer: "echo()",
      },
      {
        qston: "What is the default file extension for PHP files?",
        annswers: [".php", ".html", ".js", ".xml"],
        answer: ".php",
      },
      {
        qston:
          "Which superglobal variable is used to collect form data after submitting an HTML form with method='post'?",
        annswers: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
        answer: "$_POST",
      },
      {
        qston: "What is the correct way to start a session in PHP?",
        annswers: [
          "start_session()",
          "session_begin()",
          "session_start()",
          "begin_session()",
        ],
        answer: "session_start()",
      },
    ],
  },
  {
    gener: "History",
    totalQuestion: 5,
    qestins: [
      {
        qston: "Who was the first President of the United States?",
        annswers: [
          "Thomas Jefferson",
          "George Washington",
          "Abraham Lincoln",
          "John Adams",
        ],
        answer: "George Washington",
      },
      {
        qston: "In which year did World War II end?",
        annswers: ["1943", "1945", "1947", "1950"],
        answer: "1945",
      },
      {
        qston: "Which ancient civilization built the pyramids?",
        annswers: ["Greeks", "Romans", "Egyptians", "Mayans"],
        answer: "Egyptians",
      },
      {
        qston: "Who wrote 'The Communist Manifesto'?",
        annswers: [
          "Karl Marx",
          "Vladimir Lenin",
          "Joseph Stalin",
          "Friedrich Engels",
        ],
        answer: "Karl Marx",
      },
      {
        qston: "Which country was the first to land a man on the moon?",
        annswers: ["USA", "Russia", "China", "India"],
        answer: "USA",
      },
    ],
  },
];
const UrlParms = new URLSearchParams(window.location.search);
const category = UrlParms.get("category");

const courentQst = document.querySelector(".courent-qst");
const totalQst = document.querySelector(".total-qst");
const bar = document.querySelector(".bar");
const tictok = document.querySelector(".tictok");
const content = document.querySelector(".content");
const choics = document.querySelector(".choics");
const next = document.querySelector(".next");
const id = document.querySelector(".id");
const choixx = document.querySelectorAll(".choix");
let inerval;
let curent = 0;
let curentt;
let time = 20;
let correct = 0;
let userANswers = [];
const disbaledBtns = (answer) => {
  document.querySelectorAll(".choix").forEach((answr) => {
    answr.disabled = true;
    if (answr.textContent.toLowerCase() === answer) {
      answr.classList.add("green");
    }
  });
};
const removeAll = () => {
  choixx.forEach((choi) => {
    choi.classList.remove("red");
    choi.classList.remove("green");
    choi.disabled = false;
  });
};

const creatChoices = (qst) => {
  choics.innerHTML = "";
  for (let i = 0; i < qst.qestins[curent].annswers.length; i++) {
    const choix = document.createElement("button");

    choix.textContent = qst.qestins[curent].annswers[i];
    choix.classList.add("choix");
    choics.append(choix);
    removeAll();
  }
};
const creatInterval = () => {
  if (inerval) {
    clearInterval(inerval);
  }
  inerval = setInterval(() => {
    if (time > 0) {
      time--;
      next.disabled = true;
      next.style.background = "gray";
      tictok.textContent = time;
    } else {
      const answer = qstions[curentt].qestins[curent].answer.toLowerCase();
      next.disabled = false;
      next.style.background = "#fa5519";

      disbaledBtns(answer);
    }
  }, 1000);
};
const displayQuestion = () => {
  const quest = qstions.find(
    (qstion) => qstion.gener.toLowerCase() === category.toLowerCase()
  );
  if (quest) {
    totalQst.textContent = quest.totalQuestion;
    courentQst.textContent = curent + 1;
    let barPro = ((curent + 1) / quest.totalQuestion) * 100;
    bar.style.width = `${barPro}%`;
    content.textContent = quest.qestins[curent].qston;
    id.value = qstions.indexOf(quest);
    curentt = id.value;
    creatChoices(quest);
    creatInterval();
  }
};
displayQuestion();

const moveQuiz = () => {
  if (curent < qstions[curentt].qestins.length - 1) {
    curent++;
    time = 20;
    displayQuestion();
    console.log(curent);
  } else {
    next.disabled = true;
    giveResultat();
    console.log(curent);
    console.log("done");
    console.log(userANswers);
  }
};
next.addEventListener("click", moveQuiz);

const checkAnswer = () => {
  choics.addEventListener("click", (e) => {
    if (e.target.classList.contains("choix")) {
      const userAnswer = e.target.textContent.toLowerCase();
      const answer = qstions[curentt].qestins[curent].answer.toLowerCase();
      disbaledBtns(answer);
      clearInterval(inerval);
      next.disabled = false;
      next.style.background = "#fa5519";

      userANswers.push(userAnswer);
      if (userAnswer === answer) {
        e.target.classList.add("green");
        correct++;
      } else {
        e.target.classList.add("red");
      }
      console.log(answer);
      console.log(choics);
    } else {
    }
  });
};

checkAnswer();

const giveResultat = () => {
  document.querySelector(".qwz").innerHTML = "";
  document.querySelector(".qwz").style.display = "none";
  document.querySelector(".qwzs").style.display = "";
  document.querySelector(".qwzs").innerHTML = `
      <h2>Your Results</h2>
      <div class="result">
        <div class="srs">
          <h3>Your answer</h3>
          <ul class="UserAnwr">
            
          </ul>
        </div>
        <div class="srs">
          <h3>Correct answer</h3>
          <ul class="UserAnwr realANswe">
            
          </ul>
        </div>
      </div>

      <h3 class="well"> You answerd ${correct}  of ${qstions[curentt].totalQuestion} </h3>

            <button class="gg"><a href="index.html">Back to home</a></button>

    `;

  userANswers.forEach((answer) => {
    const li = document.createElement("li");
    li.textContent = answer;
    document.querySelector(".UserAnwr").append(li);
  });
  qstions[curentt].qestins.forEach((qst) => {
    const li = document.createElement("li");
    li.textContent = qst.answer;
    document.querySelector(".realANswe").append(li);
  });
};
