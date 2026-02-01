// Dummy user data
const userData = {
  name: "Rajiv",
  email: "rajiv@example.com",
  quizResult:
    "You are best suited for technology roles like Software Engineer or AI Developer.",
  savedCareers: ["Software Developer", "UI/UX Designer"],
};

document.getElementById("username").textContent = userData.name;
document.getElementById("email").textContent = userData.email;
document.getElementById("quizResult").textContent = userData.quizResult;

const list = document.getElementById("savedCareers");
list.innerHTML = "";
userData.savedCareers.forEach((career) => {
  const li = document.createElement("li");
  li.textContent = career;
  list.appendChild(li);
});

// Logout button function
function logout() {
  alert("You have been logged out!");
  window.location.href = "login.html"; // Redirect to login
}

// Open modal when Edit Profile button is clicked
document.querySelector(".edit-btn").addEventListener("click", () => {
  document.getElementById("editModal").style.display = "block";
  document.getElementById("editName").value = userData.name;
  document.getElementById("editEmail").value = userData.email;
});

// Close modal function
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Handle form submit (save changes)
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const newName = document.getElementById("editName").value;
  const newEmail = document.getElementById("editEmail").value;

  userData.name = newName;
  userData.email = newEmail;

  document.getElementById("username").textContent = newName;
  document.getElementById("email").textContent = newEmail;

  closeModal();
  alert("Profile updated successfully!");
});
