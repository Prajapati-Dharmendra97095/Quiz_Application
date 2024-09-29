let selectedCategory = "";

function selectCategory(category) {
  selectedCategory = category;
  document.getElementById(
    "selected-category"
  ).innerText = `Selected category: ${category}`;
}

function startQuiz() {
  const nameInput = document.getElementById("text").value.trim();
  if (nameInput === "") {
    alert("Please enter your name continue.");
    return;
  }
  if (!selectedCategory) {
    alert("Please select a quiz category.");
    return;
  }

  // Hide the initial container
  document.querySelector(".container").style.display = "none";

  // Show the quiz section
  document.getElementById("quiz-section").style.display = "block";

  showQuiz(selectedCategory);
}

function showQuiz(category) {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `<p>Loading ${category} quiz...</p>`;
}
// quizzes
const quizzes = {
  Pipes_And_Cisterns: [
    {
      Question:
        " Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
      options: ["5/11", "6/11", "7/11", "8/11"],
      answer: "6/11",
    },
    {
      Question:
        " Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in: ",
      options: ["30/17 hours", "32/11 hours", "60/17 hours", "9/2 hours"],
      answer: "60/17 hours",
    },
    {
      Question:
        " A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:",
      options: ["13 hours", "7 hours", "8 hours", "14 hours"],
      answer: "14 hours",
    },
    {
      Question:
        " Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
      options: ["5 min.", "9 min.", "10 min.", "15 min."],
      answer: "9 min.",
    },
    {
      Question:
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
      options: ["6 hours", "10 hours", "15 hours", "30 hours"],
      answer: "15 hours",
    },
    {
      Question:
        " Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
      options: ["60 gallons", "60 gallons", "60 gallons", "60 gallons"],
      answer: "120 gallons",
    },
    {
      Question:
        " A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
      options: ["20 hours", "25 hours", "35 hours", "None of these"],
      answer: "35 hours",
    },
    {
      Question:
        " Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
      options: ["1 hour", "2 hours", "6 hours", "8 hours"],
      answer: "6 hours",
    },
    {
      Question:
        " Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
      options: ["12 min", "15 min", "25 min", "50 min"],
      answer: "12 min",
    },
    {
      Question:
        " Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
      options: [
        "10 min. 20 sec.",
        "11 min. 45 sec.",
        "12 min. 30 sec.",
        "14 min. 40 sec.",
      ],
      answer: "14 min. 40 sec.",
    },
  ],

  Probability: [
    {
      Question: " In a throw of a coin, the probability of getting a head is?",
      options: ["1", "1/2", "1/4", "2"],
      answer: "1/2",
    },
    {
      Question:
        " Two unbiased coins are tossed. What is the probability of getting at most one head?",
      options: ["2/3", "1/2", "3/4", "4/3"],
      answer: "3/4",
    },
    {
      Question:
        " An unbiased die is tossed. Find the probability of getting a multiple of 3.",
      options: ["1/4", "1/3", "1/2", "1"],
      answer: "1/3",
    },
    {
      Question:
        " In a simultaneous throw of a pair of dice, find the probability of getting a total more than 7.",
      options: ["3/2", "4/7", "5/12", "6/13"],
      answer: "5/12",
    },
    {
      Question:
        " A bag contains 6 white and 4 black balls. two balls are drawn at random. Find the probability that they are of the same color.",
      options: ["3/4", "5/3", "7/15", "8/17"],
      answer: "7/15",
    },
    {
      Question:
        " Two dice are thrown together. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 6?",
      options: ["13/14", "5/3", "7/16", "7/18"],
      answer: "7/18",
    },
    {
      Question:
        " Two cards are drawn at random from a pack of 52 cards. What is the probability that either both are black or both are queens?",
      options: ["5/21", "55/221", "555/2221", "5555/22221"],
      answer: "55/221",
    },
    {
      Question:
        " A box contains 5 green, 4 yellow and 3 white marbles. Three marbles are drawn at random. What is the probability that they are not of the same color?",
      options: ["3/44", "3/55", "52/55", "41/44"],
      answer: "41/44",
    },
    {
      Question:
        "9 A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red is: ",
      options: ["1/22", "3/22", "2/91", "2/77"],
      answer: "2/91",
    },
    {
      Question:
        " A bag contains 2 red, 3 green, and 2 blue balls. two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
      options: ["10/21", "11/21", "2/7", "5/7"],
      answer: "10/21",
    },
  ],

  Problem_On_Ages: [
    {
      Question:
        " Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
      options: ["2 times", "5/2 times", "11/2 times", "3 times"],
      answer: "2 times",
    },
    {
      Question:
        " Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age?",
      options: ["1.5 times", "2 times", "2.5 times", "3 times"],
      answer: "2.5 times",
    },
    {
      Question:
        " Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.",
      options: [" 32.5 years", " 27.5 years", " 25 years", " 24.9 years"],
      answer: " 27.5 years",
    },
    {
      Question:
        " One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?",
      options: ["5 years", "25 years", "10 years", "15 years"],
      answer: "10 years",
    },
    {
      Question:
        " Ten years ago, the age of mother was three times the age of her son. After ten years, mother’s age will be twice that of his son. Find the ratio of their present ages.",
      options: ["11 : 7", "09 : 5", "07 : 4", "07 : 3"],
      answer: "07 : 3",
    },
    {
      Question:
        " Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?",
      options: ["20 years", "30 years", "40 years", "25 years"],
      answer: "20 years",
    },
    {
      Question:
        " The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)",
      options: ["40, 50", "18, 25", "40, 60", "20, 25"],
      answer: "40, 50",
    },
    {
      Question:
        " Dinesh is younger to Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is Dinesh?",
      options: ["36 years", "23 years", "29 years", " Cannot be determined"],
      answer: "36 years",
    },
    {
      Question:
        " The ratio of Sara’s age 4 years ago and Vaishali’s age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara’s age 4 years hence and Vaishali’s age 4 years ago.",
      options: ["1 : 3", "3 : 1", "4 : 3", "3 : 4"],
      answer: "3 : 1",
    },
    {
      Question:
        " What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?",
      options: ["6.2 years", "7.7 years", "13.3 years", "10 years"],
      answer: "13.3 years",
    },
  ],
  Profit_And_Loss: [
    {
      Question:
        " David sold a bicycle at Rs 2100 and made a loss of 25%. At what price should he sell the bicycle if he wants to make a profit of 15%?",
      options: ["Rs 2500", "Rs 2990", "Rs 3220", "Rs 3500"],
      answer: "3220",
    },
    {
      Question:
        " The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
      options: ["Rs. 1800", "Rs. 2000", "Rs. 2250", "Rs. 2500"],
      answer: "Rs. 2000",
    },
    {
      Question:
        " A loss of 20% is made by selling an article. Had it been sold for Rs 240 more, there would have been a profit of 10%. What would be the selling price of the article if it is sold at 25% profit?",
      options: ["Rs 960", "Rs 1000", "Rs 1040", "Rs 1080"],
      answer: "Rs 1000",
    },
    {
      Question:
        " Cost price of 12 articles is equal to the selling price of 8 articles. Find the profit / loss %?",
      options: ["20% loss", "50% loss", "33.33% profit", "50% profit"],
      answer: "50% profit",
    },
    {
      Question:
        " By selling 33 m. cloth, a shopkeeper loses money equivalent to selling price of 11 m. Find his loss percentage.",
      options: ["20%", "25%", "33.33%", "50%"],
      answer: "25%",
    },
    {
      Question:
        " If selling price is doubled then, the profit triples. What is profit per cent?",
      options: ["20%", "75%", "100%", "50%"],
      answer: "100%",
    },
    {
      Question:
        " On selling 15 balls at Rs 400 there is loss equal to Cost Price of 5 balls. The cost price of a ball is?",
      options: ["Rs 30", "Rs 35", "Rs 40", "Rs 45"],
      answer: "Rs 40",
    },
    {
      Question:
        " A person buys 18 pens for 12 Rs and sells 12 pens for 18 rupees. Find his profit percentage.",
      options: ["150%", "100%", "125%", "200%"],
      answer: "125%",
    },
    {
      Question:
        " A dishonest shopkeeper professes to sell pulses at the cost price, but he uses a false weight of 950gm. for a kg. His gain is____%.",
      options: ["5%", "11%", "44/19%", "55/19%"],
      answer: "55/19%",
    },
    {
      Question:
        " A dishonest shopkeeper professes to sell pulses at the 20% profit , also he uses a false weight of 800gm for a kg, His actual gain is____%.",
      options: ["25%", "15%", "20%", "50%"],
      answer: "50%",
    },
  ],
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn2").addEventListener("click", function () {
    var nameInput = document.getElementById("text").value.trim();

    if (nameInput === "") {
      alert("Please select a quiz category.");
    } else {
      // Proceed with the quiz or any other logic you have
      document.querySelector(".container").style.display = "none";
      document.querySelector(".quiz-selection").style.display = "block";
    }
  });
});

// Variables to manage quiz
let currentQuizType = "";
let currentQuestionIndex = 0;
let timerInterval;
let timeRemaining = 10;
let score = 0;

// Function to show the quiz based on selection
function showQuiz(type) {
  currentQuizType = type;
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 10;
  document.getElementById("score").textContent = `Score: ${score}`;

  // Hide container2 and container1
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container1").style.display = "none";

  // Show the quiz
  document.querySelector(".quiz-selection").style.display = "none";
  document.getElementById("result").classList.remove("active");
  document.getElementById("quiz-container").classList.add("active");
  document.querySelector(".quiz-info").style.display = "flex";
  document.getElementById("quiz-container").innerHTML = "";
  startTimer();
  showQuestion();
}

function showQuestion() {
  const quiz = quizzes[currentQuizType];
  if (currentQuestionIndex >= quiz.length) {
    // If no more questions, show result
    submitQuiz();
    return;
  }

  const question = quiz[currentQuestionIndex];
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
        <div class="question">
            <p>${currentQuestionIndex + 1}. ${question.Question}</p>
            <ul class="options">
                ${question.options
                  .map(
                    (option, i) => `
                    <li>
                        <input type="radio" name="question${currentQuestionIndex}" value="${i}" id="q${currentQuestionIndex}o${i}">
                        <label for="q${currentQuestionIndex}o${i}">${option}</label>
                    </li>
                `
                  )
                  .join("")}
            </ul>
        </div>
        ${
          currentQuestionIndex < 9
            ? '<button onclick="nextQuestion()">Next</button>'
            : '<button onclick="submitQuiz()">Submit</button>'
        }
    `;

  // Ensure the "Next" button is shown only when appropriate
  if (currentQuestionIndex < 9) {
    const quizButton = document.querySelector("#quiz-container button");
    quizButton.style.display = "inline-block";
    quizButton.style.width = "230px";
    quizButton.style.height = "30px";
  } else {
    const buttonStyle = document.querySelector("#quiz-container button").style;
    buttonStyle.cssText = "display: inline-block; width: 230px; height: 30px;";
  }

  // Restart the timer for the current question
  resetTimer();
}

function nextQuestion() {
  const quiz = quizzes[currentQuizType];
  const question = quiz[currentQuestionIndex];
  const selectedOption = document.querySelector(
    `input[name="question${currentQuestionIndex}"]:checked`
  );
  if (
    selectedOption &&
    selectedOption.nextElementSibling.textContent.trim() === question.answer
  ) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  currentQuestionIndex++;
  showQuestion();
}
// Function to submit the quiz and show results
function submitQuiz() {
  clearInterval(timerInterval); // Stop the timer

  // Get the user's name from the input
  const nameInput = document.getElementById("text").value.trim();

  // Calculate the time taken for the quiz
  const timeTaken = 10 - timeRemaining;

  // Display the result with the user's name, score, and time taken
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <h2>Quiz Results</h2>
        <p>Name: ${nameInput}</p>
        <p>Your score: ${score}/${quizzes[currentQuizType].length}</p>
        <p>Time taken: ${timeTaken} seconds</p>
    `;

  // Show the result section
  resultDiv.classList.add("active");

  // Hide the quiz container and quiz info (timer and score)
  document.getElementById("quiz-container").style.display = "none";
  document.querySelector(".quiz-info").style.display = "none";

  // Optionally, show the quiz selection buttons again (if needed)
  document.querySelector(".quiz-selection").style.display = "flex";
}

// Function to start the timer
function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 10;
  startTimer();
}

// Function to reset the timer when a new question is displayed
function startTimer() {
  const timer = document.getElementById("timer");
  timer.textContent = `Time: ${timeRemaining}s`;
  timerInterval = setInterval(() => {
    timeRemaining--;
    timer.textContent = `Time: ${timeRemaining}s`;
    if (timeRemaining <= 0) {
      nextQuestion();
      timeRemaining = 10; // Reset time remaining for the next question
    }
  }, 1000);
}
