async function fetchProfile() {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("Please login first.");
      window.location.href = "../login.html";
      return;
    }
    const user = JSON.parse(userStr);
  
    // Show basic info
    document.getElementById("profile-name").textContent = user.name || user.fullname || "User";
    document.getElementById("profile-avatar").textContent = (user.name || user.fullname || "U")[0].toUpperCase();
    document.getElementById("profile-role").textContent = user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "";
    document.getElementById("profile-email").textContent = user.email || "";
    document.getElementById("profile-phone").textContent = user.phone || "";
    document.getElementById("profile-date").textContent = user.createdAt ? (new Date(user.createdAt)).toLocaleDateString() : "";
  
    // Fetch assessment history from backend
    let res = await fetch(`/api/user/assessments?userId=${user._id}`);
    let data = await res.json();
    if (!data.success) {
      document.getElementById("latest-assessment").innerHTML = "<p>No assessment found.</p>";
      document.getElementById("assessment-history").innerHTML = "";
      return;
    }
  
    // Show latest assessment
    if (data.assessments && data.assessments.length > 0) {
      const latest = data.assessments[0];
      document.getElementById("latest-assessment").innerHTML = renderAssessmentCard(latest, true);
  
      // Show assessment history (excluding latest)
      let historyHtml = "";
      data.assessments.slice(1).forEach(a => {
        historyHtml += renderAssessmentCard(a, false);
      });
      document.getElementById("assessment-history").innerHTML = historyHtml || "<p>No previous attempts.</p>";
    } else {
      document.getElementById("latest-assessment").innerHTML = "<p>No assessment found.</p>";
      document.getElementById("assessment-history").innerHTML = "";
    }
  }
  
  function renderAssessmentCard(assessment, showFull) {
    let html = `<div class="assessment-card">`;
    html += `<h4>${assessment.result && assessment.result.careers && assessment.result.careers.length ? "Top Careers:" : "Assessment Result"}</h4>`;
    if (assessment.result && assessment.result.careers) {
      assessment.result.careers.forEach(career => {
        let linksHtml = "";
        if (career.links && Array.isArray(career.links)) {
          linksHtml = career.links.map(link =>
            `<a href="${link.url}" target="_blank" style="margin-right:10px;color:#4a3aff;font-weight:600;text-decoration:underline;">${link.label}</a>`
          ).join(" ");
        }
        html += `<div style="margin-bottom:8px;"><b>${career.name}</b>: ${career.summary} <br>${linksHtml}</div>`;
      });
    }
    if (assessment.result && assessment.result.breakdown && showFull) {
      html += `<div style="margin:10px 0 0 0;"><b>Scores:</b> `;
      Object.entries(assessment.result.breakdown).forEach(([k, v]) => {
        html += `<span style="margin-right:10px;">${k}: ${v}</span>`;
      });
      html += `</div>`;
    }
    html += `<div style="font-size:0.92rem;color:#888;margin-top:6px;">Attempted: ${(new Date(assessment.createdAt)).toLocaleString()}</div>`;
    html += `</div>`;
    return html;
  }
  
  function logoutUser() {
    localStorage.removeItem("user");
    window.location.href = "../login.html";
  }
  
  fetchProfile();
  