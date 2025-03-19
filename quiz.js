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

let curent = 0;
let curentt;

const creatLi = (qst) => {
  choics.innerHTML = "";
  qst.qestins[curent].annswers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.classList.add("choix");
    choics.append(answerButton);
  });
};
const showQwiz = () => {
  const qstion = qstions.find(
    (qst) => category.toLowerCase() === qst.gener.toLowerCase()
  );
  if (qstion) {
    curentt = qstions.indexOf(qstion);
    console.log(curentt);
    content.textContent = qstion.qestins[curent].qston;
    totalQst.textContent = qstion.totalQuestion;
    courentQst.textContent = curent + 1;
    creatLi(qstion);
    const calc = ((curent + 1) / qstion.totalQuestion) * 100;
    bar.style.width = `${calc}%`;
  }
};
const moveQuestio = () => {
  curent++;
  if (curent < qstions[curentt].qestins.length) {
    showQwiz();
  } else {
    next.disabled = true;
    content.textContent = "Quiz completed!";
    choics.innerHTML = `<button><a href="index.html">Go home</a></button>`;
  }
};

const disbledAnswers = () => {
  const choic = choics.querySelectorAll(".choix");
  choic.forEach((choix) => {
    choix.disabled = true;
  });
};
const checkanwers = () => {
  choics.addEventListener("click", (e) => {
    if (e.target.classList.contains("choix")) {
      const selectedAnswer = e.target.textContent.toLowerCase();
      const correctAnswer =
        qstions[curentt].qestins[curent].answer.toLowerCase();
      if (selectedAnswer == correctAnswer) {
        e.target.classList.add("green");
      } else {
        console.log(correctAnswer);
        console.log(selectedAnswer);
        e.target.classList.add("red");
      }
      disbledAnswers();
    }
  });
};
showQwiz();
checkanwers();
next.addEventListener("click", moveQuestio);
