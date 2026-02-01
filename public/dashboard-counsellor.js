// Profile & Stats Overview
document.addEventListener("DOMContentLoaded", async () => {
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }
  const user = JSON.parse(userStr);
  if (user.role !== "counselor") {
    alert("Access denied!");
    window.location.href = "dashboard.html";
    return;
  }

  // Avatar and profile info
  document.getElementById("profile-avatar").textContent = (user.fullname ||
    user.name ||
    "C")[0].toUpperCase();
  document.getElementById("profile-fullname").textContent =
    user.fullname || user.name || "";
  document.getElementById("profile-email").textContent = user.email || "";
  document.getElementById("profile-phone").textContent = user.phone || "";

  // Fetch profile from backend
  const res = await fetch(`/api/counsellor/profile?email=${user.email}`);
  const data = await res.json();
  if (data.success) {
    document.getElementById("counsellor-upi").value = data.profile.upiId || "";
    document.getElementById("counsellor-fees").value = data.profile.fees || "";
  }

  // Save profile
  document.getElementById("profile-form").onsubmit = async (e) => {
    e.preventDefault();
    const body = {
      fullname: document.getElementById("profile-fullname").textContent,
      upiId: document.getElementById("counsellor-upi").value,
      fees: document.getElementById("counsellor-fees").value,
      email: document.getElementById("profile-email").textContent,
    };
    const res = await fetch("/api/counsellor/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    if (result.success) {
      alert("Profile updated!");
      window.location.reload();
    } else {
      alert("Failed to update profile.");
    }
  };

  // Load requests and stats
  loadRequests();
});

// Requests & Stats
let allRequests = [];
async function loadRequests() {
  const userStr = localStorage.getItem("user");
  const user = JSON.parse(userStr);
  const res = await fetch(`/api/counsellor/requests?email=${user.email}`);
  const data = await res.json();
  const listDiv = document.getElementById("requests-list");
  if (!data.success) {
    listDiv.innerHTML = "<p>Failed to load requests.</p>";
    return;
  }
  allRequests = data.requests;
  updateStats(allRequests);
  renderRequests(allRequests);
  renderRequestChart(allRequests);

  // New calls for reports card
  renderEarningsChart(allRequests);
  fillRequestsReportTable(allRequests);
}
window.loadRequests = loadRequests;

function updateStats(requests) {
  document.getElementById("stat-total").textContent = requests.length;
  document.getElementById("stat-accepted").textContent = requests.filter(
    (r) => r.status === "accepted"
  ).length;
  document.getElementById("stat-pending").textContent = requests.filter(
    (r) => r.status === "pending"
  ).length;
  document.getElementById("stat-declined").textContent = requests.filter(
    (r) => r.status === "declined"
  ).length;
}

function renderRequests(requests) {
  const filter = document.getElementById("request-filter").value;
  const filtered =
    filter === "all" ? requests : requests.filter((r) => r.status === filter);
  const listDiv = document.getElementById("requests-list");
  if (filtered.length === 0) {
    listDiv.innerHTML = "<p>No requests found.</p>";
    return;
  }
  listDiv.innerHTML = filtered
    .map(
      (req) => `
    <div class="request-card">
      <div>
        <strong>${req.userId ? req.userId.fullname : "Unknown User"}</strong>
        <span class="badge ${req.status}">${
        req.status.charAt(0).toUpperCase() + req.status.slice(1)
      }</span>
      </div>
      <div>Email: ${req.userId ? req.userId.email : "-"}</div>
      <div>Type: ${req.type}</div>
      <div>Payment Ref: ${req.paymentRef || "-"}</div>
      <div>Date: ${new Date(req.createdAt).toLocaleString()}</div>
      <div>Status: <b>${req.status}</b></div>
      <div class="request-card-actions">
        ${
          req.status === "pending"
            ? `
          <button class="accept" onclick="updateRequestStatus('${req._id}', 'accepted')"><i class="fas fa-check"></i> Accept</button>
          <button class="decline" onclick="updateRequestStatus('${req._id}', 'declined')"><i class="fas fa-times"></i> Decline</button>
        `
            : ""
        }
        ${
          req.status === "accepted" && req.userId
            ? `
          <button class="call" onclick="callRecipient('${req.userId.phone}')"><i class="fas fa-phone"></i> Call</button>
          <button class="email" onclick="openEmailModal('${req.userId.email}')"><i class="fas fa-envelope"></i> Email</button>
        `
            : ""
        }
      </div>
    </div>
  `
    )
    .join("");
}

function filterRequests() {
  renderRequests(allRequests);
}
window.filterRequests = filterRequests;

async function updateRequestStatus(requestId, status) {
  const res = await fetch(`/api/counsellor/requests/${requestId}/status`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }), // Sirf status bhejo
  });
  const data = await res.json();
  if (data.success) {
    alert("Request updated!");
    loadRequests();
  } else {
    alert("Failed to update request.");
  }
}

// Phone & Email actions
async function callRecipient(phoneNumber) {
  if (/^\d{10}$/.test(phoneNumber)) {
    phoneNumber = "+91" + phoneNumber;
  }
  const response = await fetch("/make-call", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: phoneNumber }),
  });
  const result = await response.json();
  alert(result.message || "Call initiated!");
}
function openEmailModal(email) {
  document.getElementById("toEmail").value = email;
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
  document.getElementById("email-modal").style.display = "flex";
}
function closeEmailModal() {
  document.getElementById("email-modal").style.display = "none";
}

// Chart rendering functions
function renderRequestChart(requests) {
  const accepted = requests.filter((r) => r.status === "accepted").length;
  const pending = requests.filter((r) => r.status === "pending").length;
  const declined = requests.filter((r) => r.status === "declined").length;
  const ctx = document.getElementById("requestChart").getContext("2d");
  if (window.requestChartObj) window.requestChartObj.destroy(); // Prevent multiple charts
  window.requestChartObj = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Accepted", "Pending", "Declined"],
      datasets: [
        {
          data: [accepted, pending, declined],
          backgroundColor: [
            "#43e97b", // Accepted (green)
            "#ffd200", // Pending (yellow)
            "#e63946", // Declined (red)
          ],
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#232946",
            font: {
              size: 16,
              weight: "bold",
            },
            padding: 20,
          },
        },
      },
    },
  });
}

function renderEarningsChart(requests) {
  const earningsByMonth = {};
  requests.forEach((r) => {
    if (r.status === "accepted") {
      const d = new Date(r.createdAt);
      const month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}`;
      earningsByMonth[month] = (earningsByMonth[month] || 0) + (r.fees || 0);
    }
  });
  const labels = Object.keys(earningsByMonth).sort();
  const data = labels.map((m) => earningsByMonth[m]);

  console.log("Bar chart labels:", labels);
  console.log("Bar chart data:", data);

  const ctx = document.getElementById("earningsChart").getContext("2d");
  if (window.earningsChartObj) window.earningsChartObj.destroy();
  window.earningsChartObj = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Earnings (₹)",
          data,
          backgroundColor: "var(--primary)",
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { ticks: { color: "var(--text)", font: { weight: "bold" } } },
        y: { ticks: { color: "var(--text)", font: { weight: "bold" } } },
      },
    },
  });

  console.log("All requests:", requests);
}

function fillRequestsReportTable(requests) {
  const tbody = document.getElementById("requests-report-table");
  tbody.innerHTML = requests
    .map(
      (r) => `
    <tr>
      <td style="padding:8px;">${r.userId?.fullname || "Unknown"}</td>
      <td>${r.userId?.email || "-"}</td>
      <td>${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</td>
      <td>${new Date(r.createdAt).toLocaleDateString()}</td>
      <td>${r.fees || "-"}</td>
    </tr>
  `
    )
    .join("");

  const total = requests
    .filter((r) => r.status === "accepted")
    .reduce((sum, r) => sum + (r.fees || 0), 0);
  document.getElementById("total-earnings").textContent = total;
}

document.addEventListener("DOMContentLoaded", function () {
  // ...aapka existing code...

  // Email form submit logic
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const toEmail = document.getElementById("toEmail").value;
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!subject || !message) {
        alert("Subject and message are required.");
        return;
      }

      // Yahan aap apne backend API ko call kar sakte hain:
      fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: toEmail, subject, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("Email sent successfully!");
            closeEmailModal(); // Modal band kar do
          } else {
            alert(data.message || "Failed to send email.");
          }
        })
        .catch((err) => {
          alert("Error sending email.");
          console.error(err);
        });
    });
  }
});

function closeEmailModal() {
  document.getElementById("email-modal").style.display = "none";
}
