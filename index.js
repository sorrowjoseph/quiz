const problem = document.querySelector(".problem");
const ourForm = document.querySelector(".our-form");
const ourField = document.querySelector(".our-field");

let state = {
  score: 0,
  wrongAnswer: 0,
};

function updateProblem() {
  state.currentProblem = generateProblem();
  problem.textContent = ` ${state.currentProblem.first} ${state.currentProblem.operator} ${state.currentProblem.second}`;
}

updateProblem();

ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let p = state.currentProblem;
  let correctAnswer;
  if (p.operator == "+") correctAnswer = p.first + p.second;
  if (p.operator == "-") correctAnswer = p.first - p.second;
  if (p.operator == "x") correctAnswer = p.first * p.second;

  if (parseInt(ourField.value, 10) === correctAnswer) {
    state.score++;
  } else {
    state.wrongAnswer++;
  }

  console.log(correctAnswer);
}

function generateRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateProblem() {
  return {
    first: generateRandom(10),
    second: generateRandom(10),
    operator: ["+", "-", "x"][generateRandom(2)],
  };
}
