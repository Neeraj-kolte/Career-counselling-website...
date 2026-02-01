const counsellorMap = {};

document.addEventListener("DOMContentLoaded", () => {
  try {
    const userStr = localStorage.getItem("user");

    if (userStr) {
      const user = JSON.parse(userStr);

      // Check if required fields exist
      if (user && (user.name || user.fullname) && user.email && user.role) {
        // Show user info
        document.getElementById("user-name").textContent =
          user.name || user.fullname;
        document.getElementById("user-email").textContent = user.email;
        // Optionally show role
        if (document.getElementById("user-role")) {
          document.getElementById("user-role").textContent = user.role;
        }

        // Role-based dashboard
        if (user.role === "counselor") {
          // Counselor dashboard show, user dashboard hide
          document.getElementById("counselor-dashboard").style.display =
            "block";
          document.getElementById("user-dashboard").style.display = "none";
        } else {
          // User dashboard show, counselor dashboard hide
          document.getElementById("user-dashboard").style.display = "block";
          document.getElementById("counselor-dashboard").style.display = "none";
        }
      } else {
        throw new Error("Invalid user data");
      }
    } else {
      throw new Error("No user in localStorage");
    }
  } catch (err) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  // Logout functionality
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      window.location.href = "login.html";
    });
  }
});

// 1. User ki requests fetch karne ka function
async function fetchUserRequests() {
  const userStr = localStorage.getItem("user");
  if (!userStr) return [];
  const user = JSON.parse(userStr);
  const res = await fetch(`/api/user/my-requests?userId=${user._id}`);
  const data = await res.json();
  if (data.success) {
    return data.requests; // Array of user's requests
  }
  return [];
}

// 2. Counsellor cards render karne ka function
async function renderCounsellorCards() {
  // Counsellors list fetch karo
  const counsellorRes = await fetch("/api/auth/counsellors");
  const counsellorData = await counsellorRes.json();
  if (!counsellorData.success) return;

  // User ki requests fetch karo
  const requests = await fetchUserRequests();

  // Render cards
  const listDiv = document.getElementById("counsellor-list");
  listDiv.innerHTML = "";

  counsellorData.counsellors.forEach((c) => {
    counsellorMap[c._id] = c; // Yeh line add karo

    // Find request for this counsellor
    const req = requests.find((r) => r.counsellorId === c._id);

    // Main counsellor card
    // Main counsellor card
    let cardHtml = `
<div class="counsellor-card">
  <strong>${c.fullname || c.name}</strong>
  <span>Email: ${c.email}</span>
  <span>Fee: ₹${c.fees}</span>
  <span>UPI ID: ${c.upiId}</span>
  ${
    !req
      ? `<button onclick="openPaymentModal('${c._id}')">Request Counselling</button>`
      : `<span style="color:#1db954;font-weight:600;">Request sent (${req.status})</span>`
  }
</div>
`;

    // If request accepted and user hasn't chosen contact method
    // if (req && req.status === 'accepted' && !req.userContactPreference) {
    // cardHtml += `
    //   <div class="counsellor-card contact-method-card">
    //     <div class="contact-method-title">Select Contact Method</div>
    //     <div class="contact-method-btns">
    //       <button class="contact-btn email" onclick="chooseContact('${req._id}', 'email')">Email</button>
    //       <button class="contact-btn voice" onclick="chooseContact('${req._id}', 'voice')">Voice Call</button>
    //       <button class="contact-btn sms" onclick="chooseContact('${req._id}', 'sms')">SMS</button>
    //     </div>
    //   </div>
    // `;
    // }

    // If already chosen, show selected method
    //     if (req && req.userContactPreference) {
    //       cardHtml += `
    //   <div class="counsellor-card selected-method-card">
    //     <div class="contact-method-title">Your selected contact method:</div>
    //     <div class="selected-method">${req.userContactPreference.toUpperCase()}</div>
    //   </div>
    // `;
    //     }

    // Communication buttons: Only if request accepted
    //   if (req && req.status === "accepted") {
    //     cardHtml += `
    //   <div class="comm-buttons">
    //     <button onclick="callRecipient('${c.phone}')">Call Counsellor</button>
    //     <button onclick="openEmailModal('${c.email}')">Email Counsellor</button>
    //   </div>
    // `;
    //   }

    // // If already chosen, show selected method
    // if (req && req.userContactPreference) {
    //   cardHtml += `
    //     <div class="card" style="width: 18rem; display:inline-block; margin:10px; background:#e6ffe6; vertical-align:top;">
    //       <div class="card-body">
    //         <h6 class="card-title">Your selected contact method:</h6>
    //         <p><b>${req.userContactPreference.toUpperCase()}</b></p>
    //       </div>
    //     </div>
    //   `;
    // }

    listDiv.innerHTML += cardHtml;
  });
}

// 3. Contact Preference Handler
async function chooseContact(requestId, method) {
  const res = await fetch("/api/user/contact-preference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requestId, preference: method }),
  });
  const data = await res.json();
  if (data.success) {
    alert("Preference saved!");
    renderCounsellorCards();
  } else {
    alert("Error saving preference");
  }
}

// 4. Page load pe naya function call karo
document.addEventListener("DOMContentLoaded", renderCounsellorCards);

let selectedCounsellorId = null;
function openRequestModal(counsellorId) {
  selectedCounsellorId = counsellorId;
  const c = counsellorMap[counsellorId];
  document.getElementById("counsellor-upi").textContent =
    c.upiId || "Not Provided";
  document.getElementById("counsellor-fee").textContent = c.fees
    ? `₹${c.fees}`
    : "Not Provided";
  document.getElementById("request-modal").style.display = "flex";
}

function closeRequestModal() {
  document.getElementById("request-modal").style.display = "none";
}

async function sendCounsellingRequest() {
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }
  const user = JSON.parse(userStr);
  const type = document.getElementById("contact-type").value;
  const paymentRef = document.getElementById("payment-ref").value.trim();

  if (!selectedCounsellorId || !type || !paymentRef) {
    alert("Please fill all fields.");
    return;
  }

  const res = await fetch("/api/user/request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      counsellorId: selectedCounsellorId,
      paymentRef,
      type,
    }),
  });
  const data = await res.json();
  if (data.success) {
    alert("Request sent!");
    closeRequestModal();
  } else {
    alert("Failed to send request.");
  }
}

async function callRecipient(phoneNumber) {
  console.log("Calling:", phoneNumber);
  // Agar phone 10 digit ka hai toh +91 prefix lagao
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

let selectedCounsellorForPayment = null;

// Open Payment Modal
function openPaymentModal(counsellorId) {
  selectedCounsellorForPayment = counsellorId;
  const c = counsellorMap[counsellorId];
  document.getElementById("payment-upi").textContent =
    c.upiId || "Not Provided";
  document.getElementById("payment-fee").textContent = c.fees
    ? `₹${c.fees}`
    : "Not Provided";
  // Set default amount in form
  document.querySelector('#payment-form input[name="amount"]').value =
    c.fees || "";
  document.getElementById("payment-status").textContent = "";
  document.getElementById("payment-modal").style.display = "flex";
}

// Close Payment Modal
function closePaymentModal() {
  document.getElementById("payment-modal").style.display = "none";
}

// Payment Form Submit Handler
document.getElementById("payment-form").onsubmit = async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    cardNumber: form.cardNumber.value,
    cardHolder: form.cardHolder.value,
    expiry: form.expiry.value,
    cvv: form.cvv.value,
    amount: form.amount.value,
  };
  // 1. Fake Payment Gateway ko request bhejo
  const res = await fetch("http://localhost:5100/api/v1/payment/card", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (json.success) {
    document.getElementById("payment-status").textContent =
      "Payment Success! Sending request to counsellor...";
    // 2. Counsellor ko request bhejo (backend API ko call karo)
    await sendCounsellingRequestAfterPayment();
    closePaymentModal();
  } else {
    document.getElementById("payment-status").textContent =
      "Payment Failed. Try again!";
  }
};

// Yeh function backend ko request bhejega
async function sendCounsellingRequestAfterPayment() {
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }
  const user = JSON.parse(userStr);
  const counsellorId = selectedCounsellorForPayment;
  const amount = document.querySelector(
    '#payment-form input[name="amount"]'
  ).value;

  // Backend API ko POST karo
  const res = await fetch("/api/user/request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      counsellorId,
      amount,
      // aur bhi fields agar chahiye toh
    }),
  });
  const data = await res.json();
  if (data.success) {
    showToast("Your counselling request has been sent!");

    renderCounsellorCards(); // List update karne ke liye
  } else {
    showToast("Failed to send request. Please try again.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // 3 seconds
}

window.callRecipient = callRecipient; // Global access ke liye

window.openRequestModal = openRequestModal;
window.closeRequestModal = closeRequestModal;
window.sendCounsellingRequest = sendCounsellingRequest;
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
