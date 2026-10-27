
console.log("script.js connected!");

// Store answers selected by user
let answers = {
  "Paris Saint-Germain": 0,
  "FC Barcelona": 0,
  "Manchester United": 0,
  "Real Madrid": 0
};

// Find all answer buttons on the page
let answerButtons = document.querySelectorAll(".answer-btn");

// Track the user's selections
answerButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let question = button.closest(".question-block");

    // Don't allow another answer for this question
    if (question.dataset.answered === "true") {
      return;
    }

    let team = button.dataset.answer;

    answers[team]++;
    question.dataset.answered = "true";

    // Find all answers for this question
    let buttons = question.querySelectorAll(".answer-btn");

    // Disable all answers and remove previous highlights
    buttons.forEach(function(questionButton) {
      questionButton.classList.remove("selected");
      questionButton.disabled = true;
    });

    // Highlight the answer the user selected
    button.classList.add("selected");
  });
});

// Find the Show Results button
let resultButton = document.querySelector("#show-result");

// Find the results area
let resultContainer = document.querySelector("#result-container");
let resultText = document.querySelector("#result-text");

// Display the winning team
function displayResult() {
  let winningTeam = "";
  let highestScore = 0;

  for (let team in answers) {
    if (answers[team] > highestScore) {
      highestScore = answers[team];
      winningTeam = team;
    }
  }

  if (highestScore === 0) {
    resultText.textContent = "Please answer at least one question first!";
  } else {
    resultText.textContent = "You should support " + winningTeam + "!";
  }

  resultContainer.style.display = "block";
}

// Show results when the button is clicked
resultButton.addEventListener("click", displayResult);
