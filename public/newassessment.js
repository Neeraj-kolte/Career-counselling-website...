let questions = [];
let answers = [];
let current = 0;
let user = null;

// 1. On page load: Auth check + fetch questions
document.addEventListener("DOMContentLoaded", async () => {
  // Auth check
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    alert("Please login first.");
    window.location.href = "../login.html";
    return;
  }
  user = JSON.parse(userStr);

  // Fetch questions
  let res = await fetch('/api/assessment/questions');
  let data = await res.json();
  if (!data.success) {
    document.getElementById("assessment-container").innerHTML = "<p>Could not load assessment questions.</p>";
    return;
  }
  questions = data.questions;
  answers = new Array(questions.length); // empty answers

  renderQuestion();
});

// 2. Render current question (stepwise)
function renderQuestion() {
  const container = document.getElementById("assessment-container");
  container.innerHTML = "";
  document.getElementById("assessment-result").style.display = "none";

  // Progress bar
  const percent = Math.round(((current) / questions.length) * 100);
  document.getElementById("progress-bar-inner").style.width = `${percent}%`;

  // Question
  const q = questions[current];
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<p>Q${current + 1} of ${questions.length}: ${q.text}</p>`;

  // Options (Likert or MCQ)
  const optsDiv = document.createElement("div");
  optsDiv.className = "options";
  if (q.type === "likert") {
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"].forEach((label, idx) => {
      optsDiv.innerHTML += `
        <label>
          <input type="radio" name="answer" value="${idx+1}" ${answers[current]===(idx+1)?"checked":""} required />
          ${label}
        </label>
      `;
    });
  } else {
    q.options.forEach((opt, idx) => {
      optsDiv.innerHTML += `
        <label>
          <input type="radio" name="answer" value="${opt}" ${answers[current]===opt?"checked":""} required />
          ${opt}
        </label>
      `;
    });
  }
  qDiv.appendChild(optsDiv);
  container.appendChild(qDiv);

  // Navigation
  const navDiv = document.createElement("div");
  navDiv.className = "assessment-nav";
  navDiv.innerHTML = `
    <button class="retake-btn" ${current===0?"disabled":""} id="backBtn">Back</button>
    <button class="retake-btn" id="nextBtn">${current === questions.length - 1 ? "Submit" : "Next"}</button>
  `;
  container.appendChild(navDiv);

  // Event listeners
  document.getElementById("backBtn").onclick = () => {
    saveAnswer();
    if (current > 0) current--;
    renderQuestion();
  };
  document.getElementById("nextBtn").onclick = () => {
    if (!saveAnswer(true)) return; // validate
    if (current === questions.length - 1) submitAssessment();
    else { current++; renderQuestion(); }
  };
}

// 3. Save answer for current question
function saveAnswer(validate=false) {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected && validate) {
    alert("Please select an answer.");
    return false;
  }
  if (selected) {
    const val = (questions[current].type === "likert") ? Number(selected.value) : selected.value;
    answers[current] = val;
    // Optionally: save to localStorage for progress persistence
    localStorage.setItem("assessment-progress", JSON.stringify({answers, current}));
  }
  return true;
}

// 4. Submit assessment
async function submitAssessment() {
  saveAnswer();
  // Disable button to prevent double submit
  document.getElementById("nextBtn").disabled = true;

  // Send to backend
  const res = await fetch('/api/assessment/submit', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ userId: user._id, answers })
  });
  const result = await res.json();
  if (result.success) {
    showResult(result);
    // Clear progress
    localStorage.removeItem("assessment-progress");
  } else {
    alert("Could not submit assessment.");
    document.getElementById("nextBtn").disabled = false;
  }
}

// 5. Show result (careers + analytics)
// 5. Show result (careers + analytics)
function showResult(result) {
    document.getElementById("assessment-container").innerHTML = "";
    document.getElementById("assessment-result").style.display = "block";
    let html = `<h2>🎉 Top Careers for You</h2>`;
    result.careers.forEach(career => {
      // Handle multiple links (array of {label, url})
      let linksHtml = "";
      if (career.links && Array.isArray(career.links)) {
        linksHtml = career.links.map(link =>
          `<a href="${link.url}" target="_blank" style="margin-right:10px;color:#4a3aff;font-weight:600;text-decoration:underline;">${link.label}</a>`
        ).join(" ");
      }
      html += `
        <div class="result-career">
          <h3>${career.name}</h3>
          <p>${career.summary}</p>
          <div>${linksHtml}</div>
        </div>
      `;
    });
  
    // Analytics chart (if breakdown provided)
    if (result.breakdown) {
      html += `<div class="chart-container"><canvas id="analyticsChart"></canvas></div>`;
      setTimeout(() => {
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: Object.keys(result.breakdown),
            datasets: [{
              label: "Your Scores",
              data: Object.values(result.breakdown),
              backgroundColor: "rgba(106,95,255,0.15)",
              borderColor: "#6a5eff",
              pointBackgroundColor: "#43e97b"
            }]
          },
          options: { responsive: true, scales: { r: { beginAtZero: true } } }
        });
      }, 200);
    }
  
    html += `<button class="retake-btn" onclick="retakeAssessment()">Retake Assessment</button>`;
    document.getElementById("assessment-result").innerHTML = html;
  }
  

// 6. Retake assessment
function retakeAssessment() {
  answers = new Array(questions.length);
  current = 0;
  renderQuestion();
}
