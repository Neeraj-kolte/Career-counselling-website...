document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("⚠ Please enter both email and password.");
    return;
  }

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
  
    if (res.ok && data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("✅ Login successful!");
      // Role-based redirect
      if (data.user.role === "counselor" || data.user.role === "counsellor") {
        window.location.href = "dashboard-counsellor.html";
      } else {
        window.location.href = "dashboard.html";
      }
    } else {
      alert("❌ " + (data.message || "Invalid credentials"));
    }
  } catch (err) {
    console.error(err);
    alert("⚠ Something went wrong on the server!");
  }
});
