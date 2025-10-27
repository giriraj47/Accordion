const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const current = answers[index];
    const checkIfBlock = current.style.display === "block";

    answers.forEach((answers) => {
      answers.style.display = "none";
    });

    current.style.display = checkIfBlock ? "none" : "block";
  });
});
