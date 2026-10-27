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

    // Disable all answers in this question
    let buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach(function(questionButton) {
      questionButton.disabled = true;
    });
  });
});

// Find the Show Results button
let resultButton = document.querySelector("#show-result");

// Find the results area
let resultContainer = document.querySelector("#result-container");
let resultText = document.querySelector("#result-text");

// Display the winning team
resultButton.addEventListener("click", function() {
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
});