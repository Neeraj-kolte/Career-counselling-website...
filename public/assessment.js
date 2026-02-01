const totalQuestions = 6;

function updateProgress() {
  let answered = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) answered++;
  }

  const progressPercent = (answered / totalQuestions) * 100;
  document.getElementById("progressBar").style.width = progressPercent + "%";
}

document
  .getElementById("assessmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = ["q1", "q2", "q3", "q4", "q5", "q6"];
    let scores = { tech: 0, creative: 0, social: 0 };

    for (let q of answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected) scores[selected.value]++;
    }

    let highest = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    let careerText = "";
    if (highest === "tech")
      careerText =
        "Technology – You may enjoy careers in IT, software development, or engineering.";
    else if (highest === "creative")
      careerText =
        "Creative Arts – Design, writing, animation, or content creation might be your zone.";
    else
      careerText =
        "Social Field – Teaching, counselling, marketing, or HR could be ideal for you.";

    document.getElementById("careerResultText").innerText = careerText;
    document.getElementById("resultModal").style.display = "flex";
  });

function closeModal() {
  document.getElementById("resultModal").style.display = "none";
}

function retakeAssessment() {
  document.getElementById("assessmentForm").reset();
  updateProgress();
  closeModal();
}
