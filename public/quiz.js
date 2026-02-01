document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let answers = ["q1", "q2", "q3", "q4", "q5"];
  let scores = { tech: 0, design: 0, management: 0 };

  answers.forEach((q) => {
    let answer = document.querySelector(`input[name="${q}"]:checked`);
    if (answer) {
      scores[answer.value]++;
    }
  });

  let maxCategory = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let resultText = "";

  if (maxCategory === "tech") {
    resultText =
      "You are best suited for technology-related roles like Software Engineer, Data Scientist, or DevOps Engineer.";
  } else if (maxCategory === "design") {
    resultText =
      "You are best suited for creative roles like UI/UX Designer, Graphic Designer, or AR/VR Developer.";
  } else {
    resultText =
      "You are best suited for leadership roles like Product Manager, Systems Analyst, or Business Consultant.";
  }

  document.getElementById("resultText").innerText = resultText;
  document.getElementById("resultBox").style.display = "block";
});
