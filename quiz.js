function checkAnswer() {
    let correctAnswer = "4";  // Correct answer
     // Get the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
      // Compare the user answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}
// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
